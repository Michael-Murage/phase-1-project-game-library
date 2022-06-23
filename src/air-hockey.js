select.addEventListener('click', unHideMenu)
hockey.addEventListener('click', ()=>{
    startAirHockey()
    hideMenu()
    const blockPlate1 = document.createElement('div')
    blockPlate1.id = 'plate1'
 
    div.appendChild(blockPlate1)

    const blockPlate2 = document.createElement('div')
    blockPlate2.id = 'plate2'
    div.appendChild(blockPlate2)

    document.addEventListener('keydown', (e)=>{
        
    })

    // document.querySelectorAll('.button').forEach(button=>{
    //     button.addEventListener('click', buttonAction)
    // })
})

function startAirHockey(){
    div.id = 'hockey-grid'
}

function movePlayer1Left(){
    const plate = document.getElementById('plate1')
    const leftPos = plate.style.left.replace('px', '')
    const left = parseInt(leftPos, 10)

    if(left>0){
        plate.style.left = `${left - 5}px`
    }
}
function movePlayer1Right(){

}
function movePlayer2Left(){

}
function movePlayer2Right(){

}

// function buttonAction(e){
//     if(e.target.id === 'buttonLeft2'){
//         blockPlate2.style.left -= '10px'
//     }
// }
