const { describe, expect, test, it, beforeEach } = require('@jest/globals')
const BowlingGame = require('../classes/bowlingGame.js')

beforeEach(() => {
    game = new BowlingGame()
})

it('Should return 0 for a game of all 0s', () => {
    rollAGame(0, 20)
    expect(game.score).toEqual(0)
})

it('Should return 1 for a game of all 1s', () => {
    rollAGame(1, 20)
    expect(game.score).toEqual(20)
})

it('Should return correct score when hits a spare', () => {
    game.roll(5)
    game.roll(5)
    game.roll(4)
    rollAGame(0, 17)

    expect(game.score).toEqual(18)
})

it('Should return correct score when hits a strike', () => {
    game.roll(10)
    game.roll(2)
    game.roll(2)
    rollAGame(0, 17)

    expect(game.score).toEqual(18)
})

it('Should return correct score in the next game: 39', () => {
    game.roll(1)
    game.roll(1) //2
    game.roll(5) 
    game.roll(5) //13
    game.roll(1) //14
    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1) // 21
    game.roll(10) // 33
    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1) // 39
    rollAGame(0, 20)

    expect(game.score).toEqual(39)
})

function rollAGame (pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins)
    }
}

