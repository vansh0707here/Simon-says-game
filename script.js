let gameSeq=[];
let userSeq=[];

let btns=["red", "yellow", "green", "blue"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keydown", function() {
    if(started==false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){ 
        btn.classList.remove('userflash'); 
    },250);

}
function  levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log("Game Sequence:",gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText="Game Over! Press any key to restart.";
        document.body.classList.add("game-over");

        setTimeout(function(){
            document.body.classList.remove("game-over");
        },200);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}
    let allBtns=document.querySelectorAll('.btn');
    for(let btn of allBtns){
    btn.addEventListener('click', btnPress);
}
