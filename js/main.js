console.log('is this thing on?')
// global game veriables
let roundCount = 0
let playerScore = 0

////////////////////////////////////////////
//can i build it into an object for each level////////

const levelOne = {
    // Cyan Color Array
    CyanLevelColors: ['cadetblue', 'cyan', 'lightcyan', 'darkcyan', 'teal'],
    // Let's make some Idividule Fuctions that work like below...
    shuffleColors() {
        for (let i = this.CyanLevelColors.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            const temp = this.CyanLevelColors[i]
            this.CyanLevelColors[i] = this.CyanLevelColors[j]
            this.CyanLevelColors[j] = temp
        }
    },
    // //////////////////////////Shuffle works and i can call it twice with differenet results
    // shuffleColors()
    // console.log(CyanLevelColors)
    // shuffleColors()
    // console.log(CyanLevelColors)
    ///////////////////////////////////
    buildStage() {
        for (let i = 0; i < this.CyanLevelColors.length; i++) {
            let colorName = this.CyanLevelColors[i]
            const createColorBox = document.createElement('div')
            createColorBox.style.backgroundColor = this.CyanLevelColors[i]
            createColorBox.setAttribute('class', 'colorBox')
            createColorBox.setAttribute('id', 'colorBox')
            levelContainer.appendChild(createColorBox)
            //================================add Input box over the color box
            let guessBox = document.createElement('input')
            guessBox.setAttribute('type', 'text')
            guessBox.setAttribute('class', 'answerInput')
            guessBox.setAttribute('id', 'answerInput')
            createColorBox.appendChild(guessBox)
        }
    },
    ////////////////////////////////buildStage works and randomized colors
    // shuffleColors()
    // buildStage()

    getPool() {
        for (let i = 0; i < this.CyanLevelColors.length; i++) {
            let colorName = this.CyanLevelColors[i]
            let possAnswer = document.createElement('li')
            possAnswer.setAttribute('class', 'choice')
            possAnswer.innerHTML = colorName
            document.getElementById('answerPool').appendChild(possAnswer)
        }
    },
    ////////////////////////////getPool Works with shufflecolors
    // shuffleColors()
    // getPool()

    //////////////////////////checkScore is not working
    ///need to compare the input aginst the div background color..
    //build array with selectorall. then build loops to check [i] postion 
}

document.querySelector('.startButton').addEventListener('click', () => {
    levelOne.shuffleColors()
    levelOne.buildStage()
    levelOne.shuffleColors()
    levelOne.getPool()
}
)

const buildAnswerArrays = () => {
    let playerAnswers = document.querySelectorAll('.answerInput')
    let correctAnswers = document.querySelectorAll('.colorBox')//.style.backgroundColor.value
    console.log(playerAnswers[0].value)
    console.log(correctAnswers[0].style.backgroundColor)
    // for (let i = 0; i <= correctAnswers.length; i++) {
    //     if (playerAnswers.[i] == )
    // }


    ///new method that check check asnwers
    //aswer array . player answer

    // let correctCheck = Array.apply(playerCheck)

    // console.log('p', playerAnswer, 'c', correctAnswer)
    // if ( playerAnswer == )
}


// let resetStage = () => {
//     //resets stage
//     document.querySelectorAll('input').reset()
// }


document.querySelector('.submitButton').addEventListener('click', () => {
    buildAnswerArrays()
    compareAnswers()
})

// document.querySelector('.resetButton').addEventListener('click', resetStage)

// ///////////////////////////////////////////////////////////////////////////////////////
// // color Levels
// const CyanLevelColors = ['cadetblue', 'cyan', 'lightcyan', 'darkcyan', 'teal']

// // Let's make some Idividule Fuctions that work like below...
// const shuffleColors = () => {
//     for (let i = CyanLevelColors.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * i)
//         // console.log(j)
//         const temp = CyanLevelColors[i]
//         CyanLevelColors[i] = CyanLevelColors[j]
//         CyanLevelColors[j] = temp
// }}
// // //////////////////////////Shuffle works and i can call it twice with differenet results
// // shuffleColors()
// // console.log(CyanLevelColors)
// // shuffleColors()
// // console.log(CyanLevelColors)
// ///////////////////////////////////
// const buildStage = () => {
//     for (let i = 0; i < CyanLevelColors.length; i++) {
//                 let colorName = CyanLevelColors[i]
//                 const createColorBox = document.createElement('div')
//                 createColorBox.style.backgroundColor = CyanLevelColors[i]
//                 createColorBox.setAttribute('class', 'colorBox')
//                 levelContainer.appendChild(createColorBox)

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
// shuffleColors()
// getPool()

// const checkScore = () => {
// how to check across levelcontainer.colorbox and levelcontainer.colorbox.answerinput
// }

// //================================crate squares with color in them
// const levelOne = () => {
//     for (let i = 0; i < CyanLevelColors.length; i++) {
//         let colorName = CyanLevelColors[i]
//         //console.log(colorName)
//         const createColorBox = document.createElement('div')
//         createColorBox.style.backgroundColor = CyanLevelColors[i]
//         createColorBox.setAttribute('class', 'colorBox')
//         levelContainer.appendChild(createColorBox)

//         //================================add Input box over the color box
//         let guessBox = document.createElement('input')
//         guessBox.setAttribute('class', 'answerInput')
//         createColorBox.appendChild(guessBox)

//         //================================how to populate the poosible answersPool
//         /////////////////////////SHuffle?
//         //need to be random order. or colors random order // maybe seprate fuctions? in levelObject??
//         let possAnswer = document.createElement('li')
//         possAnswer.setAttribute('class', 'choice')
//         possAnswer.innerHTML = colorName
//         document.getElementById('answerPool').appendChild(possAnswer)
//     }
//     }

//remove start function once in game

//resetButton to clear colors, round, and score

//function for submitButton to check answerInput aginst backgroundColor??

// add to score

//next level (does this need to be a button too?)



/// Making the buttons work