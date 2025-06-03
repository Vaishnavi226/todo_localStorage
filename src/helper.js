// function to save a todo
const saveTodo = (todo) => {
  localStorage.setItem("todo", JSON.stringify(todo)); // convert and store as json string
};

// function to load all todo
const loadTodo = () => {
  const data = localStorage.getItem("todo");
  return data ? JSON.parse(data) : [];
};

// function to add a todo
const addTodo = (todo) => {
  const todos = loadTodo();
  todos.push(todo);
  saveTodo(todos);
};
