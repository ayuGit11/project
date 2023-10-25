let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","blue","green"];

let started=false;
let level=0;
let maxlevel=level;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
     console.log("game started");
     started=true;
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
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level:${level}`;
    //koi bhi random button ko choose krke flash on
    let randomIdx=Math.floor(Math.random()*3);
    let randomCol=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomCol}`);
    // console.log(randomCol);
    // console.log(randomIdx);
    gameSeq.push(randomCol);
    console.log(gameSeq);
    gameFlash(randomBtn);
}
function heighest(){
    if(maxlevel<level){
        maxlevel=level;
    }
    return maxlevel;
};
function checkAns(idx){
   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
          setTimeout(levelUp,1000);
      }
   }
   else{
    h2.innerHTML=`Game Over! Your Score:<b>${level}</b>
    <br>Your Highest Score:<b>${heighest()}</b>
    <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white"; 
    },150);
    reset();
   }
}
function btnPress(){
   let btn=this;
   userFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn")
for(b of allBtns){
  b.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    maxlevel=level;
    level=0;
}
