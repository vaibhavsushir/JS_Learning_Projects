let btn = document.querySelector("#btn"); 
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText = inp.value;

  let deltbtn=document.createElement("delete");
  deltbtn.innerText = "delete"; 
  deltbtn.classList.add("delete");
item.appendChild(deltbtn);
  ul.appendChild(item);
    inp.value ="";
});

ul.addEventListener("click",function(event){
  console.dir(event.target.nodeName);
  console.log("button clickwd");
});
