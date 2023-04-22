let pwm_value = 1023
loops.everyInterval(500, function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    } else {
        if (pwm_value < 1023) {
            pwm_value += 1
            pins.analogWritePin(AnalogPin.P0, pwm_value)
            basic.showString("" + (pwm_value))
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (pwm_value > 0) {
            pwm_value += -1
            basic.showString("" + (pwm_value))
        } else {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            pins.analogWritePin(AnalogPin.P0, pwm_value)
        }
    } else {
    	
    }
})
