import enableAddTodo from "./addTodoRender.js";

enableAddTodo(); // custom module that allows for adding todos whenever "+" is clicked

function addTodo(name, description, date) {
  listOfTodos.push(new Todo(name, description, date));
}

// style the card
//TODO: create card so that the todo details can be populated on the card and displayed to the screen
// There would need to be some sort of display function that iterates trough the todos and list them.
