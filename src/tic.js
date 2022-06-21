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
    one = document.getElementById('1').innerHTML
    two = document.getElementById('2').innerHTML
    three = document.getElementById('3').innerHTML
    four = document.getElementById('4').innerHTML
    five = document.getElementById('5').innerHTML
    six = document.getElementById('6').innerHTML
    seven = document.getElementById('7').innerHTML
    eight = document.getElementById('8').innerHTML
    nine = document.getElementById('9').innerHTML
    let box = document.querySelectorAll('.box')
    box.forEach(playTictactoe)
}

function playTictactoe(b){
    b.addEventListener('click', (e)=>{
        
        
        
    })
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

function generateUserChoice(e){
    if(e.target.innerText === ''){
        e.target.innerText = 'X'
    }
    return parseFloat(e.target.id)
}

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

// function valueId(){
//     return{
//         1: 'one',
//         2: "two",
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine'
//     }
// }