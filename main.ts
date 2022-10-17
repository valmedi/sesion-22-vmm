input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let chimi = game.createSprite(0, 2)
let daniela = game.createSprite(randint(1, 4), randint(0, 4))
let Hanna = game.createSprite(randint(1, 4), randint(0, 4))
let alexa = game.createSprite(randint(1, 4), randint(0, 4))
chimi.set(LedSpriteProperty.Brightness, 120)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        chimi.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        chimi.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        chimi.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        chimi.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (chimi.isTouching(daniela)) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.OnceInBackground)
        daniela.delete()
        game.addScore(1)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (chimi.isTouching(alexa)) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.OnceInBackground)
        alexa.delete()
        game.addScore(1)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (chimi.isTouching(Hanna)) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.OnceInBackground)
        Hanna.delete()
        game.addScore(1)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
    if (game.score() == 3) {
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
    daniela.set(LedSpriteProperty.X, randint(1, 4))
    daniela.set(LedSpriteProperty.Y, randint(1, 4))
    alexa.set(LedSpriteProperty.X, randint(1, 4))
    alexa.set(LedSpriteProperty.Y, randint(1, 4))
    Hanna.set(LedSpriteProperty.X, randint(1, 4))
    Hanna.set(LedSpriteProperty.Y, randint(1, 4))
})
