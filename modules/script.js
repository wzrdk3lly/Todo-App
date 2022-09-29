import Todo from "./classes.js";

let listOfTodos = [];

function addTodo(name, description, date) {
  listOfTodos.push(new Todo(name, description, date));
}

let addTodobtn = document.querySelector(".btn-add-todo");
let rendorSection = document.querySelector(".render");

// Render todo box when the add todo button is clicked
// TODO add the button back upon submission
addTodobtn.addEventListener("click", () => {
  rendorSection.innerHTML = `
  <!-- Render add todo text box -->
  <div class="ml-96">
      <div class=" block p-6 rounded-lg shadow-lg ml-24 mt-2 bg-white max-w-md">
          <form>
            <div class="form-group mb-6">
              <input type="text" class="form-control block
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
              <input type="date" class="form-control block
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
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out">Add Todo</button>
          </form>
        </div>
      </div>`;
});
