const user = document.querySelector('.user'),
  message = user.querySelector('label'),
  userNameForm = user.querySelector('form'),
  userNameInput = userNameForm.querySelector('input')

function toggleUserBox() {
  message.classList.toggle('hidden')
  userNameForm.classList.toggle('hidden')
}

function handleSubmit(event) {
  event.preventDefault()
  const enteredName = userNameInput.value
  localStorage.setItem('userName', enteredName)
  toggleUserBox()
  paintUserName(enteredName)
}

function paintUserName(text) {
  message.innerHTML = `Welcome Back! ${text}`
}

function init() {
  userNameForm.addEventListener('submit', handleSubmit)

  const userName = localStorage.getItem('userName')
  if (userName !== null) paintUserName(userName)
  else toggleUserBox()
}

init()
