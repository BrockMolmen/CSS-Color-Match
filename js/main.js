console.log('is this thing on?')
// global game veriables
let roundCount = 0
let playerScore = 0

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


    getPool() {
        for (let i = 0; i < this.CyanLevelColors.length; i++) {
            let colorName = this.CyanLevelColors[i]
            let possAnswer = document.createElement('li')
            possAnswer.setAttribute('class', 'choice')
            possAnswer.innerHTML = colorName
            document.getElementById('answerPool').appendChild(possAnswer)
        }
    },
}

document.querySelector('.startButton').addEventListener('click', () => {
    levelOne.shuffleColors()
    levelOne.buildStage()
    levelOne.shuffleColors()
    levelOne.getPool()
}
)

const checkScore = () => {
    let playerAnswers = document.querySelectorAll('.answerInput')
    let correctAnswers = document.querySelectorAll('.colorBox')
    ////test test//
    console.log(playerAnswers[0].value)
    console.log(correctAnswers[0].style.backgroundColor)

//////check check check//////
    if (playerAnswers[0].value ===  correctAnswers[0].style.backgroundColor) {console.log('00000')}
    if (playerAnswers[1].value ===  correctAnswers[1].style.backgroundColor) {console.log('1111111')}
    if (playerAnswers[2].value ===  correctAnswers[2].style.backgroundColor) {console.log('22222')}
    if (playerAnswers[3].value ===  correctAnswers[3].style.backgroundColor) {console.log('333333')}
    if (playerAnswers[4].value ===  correctAnswers[4].style.backgroundColor) {console.log('444444')}
    if (playerAnswers[0].value !==  correctAnswers[0].style.backgroundColor) {console.log('444444')}
/////////////////////////////

    for (let i = 0; i <= correctAnswers.length; i++) {
        if (playerAnswers[i].value ===  correctAnswers[i].style.backgroundColor) {
            playerScore++
        } 
        else if (playerAnswers[i].value !== correctAnswers[i].style.backgroundColor) {
            console.log('wrong')
        }
        console.log("-==-==-=-==--=")
        console.log(playerScore)
        }
    }

    ///new method that check check asnwers
    //aswer array . player answer

    // let correctCheck = Array.apply(playerCheck)

    // console.log('p', playerAnswer, 'c', correctAnswer)
    // if ( playerAnswer == )
// }


// let resetStage = () => {
//     //resets stage
//     document.getElementById('input').innerHTML = ''
// }


document.querySelector('.submitButton').addEventListener('click', () => {
    checkScore()
    // compareAnswers()
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
