// h1=document.querySelector("h1");
// h1.style.color="red";

// // setTimeout(() =>{
// //     h1.style.color="green";
// // },1000);

// // setTimeout(() =>{
// //     h1.style.color="yellow";
// // },2000);

// function changecolor(color,delay,nextchangecolor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextchangecolor) nextchangecolor();
//     },delay);
//     }

// changecolor("yellow",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("green",1000);
//     });
// });

function savetoDB(data){
    return new Promise((success, failure) => {
    let internetspeed = Math.floor(Math.random() *10)+1;
    if(internetspeed>4){
   success("success:data is save"); 
    }else{
     failure("failure:data is not saved");
    }
 });
}
// let request = savetoDB("apna college");
// request.then(()=>{
//     console.log("promise was resolve");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// });
// savetoDB("apna college")
// .then(()=>{
//     console.log("promise was resolve");
   
// })
// .catch(()=>{
//     console.log("promise was rejected");
    
// })

savetoDB("apna college")
.then(()=>{
    console.log("data1 saved.");
   return savetoDB("hellow");
})
.then(()=>{ 
    console.log("data2 saved.");
    return savetoDB("hellow");
})
.then(()=>{
    console.log("data3 saved.");
}) 
.catch(()=>{
    console.log("promise was rejected") ; 
});
