class BowlingGame {
    constructor() {
        this.rolls = [];
    }
    
    roll(pins){
        this.rolls.push(pins);
    }

    startGame() {
        for(let i = 0; i < this.rounds; i++) {
            
        }
    }

    get score() {
        let score = 0
        let actualRoll = 0

        for(let roundIndex = 0; roundIndex < 10; roundIndex++){
            if (this.rolls[actualRoll] === 10) {
                score += 10 + this.rolls[actualRoll + 1] + this.rolls[actualRoll + 2];
                actualRoll++;
                continue;
            }

            const scoreIndex = this.rolls[actualRoll] + this.rolls[actualRoll + 1]

            if(this.ifSpare(scoreIndex)){
                score += this.sparePlus(actualRoll)
            } else {
                score += scoreIndex
            }
            actualRoll += 2
        }
        return score;
    }

    ifSpare(scoreIndex) {
        return scoreIndex === 10
    }
    
    sparePlus(actualRoll) {
        return 10 + this.rolls[actualRoll + 2]
    }
}

module.exports = BowlingGame
