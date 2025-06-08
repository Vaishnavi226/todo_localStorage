import { v4 as uuidV } from "uuid";

// create task object
export const createTaskObj = (taskTitle, taskType) => {
  const obj = {
    id: uuidV(),
    title: taskTitle,
    category: taskType,
    isCompleted: false,
    createdAt: new Date().toISOString(),
  };
  return obj;
};

// get array from local DB
export const fetchArr = (DBName) => {
  const db = localStorage.getItem(DBName); // fetch the item from local storage
  let tDB = JSON.parse(db); // conevrt to object from json string
  return tDB; // return final array
};

//add new Task to array
export const addTaskObj = (arr, obj) => {
  const updatedArr = [...arr, obj];
  return updatedArr;
};

// create/update db with new array
export const updateTaskDB = (DBName, arr) => {
  localStorage.setItem(DBName, JSON.stringify(arr));
};
