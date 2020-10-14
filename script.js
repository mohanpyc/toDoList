let btn = document.getElementById("btn");
let inp = document.getElementById("input");
let displayDiv = document.getElementById("displayToDo");
let checkedList = [];
let toDoList = [];


displayDiv.addEventListener("click",(e)=>{

    if(e.path[0].id.charAt(0)!="c"){

    }

    if(e.path[0].id.charAt(0)==="c"){

        let id=e.path[0].id;
        
        if(checkedList.indexOf(id)===-1){
        
            console.log(e.path[0].id);
            checkedList.push(e.path[0].id);
            let indexNum=e.path[0].id.substr(8,)
            let strike=document.getElementById(`para${indexNum}`);
            let strikeTxt=strike.textContent;
            strike.innerHTML=`<s>${strikeTxt}</s>`
        
        }else if(checkedList.indexOf(id)!=-1){
        
            console.log(e.path[0].id);
            let indexNum=e.path[0].id.substr(8,);
            let deleteIndex=checkedList.indexOf(id);
            checkedList.splice(deleteIndex,1);
            console.log(checkedList,indexNum);          
            let strike=document.getElementById(`para${indexNum}`);
            let strikeTxt=strike.textContent;
            strike.innerHTML=`${strikeTxt}`
        
        }
    }
})


btn.addEventListener("click",()=>{
    
    if(inp.value!=""){
        
        if(toDoList.indexOf(inp.value)===-1){
        
            toDoList.push(inp.value);
            inp.value="";
            displayDiv.innerHTML="";
            showToDo()
        } 
    }
   
})

inp.addEventListener("keyup",(event)=>{
    
    if(inp.value!=""){
    
        if(event.key==="Enter"){
    
            if((toDoList.indexOf(inp.value)===-1)){
    
                toDoList.push(inp.value);
                inp.value="";
                displayDiv.innerHTML="";
                showToDo()
            }
        }
    }
        
})

function showToDo(){
    
    toDoList.forEach((i,index)=>{
    
        let toDoDiv=document.createElement("div");
        toDoDiv.id="div"+index;
        let checkBox=document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.id="checkbox"+index;
        checkBox.style.display="inline";
        checkBox.style.margin="7px";
        checkBox.style.padding="5px";
        let p=document.createElement("span");
        console.log(checkedList);
        if(checkedList.indexOf(checkBox.id)!=-1){
            p.innerHTML=`<s>${i}</s>`
            checkBox.checked=true;
        }else{
            p.textContent=i;
        }       
        p.style.fontSize="20px"
        p.style.color="white";
        p.style.padding="2px";
        p.id="para"+index;
        toDoDiv.appendChild(checkBox);
        toDoDiv.appendChild(p);
        displayDiv.appendChild(toDoDiv);
    })
   
}

