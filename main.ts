let dust = 0
let humidity = 0
let temperature = 0
OLED.init(128, 64)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    basic.pause(5000)
    if (temperature > 36) {
        basic.pause(5000)
        if (temperature > 36) {
            basic.pause(5000)
            if (temperature > 36) {
                basic.pause(5000)
                if (temperature > 36) {
                    basic.pause(5000)
                    if (temperature > 36) {
                        basic.pause(5000)
                        if (temperature > 36) {
                            basic.pause(5000)
                            if (temperature > 36) {
                                basic.pause(5000)
                                if (temperature > 36) {
                                    basic.pause(5000)
                                    if (temperature > 36) {
                                        basic.pause(5000)
                                        if (temperature > 36) {
                                            basic.pause(5000)
                                            if (temperature > 36) {
                                                basic.pause(5000)
                                                for (let index = 0; index < 4; index++) {
                                                    music.playMelody("C5 B A G F E D C ", 900)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    basic.pause(5000)
    if (temperature < 0) {
        basic.pause(5000)
        if (temperature > 0) {
            basic.pause(5000)
            if (temperature > 0) {
                basic.pause(5000)
                if (temperature > 0) {
                    basic.pause(5000)
                    if (temperature > 0) {
                        basic.pause(5000)
                        if (temperature > 0) {
                            basic.pause(5000)
                            if (temperature > 0) {
                                basic.pause(5000)
                                if (temperature > 0) {
                                    basic.pause(5000)
                                    if (temperature > 0) {
                                        basic.pause(5000)
                                        if (temperature > 0) {
                                            basic.pause(5000)
                                            if (temperature > 0) {
                                                basic.pause(5000)
                                                for (let index = 0; index < 4; index++) {
                                                    music.playMelody("C D E F G A B C5 ", 900)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (Environment.octopus_BME280(Environment.BME280_state.BME280_humidity) >= 75) {
        servos.P1.setAngle(180)
        servos.P2.setAngle(180)
        humidity = 1
    } else {
        humidity = 0
    }
    // humidity
    if (Environment.ReadDust(DigitalPin.P14, AnalogPin.P9) >= 81) {
        servos.P1.setAngle(180)
        servos.P2.setAngle(180)
        dust = 1
    } else {
        dust = 0
    }
})
basic.forever(function () {
    basic.clearScreen()
    temperature = input.temperature()
    if (temperature < 20) {
        servos.P1.setAngle(180)
        servos.P2.setAngle(180)
        basic.pause(2000)
    } else {
        if (temperature > 20) {
            if (dust == 1 && humidity == 1) {
            	
            } else {
                servos.P1.setAngle(0)
                servos.P2.setAngle(0)
                basic.pause(2000)
            }
        }
    }
})
basic.forever(function () {
    OLED.writeStringNewLine("temperture" + temperature)
    OLED.writeStringNewLine("dust" + Environment.ReadDust(DigitalPin.P14, AnalogPin.P9))
    OLED.writeStringNewLine("humidity" + Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    basic.pause(1000)
    OLED.clear()
})
