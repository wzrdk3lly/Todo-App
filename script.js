let projects = [];

let projectCounter = 0;
let todoCounter = 0;

class Project {
  constructor(name) {
    this.id = projectCounter++;
    this.name = name;
    this.listOfTodos = [];
  }

  addTodo(title, description, date) {
    this.listOfTodos.push(new Todo(title, description, date));
  }
}

class Todo {
  constructor(title, description, date) {
    this.id = todoCounter++;
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

function addProject(name) {
  projects.push(new Project(name));
}
