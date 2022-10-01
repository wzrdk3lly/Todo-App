import Todo from "./classes.js";
import { listOfTodos } from "./classes.js";

export default function enableAddTodo() {
  let addTodobtn = document.querySelector(".btn-add-todo");
  let rendorSection = document.querySelector(".render");
  let listTodoCards = document.querySelector(".list-todos");

  // Render todo box when the add todo button is clicked
  addTodobtn.addEventListener("click", () => {
    rendorSection.innerHTML = `
        <!-- Render add todo text box -->
        <div class="ml-96">
            <div class=" block p-6 rounded-lg shadow-lg ml-24 mt-2 bg-emerald-300 max-w-md">
                <form id="todo">
                  <div class="form-group mb-6">
                    <input id="todo-title" type="text" class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                      placeholder="Title">
                  </div>
                  <div class="form-group mb-6">
                    <input id="todo-date" type="date" class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                      placeholder="Date">
                  </div>
                  <div class="form-group mb-6">
                    <textarea
                    id="todo-description"
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Description"
                  ></textarea>
                  </div>
                  <div class="form-group form-check text-center mb-6">
                    
                  </div>
                  <button type="submit" class="
                    w-full
                    px-6
                    py-2.5
                    bg-cyan-500
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-cyan-600 hover:shadow-lg
                    focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-cyan-600 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Add Todo</button>
                </form>
              </div>
            </div>`;
    addTodobtn.classList.add("invisible");
    let form = document.getElementById("todo");

    // modify the dom once form has been submitted
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let title = document.getElementById("todo-title").value;
      let date = document.getElementById("todo-date").value;
      let description = document.getElementById("todo-description").value;
      console.log("Adding the todo list details -- ", title, date, description);
      listOfTodos.push(new Todo(title, description, date));
      console.log("the current list of todos is", listOfTodos);

      //Display todos -- refactor later
      listTodoCards.innerHTML = ``;
      listOfTodos.forEach((todo) => {
        // console.log(todo.title);
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="flex space-x-2 justify-center mt-2">
        <div
            class="justify-between h-14 w-full  px-4 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <div class="flex justify-between">
                <div class="flex space-x-1">
                    <div class=" hover:bg-black w-5 h-5 border-2 border-black rounded-full"></div>
                    <div class="uppercase">${todo.title}</div>
                </div>
                <div>${todo.date}</div>
            </div>
            <div class="text-gray-400 ml-6">${todo.description}</div>
        </div>
    </div>`;
        listTodoCards.appendChild(newCard);
      });

      // clear form contents
      form.reset();

      //Clear form pop up html after submission
      rendorSection.innerHTML = ``;

      //make todo button re-appear after form submission
      addTodobtn.classList.remove("invisible");
    });
  });
}
