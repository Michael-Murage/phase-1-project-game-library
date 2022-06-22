const div = document.getElementById('interface')
const select = document.getElementById('select')
const tic = document.getElementById('tic-tac-toe')
const rockps = document.getElementById('rock-ps')
const hockey = document.getElementById('air-hockey')

select.addEventListener('click', unHideMenu)

function unHideMenu(){
    tic.classList.remove('hidden')
    rockps.classList.remove('hidden')
    hockey.classList.remove('hidden')
}

function hideMenu(){
    tic.classList.add('hidden')
    rockps.classList.add('hidden')
    hockey.classList.add('hidden')
}


let one, two, three, four, five, six, seven, eight, nine;
let randomArr = [];

tic.addEventListener('click', addTictactoeToPage)

function addTictactoeToPage(){
    startTictactoe()
    for(let i=1; i<=9; i++){
        let box = document.createElement('div')
        box.id = `${i}`
        box.classList.add('box')
        div.appendChild(box)
    }
    hideMenu()
    one = document.getElementById('1')
    two = document.getElementById('2')
    three = document.getElementById('3')
    four = document.getElementById('4')
    five = document.getElementById('5')
    six = document.getElementById('6')
    seven = document.getElementById('7')
    eight = document.getElementById('8')
    nine = document.getElementById('9')
    
    let box = document.querySelectorAll('.box')
    // div.addEventListener('click', addPlayer1)
    // div.addEventListener('click', add)
    box.forEach(b => b.addEventListener('click', (e)=>{
        const firstChoice = valueId()
        let userChoice1 = generateUserChoice(e)
        
        if(randomArr.length === 1){
            delete firstChoice[`${userChoice1}`]
            let compChoice1 = parseFloat(randomise(firstChoice))
            let compChoice1Elem = document.getElementById(`${compChoice1}`)
            compChoice1Elem.textContent = 'O'
            delete firstChoice[`${compChoice1}`]
        }
        
        
        let userChoice2 = generateUserChoice(e)
        console.log(randomArr)
        if(randomArr.length === 2){
            delete firstChoice[`${userChoice2}`]
            let compChoice2 = parseFloat(randomise(firstChoice))
            let compChoice2Elem = document.getElementById(`${compChoice2}`)
            compChoice2Elem.textContent = 'O'
            delete firstChoice[`${compChoice2}`]
        }
        
        let userChoice3 = generateUserChoice(e)
        console.log(randomArr)
        if(randomArr.length === 3){
            
            delete firstChoice[`${userChoice3}`]
            let compChoice3 = parseFloat(randomise(firstChoice))
            let compChoice3Elem = document.getElementById(`${compChoice3}`)
            compChoice3Elem.textContent = 'O'
            delete firstChoice[`${compChoice3}`]
        }
        let userChoice4 = generateUserChoice(e)
        
        if(randomArr.length === 4){
            
            delete firstChoice[`${userChoice4}`]
            let compChoice4 = parseFloat(randomise(firstChoice))
            let compChoice4Elem = document.getElementById(`${compChoice4}`)
            compChoice4Elem.textContent = 'O'
            delete firstChoice[`${compChoice4}`]
        }
}))
}


function randomise(obj){
    let keys = []
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            keys.push(prop)
        }
    }
    return keys[keys.length * Math.random() << 0]
}

// function addPlayer1(e){
//     if(e.target.innerText === ''){
//         e.target.innerText = 'X'
//     }
//     console.log(e)
// }

function generateUserChoice(e){
    if(e.target.innerText === ''){
        e.target.innerText = 'X'
    }
    if(e.target.innerText === 'X'){
        randomArr.push('X')
    }
}

// function addPlayer2(e){
//     if(e.target.innerText === ''){
//         e.target.innerText = 'O'
//     }
// }

// function generateUser2Choice(){
//     div.addEventListener('click', (e)=>{
    
// })
// }

function checkWin(){
    
}



function stopTictactoe(){
    div.classList.remove('parentGrid')
    div.classList.add('#interface')
}

function startTictactoe(){
    div.classList.remove('#interface')
    div.classList.add('parentGrid')
}



// let userChoice1 = generateUserChoice(e)
//         const firstChoice = valueId()
//         delete firstChoice[`${userChoice1}`]
//         let compChoice1 = parseFloat(randomise(firstChoice))
//         let compChoice1Elem = document.getElementById(`${compChoice1}`)
//         compChoice1Elem.textContent = 'O'
//         delete firstChoice[`${compChoice1}`]
        
//         let userChoice2 = generateUserChoice(e)
//         delete firstChoice[`${userChoice2}`]
//         let compChoice2 = parseFloat(randomise(firstChoice))
//         let compChoice2Elem = document.getElementById(`${compChoice2}`)
//         compChoice2Elem.textContent = 'O'
//         delete firstChoice[`${compChoice2}`]
        
//         let userChoice3 = generateUserChoice(e)
//         delete firstChoice[`${userChoice3}`]
//         let compChoice3 = parseFloat(randomise(firstChoice))
//         let compChoice3Elem = document.getElementById(`${compChoice3}`)
//         compChoice3Elem.textContent = 'O'
//         delete firstChoice[`${compChoice3}`]

//         let userChoice4 = generateUserChoice(e)
//         delete firstChoice[`${userChoice4}`]
//         let compChoice4 = parseFloat(randomise(firstChoice))
//         let compChoice4Elem = document.getElementById(`${compChoice4}`)
//         compChoice4Elem.textContent = 'O'
//         delete firstChoice[`${compChoice4}`]

function valueId(){
    return{
        1: 'one',
        2: "two",
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
}