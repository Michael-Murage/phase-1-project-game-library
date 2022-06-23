const div = document.getElementById('interface')
const select = document.getElementById('select')
const tic = document.getElementById('tic-tac-toe')
const rockps = document.getElementById('rock-ps')
const hockey = document.getElementById('air-hockey')
const header = document.getElementById('header')


select.addEventListener('click', unHideMenu, {once:true})

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

let one, two, three, four, five, six, seven, eight, nine, xturn;
    
function stopTictactoe(){
    div.classList.remove('parentGrid')
    div.classList.add('#interface')
}

function startTictactoe(){
    div.classList.remove('#interface')
    div.classList.add('parentGrid')
}


tic.addEventListener('click', addTictactoeToPage, {once:true})


function addTictactoeToPage(){
    startTictactoe()
    for(let i=1; i<=9; i++){
    let box = document.createElement('div')
    box.id = `${i}`
    box.classList.add('box')
    div.appendChild(box)
    }

    let container = document.querySelector('.parentGrid')
    container.style.width = '30rem'
    container.style.height = '30rem'

    let state = document.createElement('p')
    state.textContent = 'Letter O starts the game'
    header.append(state)

    
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

    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('click', handleClick, {once : true})
    })

    function handleClick(e){
        const elem = e.target
        const decision = xturn ? elem.innerText = 'X' : elem.innerText = 'O'
        
        inputLet(elem, decision)
        changeDecision()
        checkWin()
        if(state.innerText === 'O wins' || state.innerText === 'X wins'){
            boxes.forEach(box=>{box.removeEventListener('click', handleClick)})
        }
    }

    function inputLet(elem, dec){
        elem.dec
    }

    function changeDecision(){
        xturn = !xturn
    }

    function checkWin(){
        if(one.innerText === 'O' && two.innerText==='O' && three.innerText==="O" ||
        one.innerText==='O' && four.innerText==='O' && seven.innerText==='O' ||
        one.innerText==='O' && five.innerText==='O' && nine.innerText==='O' ||
        three.innerText==='O' && six.innerText==='O' && nine.innerText==='O' ||
        three.innerText==='O' && five.innerText==='O' && seven.innerText==='O' ||
        seven.innerText==='O' && eight.innerText==='O' && nine.innerText==='O' ||
        two.innerText==='O' && five.innerText==='O' && eight.innerText==='O' ||
        four.innerText==='O' && five.innerText==='O' && six.innerText==='O' ){
            state.innerText = 'O wins'
            return
        }
        else if(one.innerText === 'X' && two.innerText==='X' && three.innerText==="X" ||
        one.innerText==='X' && four.innerText==='X' && seven.innerText==='X' ||
        one.innerText==='X' && five.innerText==='X' && nine.innerText==='X' ||
        three.innerText==='X' && six.innerText==='X' && nine.innerText==='X' ||
        three.innerText==='X' && five.innerText==='X' && seven.innerText==='X' ||
        seven.innerText==='X' && eight.innerText==='X' && nine.innerText==='X' ||
        two.innerText==='X' && five.innerText==='X' && eight.innerText==='X' ||
        four.innerText==='X' && five.innerText==='X' && six.innerText==='X' ){
            state.innerText = 'X wins'
            return 
        }

    }
}