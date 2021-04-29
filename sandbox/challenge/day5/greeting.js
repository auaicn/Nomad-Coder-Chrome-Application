const form = document.querySelector(`.js-form`),
  input = form.querySelector(`input`),
  greeting = document.querySelector(`.js-greetings`)

console.log(greeting)
const USER_LS = 'currentUser',
  SHOWING_ON = 'showing'

function paintGreeting(text) {
  greeting.innerText = `Hello ${text}`
  form.classList.remove(SHOWING_ON)
  greeting.classList.add(SHOWING_ON)
}

function saveName(text) {
  localStorage.setItem(USER_LS, input.value)
}

function handleSubmit() {
  preventDefault()
  const currentValue = input.value
  paintGreeting(currentValue)
  saveName(currentValue)
}

function askForName() {
  form.classList.add(SHOWING_ON)
  form.addEventListener('submit', handleSubmit)
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS)
  if (currentUser === null) {
    console.log('current User nil')
    askForName()
  } else {
    console.log('current User exists')
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}

init()
