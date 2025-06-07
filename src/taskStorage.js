import { v4 as uuidV } from "uuid";

// localStorage task storing

// array to store tasks
const tasks = [task1];

const task1 = {
  id: uuidV(),
  title: "To Do HomeWork",
  category: "Study",
  isCompleted: false,
  createdAt: new Date().toISOString,
};

localStorage.setItem("taskDB", tasks);
