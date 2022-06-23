select.addEventListener('click', unHideMenu)
let timer
let xDir = 2
let yDir = 2
hockey.addEventListener('click', ()=>{
    startAirHockey()
    hideMenu()
    const blockPlate1 = document.createElement('div')
    blockPlate1.id = 'plate1'
    blockPlate1.style.left = '46%'
    div.appendChild(blockPlate1)

    const blockPlate2 = document.createElement('div')
    blockPlate2.id = 'plate2'
    blockPlate2.style.left = '46%'
    blockPlate1.style.bottom = '0%'
    div.appendChild(blockPlate2)

    const ballPos = [49, 4]
    let currentPos = [...ballPos]
    const ball = document.createElement('div')
    ball.classList.add('ball')
    placeball(ball, currentPos)
    div.appendChild(ball);
    
    timer = setInterval( (function(){
        currentPos[0] += xDir
        currentPos[1] += yDir
        placeball(ball, currentPos)
        checkWall()
    }) , 50)
    

    document.addEventListener('keydown', movePlayer)
    
    function checkWall(){
        if(currentPos[0] >= (100 - 5) ||
        
        currentPos[0] <= 0){
           changeDir()
        }
   
        //Game end
       //  if(x){}
   }
   
   function changeDir(){
       if(xDir === 2 && yDir === 2){
           yDir = -2
           return
       }
       if(xDir === 2 && yDir === -2){
           xDir = -2
           return
       }
       if(xDir === -2 && yDir === -2){
           yDir = 2
           return
       }
       if(xDir === -2 && yDir === 2){
           xDir = 2
           return
       }
   }
   
    
})

function movePlayer(e){
    if(e.key === 'ArrowLeft'){
        movePlayer1Left()
    }
    if(e.key === 'ArrowRight'){
        movePlayer1Right()
    }
    if(e.key === 'a'){
        movePlayer2Left()
    }
    if(e.key === 'd'){
        movePlayer2Right()
    }
}

function startAirHockey(){
    div.id = 'hockey-grid'
}



function placeball(elem, arr){
    elem.style.left = arr[0] + '%'
    elem.style.bottom = arr[1] + '%'
}

function movePlayer1Left(){
    const plate = document.getElementById('plate1')
    const leftPos = plate.style.left.replace('%', '')
    const left = parseInt(leftPos, 10)

    if(left>0){
        plate.style.left = `${left - 1}%`
    }
}
function movePlayer1Right(){
    const plate = document.getElementById('plate1')
    const leftPos = plate.style.left.replace('%', '')
    const left = parseInt(leftPos, 10)

    if(left<90){
        plate.style.left = `${left + 1}%`
    }
}
function movePlayer2Left(){
    const plate = document.getElementById('plate2')
    const leftPos = plate.style.left.replace('%', '')
    const left = parseInt(leftPos, 10)

    if(left>0){
        plate.style.left = `${left - 1}%`
    }
}
function movePlayer2Right(){
    const plate = document.getElementById('plate2')
    const leftPos = plate.style.left.replace('%', '')
    const left = parseInt(leftPos, 10)

    if(left<90){
        plate.style.left = `${left + 1}%`
    }
}



// setInterval(moveBall, 1000)

// function buttonAction(e){
//     if(e.target.id === 'buttonLeft2'){
//         blockPlate2.style.left -= '10px'
//     }
// }
