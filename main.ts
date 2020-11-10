basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= Y; X++) {
            led.plot(4 - Y, X)
            led.plot(4 - X, Y)
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
