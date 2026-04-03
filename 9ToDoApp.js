let todo = [];

let req = prompt("Enter Your Request");

while (true) {
    if(req=="quit"){
        console.log("You Are Quit");
        break;
    }

    if(req=="list"){
         console.log("---------------");
        for(let i=0;i < todo.length; i++){
            console.log(todo[i]);
        }
    console.log("---------");
}else if(req=="add"){
    let add =prompt("Please Enter Yor Element To Add");
    todo.push(add);
    console.log("Task Added");
}else if(req=="delete"){
    let idx=prompt("Enter Your Index To Delete Task");
    todo.splice(idx,1);
    console.log("Task Deleted");
}else{
    console.log("Wrong Task");
}
 req=prompt("Enter Your Request");

}