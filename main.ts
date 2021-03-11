basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showString("d")
    }
    if (input.compassHeading() == 180) {
        basic.showString("b")
    }
    if (input.compassHeading() == 90) {
        basic.showString("k")
    }
    if (input.compassHeading() == 270) {
        basic.showString("g")
    }
})
