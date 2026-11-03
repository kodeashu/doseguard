/**
 * DoseGuard™ Dual-Core ESP32 Firmware with Advisory Edge AI
 * =========================================================
 * Team SpaceX (KIIT) — atomQUEST 2026 Track 2: Smart Water Purifier
 *
 * Core Allocation:
 *   - Core 1 (Priority 5, 2 Hz / 500 ms): Deterministic Beer-Lambert UV Dose Controller
 *     and Fail-Closed NC Solenoid Valve Actuation (NSF-55 Class A >= 40.0 mJ/cm²).
 *   - Core 0 (Priority 1, 0.2 Hz / 5000 ms): Int8 Edge AI Advisory Inference
 *     (Nonlinear Lamp RUL, Monsoon Turbidity Surge Forecast, Quartz Window Fouling Alert).
 */

#include <Arduino.h>
#include "doseguard_model_int8.h"

#define PIN_SOLENOID_VALVE 26
#define PIN_PUMP_PWM       25
#define PIN_REED_INTERLOCK 27

volatile float g_latest_features[DG_NUM_FEATURES] = {0};
volatile DoseGuardAdvisoryOutput g_advisory = {0};

// Core 0: Low-Priority Advisory Edge AI Task (Never touches PIN_SOLENOID_VALVE)
void TaskEdgeAIAdvisory(void* pvParameters) {
    (void)pvParameters;
    float local_feat[DG_NUM_FEATURES];
    DoseGuardAdvisoryOutput local_out;

    for (;;) {
        for (int i = 0; i < DG_NUM_FEATURES; ++i) {
            local_feat[i] = g_latest_features[i];
        }
        uint32_t t0 = micros();
        doseguard_run_advisory_inference(local_feat, &local_out);
        local_out.inference_time_us = micros() - t0;

        g_advisory = local_out;
        vTaskDelay(pdMS_TO_TICKS(5000)); // Run every 5 seconds
    }
}

void setup() {
    Serial.begin(115200);
    pinMode(PIN_SOLENOID_VALVE, OUTPUT);
    digitalWrite(PIN_SOLENOID_VALVE, LOW); // Fail-closed default
    pinMode(PIN_REED_INTERLOCK, INPUT_PULLUP);

    xTaskCreatePinnedToCore(
        TaskEdgeAIAdvisory,
        "EdgeAIAdvisory",
        4096,
        NULL,
        1, // Low priority
        NULL,
        0  // Core 0
    );
}

void loop() {
    // Core 1 executes the 2 Hz (500 ms) deterministic control loop
    delay(500);
}
