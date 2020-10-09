console.log('is this thing on?')
// global game veriables
let roundCount = 0
let playerScore = 0

const levelOne = {
    
    // Level Color Array - used to build stage and answerPool
    CyanLevelColors: ['cadetblue', 'cyan', 'lightcyan', 'darkcyan', 'teal'],

    //shuffles colors for random display 
    shuffleColors() {
        for (let i = this.CyanLevelColors.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            const temp = this.CyanLevelColors[i]
            this.CyanLevelColors[i] = this.CyanLevelColors[j]
            this.CyanLevelColors[j] = temp
        }
    },

    //builds divs and set background color and id/class
    buildStage () {
        for (let i = 0; i < this.CyanLevelColors.length; i++) {
            let colorName = this.CyanLevelColors[i]
            const createColorBox = document.createElement('div')
            createColorBox.style.backgroundColor = this.CyanLevelColors[i]
            createColorBox.setAttribute('class', 'colorBox')
            createColorBox.setAttribute('id', 'colorBox')
            levelContainer.appendChild(createColorBox)
            //Adds an input box ontop of the colorbox div
            let guessBox = document.createElement('input')
            guessBox.setAttribute('type', 'text')
            guessBox.setAttribute('class', 'answerInput')
            guessBox.setAttribute('id', 'answerInput')
            createColorBox.appendChild(guessBox)
        }
        
    },
    
    //Scraps randomized array of color names and displays them for the player to use. 
    getPool () {
        for (let i = 0; i < this.CyanLevelColors.length; i++) {
            let colorName = this.CyanLevelColors[i]
            let possAnswer = document.createElement('li')
            possAnswer.setAttribute('class', 'choice')
            possAnswer.innerHTML = colorName
            document.getElementById('answerPool').appendChild(possAnswer)
        }
    },
    //reserts Input boxes
    resetStage() {
        document.getElementById('levelContainer').reset()
        playerScore = 0
        document.getElementById('playerScoreContainer').innerHTML = `Score: ${playerScore}`
    }
}
    //grabs input and correct answers and compares them, updates score and modifies color of incorect answer
    const checkScore = () => {
        let playerAnswers = document.querySelectorAll('.answerInput')
        let correctAnswers = document.querySelectorAll('.colorBox')
        for (let i = 0; i < correctAnswers.length; i++) {
            if (playerAnswers[i].value === correctAnswers[i].style.backgroundColor) {
                playerScore++
            } else if (playerAnswers[i].value !== correctAnswers[i].style.backgroundColor) {
                console.log('wrong')

                playerAnswers[i].style.color = 'rgba(255, 255, 255, 0.4)'

            }
            document.getElementById('playerScoreContainer').innerHTML = `Score: ${playerScore}`
        }
    }
    
    document.querySelector('.startButton').addEventListener('click', () => {
        levelOne.shuffleColors()
        levelOne.buildStage()
        levelOne.shuffleColors()
        levelOne.getPool()
    })
    
    document.querySelector('.submitButton').addEventListener('click', checkScore)
    
    document.querySelector('.resetButton').addEventListener('click', levelOne.resetStage)
    

//                 //================================add Input box over the color box
//                 let guessBox = document.createElement('input')
//                 guessBox.setAttribute('class', 'answerInput')
//                 createColorBox.appendChild(guessBox)
// }}
// ////////////////////////////////buildStage works and randomized colors
// shuffleColors()
// buildStage()

// const getPool = () => {
//     for (let i = 0; i < CyanLevelColors.length; i++) {
//         let colorName = CyanLevelColors[i]
//         let possAnswer = document.createElement('li')
//         possAnswer.setAttribute('class', 'choice')
//         possAnswer.innerHTML = colorName
//         document.getElementById('answerPool').appendChild(possAnswer)
// }}
// ////////////////////////////getPool Works with shufflecolors
