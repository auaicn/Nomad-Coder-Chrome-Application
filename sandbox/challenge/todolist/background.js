const body = document.querySelector('body')

const NUMBER_OF_IMAGES = 6

function generateRandomNumber(maxNumber) {
  const randNumber = Math.floor(Math.random() * maxNumber)
  if (randNumber === maxNumber) randNumber--
  return randNumber + 1
}

function paintImage(imgNumber) {
  const image = new Image(screen.width, screen.height)
  image.src = `js-basics/${imgNumber}.jpg` // <- relative
  image.classList.add('bgImage')
  body.prepend(image) // body.appendChild(image)
}

function init() {
  const randomNumber = generateRandomNumber(NUMBER_OF_IMAGES)
  paintImage(randomNumber)
}

init()
