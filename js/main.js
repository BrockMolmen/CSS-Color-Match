console.log('is this thing on?')
// global game veriables
let roundCount = 0
let playerScore = 0

// color Levels
const CyanLevelColors = ['cadetblue', 'cyan', 'lightcyan', 'darkcyan', 'teal']

//================================crate squares with color in them
const levelOne = () => {
    for (let i = 0; i < CyanLevelColors.length; i++) {
        let colorName = CyanLevelColors[i]
        console.log(colorName)
        const createColorBox = document.createElement('div')
        createColorBox.style.backgroundColor = CyanLevelColors[i]
        createColorBox.setAttribute('class', 'colorBox')
        levelContainer.appendChild(createColorBox)

        //================================add Input box over the color box
        let guessBox = document.createElement('input')
        guessBox.setAttribute('class', 'answerInput')
        createColorBox.appendChild(guessBox)

        //================================how to populate the poosible answersPool
        //need to be random order. or colors random order // maybe seprate fuctions? in levelObject??
        let possAnswer = document.createElement('li')
        possAnswer.setAttribute('class', 'choice')
        possAnswer.innerHTML = colorName
        document.getElementById('answerPool').appendChild(possAnswer)
    }
    /////////////////////////SHuffle?
    
    }

//remove start function once in game

//resetButton to clear colors, round, and score

//function for submitButton to check answerInput aginst backgroundColor??

// add to score

//next level (does this need to be a button too?)




document.querySelector('.startButton').addEventListener('click', levelOne)
