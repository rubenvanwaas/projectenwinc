// Btn Add New item
let addBtn = document.getElementById("addBtn");
// Check target
console.log(addBtn);

// Input Add New item
let addInput = document.getElementById("taskInput");
// Check target
console.log(addInput);



 
// Images Remove, Delete & Edit

let checkImg = `<i class="fas icon fa-check"></i>`;
let removeImg = `<i class="fas icon fa-trash-alt"></i>`;
let editImg = `<i class="fas icon fa-edit"></i>`;

// Onderstaande eventlisteners zijn eventueel te combineren door gebruik van een "submit" eventListener. Copyright Dilara Kayhan 

// Eventlistener for click button

addBtn.addEventListener("click", () => {
  let newItem = document.getElementById("taskInput").value;
  if (newItem) {
    addItemTodo(newItem);
    document.getElementById("taskInput").value = "";
  }
  postTasks(newItem, false);
});

//Eventlistener for enter key

addInput.addEventListener("keypress", (e) => {
  if (13 === e.keyCode) {
    let newItem = document.getElementById("taskInput").value;
    if (newItem) {
      addItemTodo(newItem);
      document.getElementById("taskInput").value = "";
    }
    postTasks(newItem, false);
  }
  
});



// Adding a new item to the list
 const addItemTodo = (text) => {
  let list = document.getElementById("toDo");
  let item = document.createElement("li");
  item.innerHTML = `<input class="inputEditTask" type="text"><label class="editMode">${text}</label></input>`;

  // Creating a div for the buttons
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  // Remove Button
  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeImg;
  remove.addEventListener("click", removeItem);

  // Edit Button
  let edit = document.createElement("button");
  edit.classList.add("editMode");
  edit.innerHTML = editImg;
  edit.addEventListener('click', editTask)

  // Complete Button
  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = checkImg;
  complete.addEventListener("click", completeItem);

  // Adding buttons
  buttons.appendChild(edit);
  buttons.appendChild(complete);
  buttons.appendChild(remove);
  item.appendChild(buttons);

  // Making latest to do item go to the top
  list.insertBefore(item, list.childNodes[0]);
}

// Function for edit item
const editTask = function(){
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");
  
  
  let listItem= this.parentNode.parentNode;
  console.log(listItem);
  
  let editInput = listItem.querySelector('input[type="text"]');
  let label = listItem.querySelector(".editMode");
  let containsClass = listItem.classList.contains("editMode");

      if(containsClass){
  
        label.innerHTML=editInput.value;
      }else{
        editInput.value=label.innerHTML;
      }
      listItem.classList.toggle("editMode");
  }


  // WHY DOES THIS NOT $^%^&$ WORK?
  //Eventlistener for enter key editTask
/*
let editInput = document.querySelectorAll("li .inputEditTask");
console.log(editInput);


editInput.addEventListener("", function(e) {
  if (13 === e.keyCode) {
    let editItem = document.querySelectorAll("li .inputEditTask").value;
    if (editItem) {
      addItemTodo(editItem);
    }
  }
});
*/

//function for completed item
function completeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;

  let target =
    id === "toDo"
      ? document.getElementById("completed")
      : document.getElementById("toDo");
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

//function for removing item

function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  parent.removeChild(item);
  deleteTasks();
  
}

