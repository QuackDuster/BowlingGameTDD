const BowlingGame = require('./src/classes/bowlingGame.js')

game = new BowlingGame()

for(let i = 0; i < 20; i++) {
    game.roll(Math.floor(Math.random() * 10))

}

console.log(game.roll)

console.log(`The final score obtainded is: ${game.score}`)

function rollAGame (pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins)
    }
}
