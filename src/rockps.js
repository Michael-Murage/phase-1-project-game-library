select.addEventListener('click', unHideMenu)
rockps.addEventListener('click', addRockpsToPage)

// const rockpsContainer = document.getElementById('interface')
let player1Disp, player1Score, player2Disp, player2Score, player1Img, player2Img




function addRockpsToPage(){
    startRockps()
    player1Disp = document.createElement('p')
    player1Disp.id = 'rockps-player1'
    player1Disp.textContent = 'Player 1: '
    div.appendChild(player1Disp)

    player2Disp = document.createElement('p')
    player2Disp.id = 'rockps-player2'
    player2Disp.textContent = 'Player 2:'
    div.appendChild(player2Disp)

    player1Score = document.createElement('p')
    player1Score.id = 'rockps-player1-score'
    player1Score.textContent = '0'
    div.appendChild(player1Score)

    player2Score = document.createElement('p')
    player2Score.id = 'rockps-player2-score'
    player2Score.textContent = '0'
    div.appendChild(player2Score)

    player1Img = document.createElement('img')
    player1Img.id = 'player1-img'
    player1Img.style.width = `200` + `px`
    player1Img.style.height = `200` + `px`
    div.appendChild(player1Img)

    player2Img = document.createElement('img')
    player2Img.id = 'player2-img'
    player2Img.style.width = `200` + `px`
    player2Img.style.height = `200` + `px`
    div.appendChild(player2Img)
}

function startRockps(){
    div.classList.remove('#interface')
    div.classList.add('rockpsContainer')
}