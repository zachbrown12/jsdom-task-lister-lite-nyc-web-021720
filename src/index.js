let ul1 = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", function(event) {
    event.preventDefault()
    let newTask = document.getElementById("new-task-description").value
    let liNew = document.createElement("li");
    ul1.appendChild(liNew).innerHTML = newTask;
    //delete button
    let deleteButton = document.createElement("button");
    liNew.append(deleteButton);
    deleteButton.innerHTML = "X"

  });

  ul1.addEventListener("click", function(event) {
    event.target
    let buttons = document.querySelectorAll("button");
    let taskInfo = (buttons[0].parentNode.innerHTML)



//test



    
  });

});






//find target (the button) 
//add event listener (click) to target (the button)
//create post request on click   
// add to tasks somehow