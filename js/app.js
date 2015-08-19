/*
Problem: user interaction doesn't provide desired result
Solution: Add interactivity to the page
*/

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0];//first button on the page
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a new task
var addTask = function(){
    console.log("add task...");
    //when the button is pressed
    //Create a new list item with the text from #new-task:
    //input(checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each of this elements need to be modified and appended
}


//Edit existing task
var editTask = function(){
    console.log("edit task...");
    //When the edit button is pressed
    //if the class of the parent is .edit
    //switch back from editMode
    //make the label text become the input's value
    //else
    //switch to edit mode
    //make the input value become the label text

    //Toggle .editMode on the parent
}



//Delete existing task
var deleteTask = function(){
    console.log("delete task...");
    //When the delete button is pressed
    //remove the parent list item from the ul

}

//Marks tasks as complete
var taskCompleted = function(){
    console.log("complete task...");
    //when the checkbox is pressed
        //append the task list item to the #completed-tasks
}


//Mark tasks as incomplete
var taskIncomplete = function(){
    console.log("incomplete task...");
    //when the checkbox is pressed
    //append the task list item to the #incomplete-tasks
}

addButton.onclick = addTask;