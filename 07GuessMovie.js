let fav="krish";
let guess=prompt("Guess Fav Movie");
while((fav != guess) && (guess != "quit")){
    console.log("Wrong");
    guess=prompt("Wrong,Please Guess Fav Movie");
    
}
if(guess==fav){
    console.log("Congrats");
}

