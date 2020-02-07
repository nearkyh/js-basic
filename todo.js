const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function filerFn(toDo) {
  return toDo.id === 1;
}

function delToDo(e) {
  // console.dir(e.target.parentNode);
  // console.log(e.target.parentNode);
  // const t = e.target.parentNode;
  const btn = e.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  })
  toDos = cleanToDos
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const sapn = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", delToDo);
  sapn.innerText = text;

  li.appendChild(sapn);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  li.id = newId;

  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(toDo => {
      paintToDo(toDo.text);
    });
  }  
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();