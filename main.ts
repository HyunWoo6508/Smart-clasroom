let humidity = 0
let dust = 0
let servo = 0
let temperature = 0
OLED.init(128, 64)
basic.forever(function () {
    temperature = input.temperature()
    if (temperature < 20) {
        pins.servoWritePin(AnalogPin.P2, 180)
        pins.servoWritePin(AnalogPin.P14, 180)
        pins.servoWritePin(AnalogPin.P15, 180)
        basic.pause(2000)
        servo = 0
    } else {
        if (temperature > 20) {
            if (dust == 1 && humidity == 1) {
            	
            } else {
                pins.servoWritePin(AnalogPin.P2, 0)
                pins.servoWritePin(AnalogPin.P14, 0)
                pins.servoWritePin(AnalogPin.P15, 0)
                basic.pause(2000)
                servo = 1
            }
        }
    }
    basic.showString("" + (temperature))
})
basic.forever(function () {
    if (Environment.octopus_BME280(Environment.BME280_state.BME280_humidity) >= 75) {
        pins.servoWritePin(AnalogPin.P2, 180)
        pins.servoWritePin(AnalogPin.P14, 180)
        pins.servoWritePin(AnalogPin.P15, 180)
        humidity = 1
    } else {
        humidity = 0
    }
    // humidity
    if (Environment.ReadDust(DigitalPin.P13, AnalogPin.P1) >= 81) {
        pins.servoWritePin(AnalogPin.P2, 180)
        pins.servoWritePin(AnalogPin.P14, 180)
        pins.servoWritePin(AnalogPin.P15, 180)
        dust = 1
    } else {
        dust = 0
    }
})
basic.forever(function () {
    OLED.writeStringNewLine("dust" + Environment.ReadDust(DigitalPin.P13, AnalogPin.P1))
    OLED.writeStringNewLine("humidity" + Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    if (servo == 0) {
        OLED.writeStringNewLine("180 spined")
    } else {
        if (servo == 1) {
            OLED.writeStringNewLine("0 spined")
        }
    }
    basic.pause(1000)
    OLED.clear()
})
