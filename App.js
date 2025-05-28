
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



    function AddTodo() {
      var input = document.getElementById("todolist");
      var list = document.getElementById("list");
      
      if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
      }

      list.innerHTML += `
        <li>
          <input type='text' value='${input.value}' disabled />
          <button onclick="Delete(event)">Delete</button> 
          <button onclick="Edit(event)">Edit</button>
        </li>`;
      
      input.value = "";
    }

    function Enter(event) {
      if (event.keyCode === 13) {
        AddTodo();
      }
    }

    function Delete(event) {
      event.target.parentNode.remove();
      checkEmptyState();
    }

    function Edit(event) {
      var input = event.target.parentNode.querySelector("input");
      input.setAttribute("class", "fous-input");
      input.disabled = false;
      input.focus();
      event.target.innerHTML = "Update";
      event.target.setAttribute("onclick", "updatetodo(event)");
    }

    function updatetodo(event) {
      var input = event.target.parentNode.querySelector("input");
      input.setAttribute("class", "");
      input.disabled = true;
      event.target.innerHTML = "Edit";
    }

    function DeleteAll() {
      var list = document.getElementById("list");
      if (list.children.length > 0 && confirm("Are you sure you want to delete all tasks?")) {
        list.innerHTML = "";
      }
    }

    function checkEmptyState() {
      var list = document.getElementById("list");
      if (list.children.length === 0) {
        list.innerHTML = '<div class="empty-state">No tasks yet. Add some!</div>';
      }
    }

    // Initialize empty state check
    checkEmptyState();
