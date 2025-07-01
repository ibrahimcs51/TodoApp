
// function AddTodo() {
//   var input = document.getElementById("todolist");
//   var list =  document.getElementById("list") 
//   list.innerHTML +=`<li><input type='text ' value='${input.value}' disabled />
//    <button onclick="Delete(event)" > Delete  </button> 
//    <button onclick='Edit(event) '  > Edit    </button> </li>`
//   input.value="";
//   // console.log(input.value);
// }

// function Enter(event){
//   if(event.keyCode===13){
//     AddTodo() 
//   }
// }
// function Delete(event){
//   event.target.parentNode.remove()
// }
// function Edit(event){

//   var input=event.target.parentNode.childNodes[1];
//   input.disabled=false;
//   input.focus();
// }
////////   same same

// function AddTodo() {
//   var input = document.getElementById("todolist");
//   var list = document.getElementById("list");

//   list.innerHTML += `
//     <li>
//       <input type='text' value='${input.value}' disabled />
//       <button onclick="Delete(event)">Delete</button> 
//       <button onclick="Edit(event)">Edit</button>
//     </li>`;
  
//   input.value = "";
// }

// function Enter(event) {
//   if (event.keyCode === 13) {
//     AddTodo();
//   }
// }

// function Delete(event) {
//   event.target.parentNode.remove();
// }

// function Edit(event) {
//   var input = event.target.parentNode.querySelector("input");
//   input.setAttribute("class" ,"fous-input")
//   input.disabled = false;
//   input.focus();
//    event.target.innerHTML="Update"
//     event.target.setAttribute("onclick","updatetodo(event)")

// }
//  function updatetodo(event){
//   var input = event.target.parentNode.querySelector("input");
//    input.setAttribute("class" ,"")
//   input.disabled = true;
//   event.target.innerHTML="Edit";

//  }


//  function DeleteAll(){
//   list.innerHTML=""
//  }


//// same



    // function AddTodo() {
    //   var input = document.getElementById("todolist");
    //   var list = document.getElementById("list");
      
    //   if (input.value.trim() === "") {
    //     alert("Please enter a task!");
    //     return;
    //   }

    //   list.innerHTML += `
    //     <li>
    //       <input type='text' value='${input.value}' disabled />
    //       <button onclick="Delete(event)">Delete</button> 
    //       <button onclick="Edit(event)">Edit</button>
    //     </li>`;
      
    //   input.value = "";
    // }

    // function Enter(event) {
    //   if (event.keyCode === 13) {
    //     AddTodo();
    //   }
    // }

    // function Delete(event) {
    //   event.target.parentNode.remove();
    //   checkEmptyState();
    // }

    // function Edit(event) {
    //   var input = event.target.parentNode.querySelector("input");
    //   input.setAttribute("class", "fous-input");
    //   input.disabled = false;
    //   input.focus();
    //   event.target.innerHTML = "Update";
    //   event.target.setAttribute("onclick", "updatetodo(event)");
    // }

    // function updatetodo(event) {
    //   var input = event.target.parentNode.querySelector("input");
    //   input.setAttribute("class", "");
    //   input.disabled = true;
    //   event.target.innerHTML = "Edit";
    // }

    // function DeleteAll() {
    //   var list = document.getElementById("list");
    //   if (list.children.length > 0 && confirm("Are you sure you want to delete all tasks?")) {
    //     list.innerHTML = "";
    //   }
    // }

    // function checkEmptyState() {
    //   var list = document.getElementById("list");
    //   if (list.children.length === 0) {
    //     list.innerHTML = '<div class="empty-state">No tasks yet. Add some!</div>';
    //   }
    // }

    // // Initialize empty state check
    // checkEmptyState();

    // document.addEventListener
    ////////////////////////////
    // console.log("app.j")
    console.log("App.js loaded successfully");
// App.js - Todo List Application
// This script manages a simple Todo List application with functionalities to add, edit, delete, and complete tasks.
document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const todoInput = document.getElementById('todolist');
  const addBtn = document.getElementById('add-todo');
  const deleteAllBtn = document.getElementById('delete-all');
  const list = document.getElementById('list');
  
  // Task array
  let tasks = [];
  
  // Initialize app
  checkEmptyState();
  updateStats();
  
  // Event listeners
  addBtn.addEventListener('click', addTodo);
  deleteAllBtn.addEventListener('click', deleteAll);
  todoInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTodo();
  });
    
  // console.log("App.js loaded successfully");
  // console.log("App.js loaded successfully")
  
  // App.js - Todo List Application         
  // Functions
  function updateStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    document.getElementById('total-tasks').textContent = totalTasks;
    document.getElementById('completed-tasks').textContent = completedTasks;
    document.getElementById('pending-tasks').textContent = pendingTasks;
  }
  
  function addTodo() {
    if (todoInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: todoInput.value,
      completed: false
    };
    tasks.push(newTask);
    
    renderTask(newTask);
    todoInput.value = "";
    updateStats();
    checkEmptyState();
  }
  
  function renderTask(task) {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed-task');
    li.dataset.id = task.id;
    
    li.innerHTML = `
      <input type="text" value="${task.text}" disabled />
      <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    `;
    
    list.appendChild(li);
    
    // Add event listeners to the new buttons
    li.querySelector('.complete-btn').addEventListener('click', completeTask);
    li.querySelector('.delete-btn').addEventListener('click', deleteTask);
    li.querySelector('.edit-btn').addEventListener('click', editTask);
  }
  
  function completeTask(e) {
    const li = e.target.closest('li');
    const taskId = parseInt(li.dataset.id);
    const task = tasks.find(task => task.id === taskId);
    
    if (task) {
      task.completed = !task.completed;
      li.classList.toggle('completed-task');
      li.querySelector('input').style.textDecoration = task.completed ? 'line-through' : 'none';
      e.target.textContent = task.completed ? 'Undo' : 'Complete';
      updateStats();
    }
  }
  
  function deleteTask(e) {
    const li = e.target.closest('li');
    const taskId = parseInt(li.dataset.id);
    
    tasks = tasks.filter(task => task.id !== taskId);
    li.remove();
    updateStats();
    checkEmptyState();
  }
  
  function editTask(e) {
    const li = e.target.closest('li');
    const input = li.querySelector('input');
    const taskId = parseInt(li.dataset.id);
    const task = tasks.find(task => task.id === taskId);
    
    if (e.target.textContent === 'Edit') {
      input.classList.add('fous-input');
      input.disabled = false;
      input.focus();
      e.target.textContent = 'Update';
    } else {
      task.text = input.value;
      input.classList.remove('fous-input');
      input.disabled = true;
      e.target.textContent = 'Edit';
    }
  }
  
  function deleteAll() {
    if (tasks.length > 0 && confirm("Are you sure you want to delete all tasks?")) {
      tasks = [];
      list.innerHTML = '';
      updateStats();
      checkEmptyState();
    }
  }
  
  function checkEmptyState() {
    if (tasks.length === 0) {
      list.innerHTML = '<div class="empty-state">No tasks yet. Add some!</div>';
    }
  }
});
