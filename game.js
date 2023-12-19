// Iteration 1: Declare variables required for this game

let gameBody = document.getElementById("game-body")
let  timerBox = document.getElementById("timer")

let zombieId =0;
let zombieImages =[
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",

]
// Iteration 1.2: Add shotgun sound

let shotgun = new Audio("assets/shotgun.wav")

gameBody.onclick = () =>{
    shotgun.pause();
    shotgun.currentTime = 0 ;
    shotgun.play();
}

// Iteration 1.3: Add background sound

let bgm = new Audio("assets/bgm.mp3")
bgm.play();
bgm.loop = true;

// Iteration 1.4: Add lives

let lives = 4

// Iteration 2: Write a function to make a zombie

function makeZombie(){
let zombie = document.createElement("img");
let zomImg = zombieImages[getRandomInt(0,zombieImages.length)]
zombie.src = `./assets/${zomImg}`;
zombie.classList.add("zombie-image");
zombie.id = `zombie${zombieId}`
zombie.style.transform = `translateX(${getRandomInt(10,80)}vw)`
zombie.style.animationDuration=`${getRandomInt(2,6)}s`
gameBody.append(zombie)

zombie.onclick = () =>{
    zombiekill(zombie);
}


}
makeZombie();
// Iteration 3: Write a function to check if the player missed a zombie

function checkCollision(){
    let zombie = document.getElementById("zombie"+zombieId)
    if (zombie.getBoundingClientRect().top <= 0){

        lives--;
        zombiekill(zombie);
    }


}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function zombiekill(zombie){
    zombie.style.display = "none";
    zombieId++;
    makeZombie();``
}
// Iteration 5: Creating timer

function startTimer() {
    let time = 60; 
    timerBox.textContent = time; 

    const timerInterval = setInterval(() => {
        time--;

        
        timerBox.textContent = time;

        checkCollision();

        if (lives === 0) {
            clearInterval(timerInterval); 
            window.location.href = "./game-over.html";
        }

        if (time === 0) {
            clearInterval(timerInterval); 
            window.location.href = "./win.html";
        }
    }, 1000);
}

startTimer();

// Iteration 6: Write a code to start the game by calling the first zombie

makeZombie();
// Iteration 7: Write the helper function to get random integer

function getRandomInt(min,max){
    let randomInt = Math.floor(Math.random() * (max-min))+min
    return randomInt;
}