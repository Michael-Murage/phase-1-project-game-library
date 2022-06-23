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


let one, two, three, four, five, six, seven, eight, nine, turn;
let randomArr = [];

function stopTictactoe(){
    div.classList.remove('parentGrid')
    div.classList.add('#interface')
}

function startTictactoe(){
    div.classList.remove('#interface')
    div.classList.add('parentGrid')
}

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
    let firstChoice
}
    //First play
    //div.addEventListener('click', playFirst)

    function checkWin(){
        if(one.innerText === 'O' && two.innerText==='O' && three.innerText==="O" ||
        one.innerText==='O' && four.innerText==='O' && seven.innerText==='O' ||
        one.innerText==='O' && five.innerText==='O' && nine.innerText==='O' ||
        three.innerText==='O' && six.innerText==='O' && nine.innerText==='O' ||
        three.innerText==='O' && five.innerText==='O' && seven.innerText==='O' ||
        seven.innerText==='O' && eight.innerText==='O' && nine.innerText==='O' ||
        two.innerText==='O' && five.innerText==='O' && eight.innerText==='O' ||
        four.innerText==='O' && five.innerText==='O' && six.innerText==='O' ){
            return 'Lose'
        }
        else if(one.innerText === 'X' && two.innerText==='X' && three.innerText==="X" ||
        one.innerText==='X' && four.innerText==='X' && seven.innerText==='X' ||
        one.innerText==='X' && five.innerText==='X' && nine.innerText==='X' ||
        three.innerText==='X' && six.innerText==='X' && nine.innerText==='X' ||
        three.innerText==='X' && five.innerText==='X' && seven.innerText==='X' ||
        seven.innerText==='X' && eight.innerText==='X' && nine.innerText==='X' ||
        two.innerText==='X' && five.innerText==='X' && eight.innerText==='X' ||
        four.innerText==='X' && five.innerText==='X' && six.innerText==='X' ){
            return 'Win'
        }
    }

    
    