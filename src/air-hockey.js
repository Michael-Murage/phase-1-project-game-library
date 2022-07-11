select.addEventListener('click', unHideMenu)
let hockeyGrid = document.getElementById('hockey-grid')

let timer
let xDir = 2
let yDir = 2
hockey.addEventListener('click', ()=>{
    hideMenu()
    const blockPlate1 = document.createElement('div')
    blockPlate1.id = 'plate1'
    blockPlate1.style.left = '46%'
    blockPlate1.style.bottom = '100%'
    hockeyGrid.appendChild(blockPlate1)

    const blockPlate2 = document.createElement('div')
    blockPlate2.id = 'plate2'
    blockPlate2.style.left = '46%'
    blockPlate1.style.bottom = '0%'
    hockeyGrid.appendChild(blockPlate2)

    const ballPos = [49, 4]
    let currentPos = [...ballPos]
    const ball = document.createElement('div')
    ball.classList.add('ball')
    placeball(ball, currentPos)
    hockeyGrid.appendChild(ball);
    
    timer = setInterval( (function(){
        currentPos[0] += xDir
        currentPos[1] += yDir
        placeball(ball, currentPos)
        checkWall()
        
    }) , 50)
    

    document.addEventListener('keydown', movePlayer)
    

    function checkWall(){
        //check wall
        if(currentPos[0] >= 95||
            currentPos[1] >= 95 ||
        currentPos[0] <= 0){
           changeDir()
        }
        //check plates
        if((currentPos[0] > (parseFloat(blockPlate2.style.left.slice(0,2))) && 
        currentPos[0] < ((parseFloat(blockPlate2.style.left.slice(0,2))) + 10)) &&
        (currentPos[1] > (parseFloat(blockPlate2.style.left.slice(0,2))) && 
        currentPos[1] < ((parseFloat(blockPlate2.style.left.slice(0,2))) + 5))){
            changeDir()
        }
        if((currentPos[0] > (parseFloat(blockPlate1.style.left.slice(0,2))) && 
        currentPos[0] < (parseFloat(blockPlate1.style.left.slice(0,2))) + 10) &&
        (currentPos[1] > (parseFloat(blockPlate1.style.left.slice(0,2))) && 
        currentPos[1] < (parseFloat(blockPlate1.style.left.slice(0,2))) + 5)){
            changeDir()
        }
   
        //Game end
        if(currentPos[1] <= 0 || currentPos[1] >= 100){
            changeDir()
            
        }
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
