/*
Problem: user interaction doesn't provide desired result
Solution: Add interactivity to the page
*/

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0];//first button on the page
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//new task list item
var createNewTaskElement = function(taskString){
    var listItem = document.createElement("li");

    //input (checkbox)
    var checkBox = document.createElement("input"); // checkbox
    //label
    var label = document.createElement("label");
    //input (text)
    var editInput = document.createElement("input"); // text
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");

    //Each element needs modifying

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

//Add a new task
var addTask = function() {
    console.log("Add task...");

    if (taskInput.value === ""){
        alert("Type something");
        return;
    }

    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}

//Edit existing task
var editTask = function() {
    console.log("edit task...");
    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]");

    var label = listItem.querySelector("label");


    var containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .edit
    if (containsClass) {
        //switch back from editMode
        //make the label text become the input's value
        this.innerText = "Edit";
        label.innerText = editInput.value;
    } else{
        //switch to edit mode
        //make the input value become the label text

        this.innerText = "Save";

        editInput.value = label.innerText;
    }
    //Toggle .editMode on the parent

    listItem.classList.toggle("editMode");
}



//Delete existing task
var deleteTask = function(){
    console.log("delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);


}

//Marks tasks as complete
var taskCompleted = function(){
    console.log("complete task...");
    //when the checkbox is pressed
    //this = checkbox clicado
    var listItem = this.parentNode;
    //append the task list item to the #completed-tasks
    completedTasksHolder.appendChild(listItem);

    bindTaskEvents(listItem, taskIncomplete);
}


//Mark tasks as incomplete
var taskIncomplete = function(){
    console.log("incomplete task...");
    //when the checkbox is pressed
    var listItem = this.parentNode;
    //append the task list item to the #incomplete-tasks
    incompleteTasksHolder.appendChild(listItem);

    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
    console.log("bind list item events");
    //select taskListItem's children
    var checkbox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    //bind editTask() to edit button
    editButton.onclick = editTask;

    //bind deleteTask() to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler() to checkbox
    checkbox.onchange = checkBoxEventHandler;

}

var ajaxRequest = function(){
    console.log("ajax request");
}

addButton.addEventListener("click", addTask);

addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder
for (var i = 0; i < incompleteTasksHolder.children.length; i++){
    //bind events to  each list item's children(task complete)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over incompleteTasksHolder
for (var i = 0; i < completedTasksHolder.children.length; i++){
    //bind events to each list item's children(task incomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

