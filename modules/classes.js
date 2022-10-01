export default class Todo {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }
}

export let listOfTodos = [];

// function addTodo(name) {
//   toDos.push(new Todo(name, description, date));
// }

// addProject("inbox");
// TODO create validation to prevent deleting inbox project
