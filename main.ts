input.onButtonPressed(Button.A, function () {
    start_time = input.runningTime()
    mode = 1
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
})
let duration = 0
let start_time = 0
let mode = 0
basic.showIcon(IconNames.Happy)
mode = 0
basic.forever(function () {
    basic.showNumber(duration)
    if (mode == 1) {
        if (input.runningTime() - start_time > duration * 1000) {
            edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
            edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
        }
    }
    duration = Math.round(pins.map(
    edubitPotentioBit.readPotValue(),
    0,
    1023,
    0,
    60
    ))
})
