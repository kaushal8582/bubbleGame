const bottom = document.querySelector("#bottom");
const score = document.querySelector(".score");
const hit = document.querySelector(".hit");
const timerBox = document.querySelector(".timer");

let randomNumber=""
let scoreValue=0;

let timer=10


function updateScore(){
    scoreValue+=10;
    score.innerHTML = scoreValue;
}

function setHitValue(){
     randomNumber = generateRandomNumber()
    hit.innerHTML = randomNumber;
}

function generateRandomNumber(){
    return Math.floor(Math.random()*10);
}

function createBubble() {
  let cluster = "";
  for (let i = 1; i <= 207; i++) {
    let randomValue = generateRandomNumber()
    cluster += ` <div class="circle">${randomValue}</div>`;
  }

  bottom.innerHTML = cluster;
}

let interval;

function timerStart(){
    timerBox.innerHTML = timer
    interval= setInterval(() => {
        timer--;
        timerBox.innerHTML = timer
        
        
        if(timer<=0){
            clearInterval(interval);
            hit.innerHTML = "0"
            bottom.innerHTML =""
            bottom.classList.add("center")
            bottom.innerHTML = `<div class="card">
                <h1>Game over</h1>
                <h2>Score : <span>${scoreValue}</span> </h2>
                <div class="playBtn">
                    <i class="fa-solid fa-play" style="color: #ff1467;"></i>
                </div>
           </div>`

           document.querySelector(".playBtn").addEventListener("click",()=>{
            createBubble()
            bottom.classList.remove("center")
            setHitValue()
            timer =30;
            timerBox.innerHTML = timer
            timerStart()
            scoreValue=0;
            score.innerHTML = scoreValue;
            
        })        

        }
    }, 1000);
}
timerStart()





bottom.addEventListener("click",(e)=>{
    let clickedValue = e.target.innerText;
    if(clickedValue==randomNumber){
        updateScore();
        createBubble();
        setHitValue()
    }
    


})

createBubble();
setHitValue()


// localStorage