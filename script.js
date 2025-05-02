// const conatainer=document.querySelector(".container");
// const input_container=document.querySelector(".input_container");
const input=document.querySelector('#task_input');
const addbtn=document.querySelector("#add_btn");
const todolist=document.querySelector(".todo_list");

//function to add todo
const addtodo=()=>{
    //space operation
const inputtext=input.value.trim();
if(inputtext.length==0){
    alert("Please enter a task please must write something in you todo");
    return 0;
}
if(addbtn.value==="Edit"){
    edittodo.target.previousElementSibling.innerHTML=inputtext;
    addbtn.value="Add";
    input.value="";
}
else {
//create li element
const li=document.createElement('li');
const p=document.createElement('p');
p.innerHTML=inputtext;
li.appendChild(p);
//create edit btn
const edit=document.createElement('button');
edit.classList.add('btn','editbtn')
edit.textContent="Edit";
li.appendChild(edit)
//create delete btn
const deletebtn=document.createElement('button');
deletebtn.classList.add('btn','deletebtn');
deletebtn.innerText="Remove";
li.appendChild(deletebtn);
todolist.appendChild(li);
input.value="";
savelocalstorage(inputtext);
}
}
let edittodo=null;
//update todo
const updatetodo=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todolist.removeChild(e.target.parentElement);
        deleteBtnlocalstorage(e.target.parentElement);
    }
    if(e.target.innerHTML==="Edit"){
        input.value=e.target.previousElementSibling.innerHTML
        editlocaltodos(todo);
        input.focus();
        addbtn.value="Edit"
        edittodo=e;
    }
}


const savelocalstorage=(todo)=>{
    let todos=[];
    if(localStorage.getItem("todos")==null){
        console.log("Your todolist is empty")
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}



// Function to get local todo
const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        console.log("Your todolist is empty")
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

            //Creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);


            // Creating Edit Btn
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            // Creating Delete Btn
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);

            todolist.appendChild(li);
        });
    }
}

//delete localstroage todo
const deleteBtnlocalstorage=(todo)=>{
    let todos;
    if (localStorage.getItem("todos") === null) {
        console.log("Your todolist is empty")
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todotext=todo.children[0].innerHTML;
    let todoindex=todos.indexOf((todotext))
    todos.splice(todoindex,1);
    localStorage.setItem('todos',JSON.stringify(todos));
    // console.log(todoindex)
    
}

const editlocaltodos=(todo)=>{
let todos=JSON.parse(localStorage.getItem("todos"));
let todoindex=todos.indexOf(todo);
todos[todoindex]=input.value;
localStorage.setItem('todos',JSON.stringify(todos))
}
document.addEventListener('DOMContentLoaded',getLocalTodos)
addbtn.addEventListener('click',addtodo);
todolist.addEventListener('click',updatetodo);