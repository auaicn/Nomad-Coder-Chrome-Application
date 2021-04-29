const toDoForm = document.querySelector('#js-toDoForm'),
  todoInput = toDoForm.querySelector('#js-toDoInput'),
  todoList = document.querySelector('#js-toDoList')

const TODOS_LS = 'toDos'
let toDos = []

function loadToDos() {
  const loadedTodos = localStorage.getItem(TODOS_LS)
  if (loadedTodos !== null) {
    const parsedToDos = JSON.parse(loadedTodos)
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text)
    })
  }
}

function deleteTodo(event) {
  // console.log(event.target)
  // console.dir(event.target.parentNode)
  const li = event.target.parentNode
  todoList.removeChild(event.target.parentNode)
  console.log(li.id)
  const cleanToDos = toDos.filter(function (toDo) {
    return String(toDo.id) !== li.id
  })
  toDos = cleanToDos
  saveToDos()
}

function paintToDo(text) {
  const li = document.createElement('li')
  const deleteButton = document.createElement('button')
  const span = document.createElement('span')
  const newId = toDos.length + 1
  deleteButton.innerText = '❌'
  span.innerText = text
  li.id = newId
  li.appendChild(span)
  li.appendChild(deleteButton)

  todoList.appendChild(li)

  const toDoObj = {
    id: toDos.length + 1,
    text: text,
  }
  toDos.push(toDoObj)
  saveToDos()
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = todoInput.value
  paintToDo(currentValue)
  todoInput.value = ''
}

function init() {
  loadToDos()
  toDoForm.addEventListener('submit', handleSubmit)
  todoList.addEventListener('click', deleteTodo)
}

init()
