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
        //box.textContent = `${i}`
        box.id = `${i}`
        box.classList.add('box')
        div.appendChild(box)
    }
    hideMenu()
    one = document.getElementById('1').innerText
    two = document.getElementById('2').innerText
    three = document.getElementById('3').innerText
    four = document.getElementById('4').innerText
    five = document.getElementById('5').innerText
    six = document.getElementById('6').innerText
    seven = document.getElementById('7').innerText
    eight = document.getElementById('8').innerText
    nine = document.getElementById('9').innerText
    let box = document.querySelectorAll('.box')
    box.forEach(playTictactoe)
}

function playTictactoe(b){
    b.addEventListener('click', (e)=>{
        generateUserChoice(e)
        // generateCompChoice()
    })
}

function generateUserChoice(e){
    if(e.target.innerText === ''){
        e.target.innerText = 'X'
    }
}

function generateCompChoice(){
    const rand = Math.floor(Math.random() * 9) + 1
       
    // if(rand === 1 && one.innerHTML === ''){
        //     one.innerHTML = 'O'
        // }else if(rand === 2 && two.innerHTML === ''){
        //     two.innerHTML = 'O'
        // }else if(rand === 3 && three.innerHTML === ''){
        //     three.innerHTML = 'O'
        // }else if(rand === 4 && four.innerHTML === ''){
        //     four.innerHTML = 'O'
        // }else if(rand === 5 && five.innerHTML === ''){
        //     five.innerHTML = 'O'
        // }else if(rand === 6 && six.innerHTML === ''){
        //     six.innerHTML = 'O'
        // }else if(rand === 7 && seven.innerHTML === ''){
        //     seven.innerHTML = 'O'
        // }else if(rand === 8 && eight.innerHTML === ''){
        //     eight.innerHTML = 'O'
        // }else if(rand === 9 && nine.innerHTML === ''){
        //     nine.innerHTML = 'O'
        // }
}

function stopTictactoe(){
    div.classList.remove('parentGrid')
    div.classList.add('#interface')
}

function startTictactoe(){
    div.classList.remove('#interface')
    div.classList.add('parentGrid')
}