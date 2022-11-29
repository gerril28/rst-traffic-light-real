input.onButtonPressed(Button.A, function () {
    RED()
    for (let index = 0; index < 5; index++) {
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
    basic.pause(1000)
    GREEN()
    for (let index = 0; index < 15; index++) {
        green += -1
        basic.showString("" + (green))
        basic.pause(1000)
    }
    basic.pause(1000)
    YELLOW()
    for (let index = 0; index < 2; index++) {
        basic.showNumber(yellow)
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
    basic.pause(1000)
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.B, function () {
    RED()
    basic.pause(1000)
})
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let pedestrian = 0
let green = 0
let yellow = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
yellow = 2
green = 15
pedestrian = 5
basic.forever(function () {
	
})
