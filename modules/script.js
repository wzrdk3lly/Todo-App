import Todo from "./classes.js";

let listOfTodos = [];

function addTodo(name, description, date) {
  listOfTodos.push(new Todo(name, description, date));
}

let addTodobtn = document.querySelector(".btn-add-todo");
let rendorSection = document.querySelector(".render");

// Render todo box when the add todo button is clicked
addTodobtn.addEventListener("click", () => {
  addTodobtn.classList.add("invisible");
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

  let form = document.getElementById("todo");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("todo-title").value;
    let date = document.getElementById("todo-date").value;
    let description = document.getElementById("todo-description").value;
    console.log("The todo details are ", title, date, description);

    // addBookToLibrary(title, author, isRead);

    //clear form after submission
    form.reset();

    //remove form from html - create a reset function for refactoring  s
    rendorSection.innerHTML = ``;
    addTodobtn.classList.remove("invisible");
  });
});

// style the card
//TODO: create card so that the todo details can be populated on the card and displayed to the screen
// There would need to be some sort of display function that iterates trough the todos and list them.
