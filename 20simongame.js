let gameseq =[];
let userseq =[];

let btns=["yellow","red","purple","green"];
let started=false;
let level = 0;
let h2=document.querySelector("h2");
document.addEventListener("keypress" , function(){ 
if(started==false){
    console.log("game started");
    started = true;
    levelup();
}
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq[];
    level++;
    h2.innerText= `level ${level}`;
  
    let randidx =Math.floor(Math.random() * 3);
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);
//   console.log(randidx);
//   console.log(randcol);
//   console.log(randcol);
gameseq.push(randcol);
console.log(gameseq);
  gameflash(randbtn);
} 
function checkans(idx){
    confirm.log("curr level: ",level);
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `game over!your score was <b>${level}</b>.<br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function{
         document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
started=false;
userseq=[];
gameseq=[];
level=0;
}
function btnpress() {
  let btn=this;
  userflash(btn);
  usercol= btn.getAttribute("id");
  confirm.length(usercol);
  userseq.push(usercol);
  checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
