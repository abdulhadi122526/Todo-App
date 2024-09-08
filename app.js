

var inPut = document.querySelector('input');
var table = document.querySelector('table');
var arr = [];


function addTodo(){
    table.innerHTML = "";
    if (inPut.value){
        
        arr.push(inPut.value)
        
        for (var i=0; i<arr.length; i++){
            
            table.innerHTML += `<tr> 
            <td style="width:5%">${i+1}.</td> 
            <td >${arr[i]}</td> 
            <td style="width:5%">
            <button class="btn btn-sm btn-outline-danger bg-danger text-white" onclick=" deleteTodo(${i})">Delete</button>
            </td>
            <td style="width:5%">
            <button class="btn btn-sm btn-outline-primary bg-primary text-white" onclick=" editTodo(${i}) ">Edit</button>
            </td>
            </tr>`
            
            
        }
    }else{
        alert("please type something")
    }
    inPut.value = "" 
}


function deleteTodo(index){
    table.innerHTML = "";
    arr.splice(index,1)
    
    


    for (var i=0; i<arr.length; i++){
        
        table.innerHTML += `<tr> 
        <td style="width:5%">${i+1}.</td> 
        <td >${arr[i]}</td> 
        <td style="width:5%">
        <button class="btn btn-sm btn-outline-danger bg-danger text-white" onclick=" deleteTodo(${i})">Delete</button>
        </td>
        <td style="width:5%">
        <button class="btn btn-sm btn-outline-primary bg-primary text-white" onclick=" editTodo(${i}) ">Edit</button>
        </td>
        </tr>`
    
    }
    
    
}

function editTodo(index){
    var edit = prompt('Add your new')
    table.innerHTML = "";
    if(edit){
        arr.splice(index,1,edit);

        
        for (var i=0; i<arr.length; i++){
            
            table.innerHTML += `<tr> 
            <td  style="width:5%">${i+1}.</td> 
            <td >${arr[i]}</td> 
            <td style="width:5%">
            <button class="btn btn-sm btn-outline-danger bg-danger text-white" onclick=" deleteTodo(${i})">Delete</button>
            </td>
            <td style="width:5%">
            <button class="btn btn-sm btn-outline-primary bg-primary text-white" onclick=" editTodo(${i}) ">Edit</button>
            </td>
            </tr>`
        }
    }else{
        alert("please type something")
    }
}









