// import axios from "axios";
select.addEventListener('click', unHideMenu, {once:true})
rockps.addEventListener('click', addRockpsToPage, {once:true})


// const rockpsContainer = document.getElementById('interface')
let player1Disp, player1Score, player2Disp, player2Score, player1Img, player2Img,
player1Rock, player1Paper, player1Sciss, player2Rock, player2Paper, player2Sciss,
player1ImgDisp, player2ImgDisp, checkWinDisp

const rock = document.createElement('img')
rock.setAttribute('src', './assets/rock.jpeg')

const scissors = document.createElement('img')
scissors.setAttribute('src', './assets/scissors.jpg')

const paper = document.createElement('img')
paper.setAttribute('src', './assets/paper.jpg')

const desc = document.getElementById('desc')

const apiURL = 'https://rock-paper-scissors13.p.rapidapi.com/'
const requestHeaders = {
    'X-RapidAPI-Key': '0152370c25mshbc3124e759061cap165d31jsn71e77ed9a1a4',
    'X-RapidAPI-Host': 'rock-paper-scissors13.p.rapidapi.com'
  }

function addRockpsToPage(){
    startRockps()
    hideMenu()
    player1Disp = document.createElement('p')
    player1Disp.id = 'rockps-player1'
    player1Disp.textContent = 'Computer: '
    div.appendChild(player1Disp)

    player2Disp = document.createElement('p')
    player2Disp.id = 'rockps-player2'
    player2Disp.textContent = 'Player :'
    div.appendChild(player2Disp)

    player1Score = document.createElement('p')
    player1Score.id = 'rockps-player1-score'
    player1Score.textContent = '0'
    div.appendChild(player1Score)

    player2Score = document.createElement('p')
    player2Score.id = 'rockps-player2-score'
    player2Score.textContent = '0'
    div.appendChild(player2Score)

    player1ImgDisp = document.createElement('img')
    player1ImgDisp.id = 'player1-img'
    // player1ImgDisp.style.width = `200` + `px`
    // player1ImgDisp.style.height = `200` + `px`
    div.appendChild(player1ImgDisp)

    player2ImgDisp = document.createElement('img')
    player2ImgDisp.id = 'player2-img'
    // player2ImgDisp.style.width = `200` + `px`
    // player2ImgDisp.style.height = `200` + `px`
    div.appendChild(player2ImgDisp)

    player1Rock = document.createElement('button')
    player1Rock.id = 'rock-button1'
    player1Rock.classList.add('rps-buttons')
    player1Rock.textContent = 'Rock'
    div.appendChild(player1Rock)

    player2Rock = document.createElement('button')
    player2Rock.id = 'rock-button2'
    player2Rock.classList.add('rps-buttons')
    player2Rock.textContent = 'Rock'
    div.appendChild(player2Rock)

    player1Paper = document.createElement('button')
    player1Paper.id = 'paper-button1'
    player1Paper.classList.add('rps-buttons')
    player1Paper.textContent = 'Paper'
    div.appendChild(player1Paper)

    player2Paper = document.createElement('button')
    player2Paper.id = 'paper-button2'
    player2Paper.classList.add('rps-buttons')
    player2Paper.textContent = 'Paper'
    div.appendChild(player2Paper)

    player1Sciss = document.createElement('button')
    player1Sciss.id = 'sciss-button1'
    player1Sciss.classList.add('rps-buttons')
    player1Sciss.textContent = 'Sciss'
    div.appendChild(player1Sciss)

    player2Sciss = document.createElement('button')
    player2Sciss.id = 'sciss-button2'
    player2Sciss.classList.add('rps-buttons')
    player2Sciss.textContent = 'Sciss'
    div.appendChild(player2Sciss)

    checkWinDisp = document.createElement('p')
    checkWinDisp.id = 'checkWinDisp'
    checkWinDisp.textContent = 'Whenever you\'re ready...'
    div.appendChild(checkWinDisp)

    fetch("http://localhost:3000/Rockps-description", {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    .then(resp => resp.json())
    .then(json =>{
        desc.innerText = `${desc.innerText} ${json.desc}`
    })

    player1Img = document.getElementById('player1-img')
    player2Img = document.getElementById('player2-img')

    const possibleClicks = document.querySelectorAll('.rps-buttons')

    
    let userPlay, data, formattedData

    possibleClicks.forEach(possibleClick => possibleClick.addEventListener('click', (e) => {
        //e.preventDefault()
        if(e.target.matches('#rock-button2')){
           player2Img.src = './assets/rock.jpeg'
           checkWinDisp.innerText = 'Loading AI choice...'
           userPlay = "rock"
        }
        else if(e.target.matches('#paper-button2')){
            player2Img.src = './assets/paper.jpg'
            checkWinDisp.innerText = 'Loading AI choice...'
            userPlay = "paper"
        }
        else if(e.target.matches('#sciss-button2')){
            player2Img.src = './assets/scissors.jpg'
            checkWinDisp.innerText = 'Loading AI choice...'
            userPlay = "scissors"
        }

        data = {
            "choice": `${userPlay}`
        }

        formattedData = JSON.stringify(data)

        fetch(`https://rock-paper-scissors13.p.rapidapi.com/?choice=${userPlay}`, {
            method: "GET",
            headers: requestHeaders
        })
        .then(resp => resp.json())
        .then(json=>{
            console.log(json.ai.name)
            let predicament = json.result
            console.log(predicament)
            aiChoice(json.ai.name, json.result)
            feedScore(predicament)
        })
        .catch(err => console.error(err))
        //compChoice()
        //results()
     }))

     function aiChoice(play, pred){
        if(play === 'rock'){
            player1Img.src = './assets/rock.jpeg'
            checkWinDisp.innerText = pred
        }else if(play === 'paper'){
            player1Img.src = './assets/paper.jpg'
            checkWinDisp.innerText = pred
        }else if(play === 'scissors'){
            player1Img.src = './assets/scissors.jpg'
            checkWinDisp.innerText = pred
        }
     }


     function feedScore(pred){
        let feed
        if(pred === "You win"){
            feed = {
                "Player": `Won at ${Date()}`
            }
        }else if(pred === "You lose"){
            feed = {
                "Player": `Lost at ${Date()}` 
            }
        }else if(pred === "Draw"){
            feed = {
                "Player": `Is a draw at ${Date()}`
            }
        }
        fetch("http://localhost:3000/Rock-paper-scissors-scores", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(feed)
            })
            .then(resp => resp.json())
            .then(json =>{
                console.log(json)
            })
            .catch(err => {console.error(err)})

     }


    //  function compChoice(){
    //     const randomNum = Math.floor(Math.random() * possibleClicks.length) + 1;
    //     console.log(possibleClicks.length)
    //     if(randomNum === 1 || randomNum === 4){
    //         player1Img.src = './assets/rock.jpeg'
    //     }
    //     else if(randomNum === 2 || randomNum === 5){
    //         player1Img.src = './assets/paper.jpg'
    //     }
    //     else if(randomNum === 3 || randomNum === 6){
    //         player1Img.src = './assets/scissors.jpg'
    //     }
    // }

}

function startRockps(){
    div.classList.remove('interface')
    div.classList.add('rockpsContainer')

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        fetch("http://localhost:3000/Rockps-reviews", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "user": `${review.value}`,
                "time": `${Date()}`
            })
            })
            .then(resp => resp.json())
            .then(json =>{
                alert('Thankyou, your review has been added successfully')
                console.log(json)
            })
            .catch(err => {console.error(err)})

        form.reset()
    })
}

//  function results(){
//      if(player1Img.src === player2Img.src){
//          checkWinDisp.innerText = 'It\'s a draw'
//       }else if(player1Img.src === rock.src && player2Img.src === scissors.src){
//         checkWinDisp.innerText = 'You lose'
//      }else if(player1Img.src === rock.src && player2Img.src === paper.src){
//         checkWinDisp.innerText = 'You win'
//     }else if(player1Img.src === paper.src && player2Img.src === scissors.src){
//         checkWinDisp.innerText = 'You win'
//     }else if(player1Img.src === paper.src && player2Img.src === rock.src){
//         checkWinDisp.innerText = 'You lose'
//     }else if(player1Img.src === scissors.src && player2Img.src === rock.src){
//         checkWinDisp.innerText = 'You win'
//     }else if(player1Img.src === scissors.src && player2Img.src === paper.src){
//         checkWinDisp.innerText = 'You lose'
//     }

//  }

