const COORDS = 'coords'
const API_KEY = '65c59d14d5930bb8bc352677a494953d'
const weatherButton = document.querySelector('#weather')

function saveCoord(coordsObj) {
  localStorage.setItem(COORDS, coordsObj)
}

function getWeather() {
  const Http = new XMLHttpRequest()
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  Http.open('GET', url)
  Http.send()

  Http.onreadystatechange = e => {
    console.log(Http.responseText)
  }
}

function success(pos) {
  var crd = pos.coords

  console.log('Your current position is:')
  console.log('Latitude : ' + crd.latitude)
  console.log('Longitude: ' + crd.longitude)
  console.log('More or less ' + crd.accuracy + ' meters.')
}

function handleGeoSuccess(position) {
  console.log('position capturing succeed')
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  console.log('position', position)
  console.log('latitude', latitude)
  console.log('longitude', longitude)

  const weather = getWeather(position)
  paintWeather(weather)

  const coordsObj = {
    latitude, // same as "latitude: latitude"
    longitude, // same as "longitude: longitude"
  }
  saveCoord(coordsObj)
}

function handleGeoError() {
  console.log('error')
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError, {
    timeout: 1000,
  })
}

function loadCoords() {
  console.log('loading')
  const loadedCords = localStorage.getItem(COORDS)
  if (loadedCords === null) {
    console.log('no coord info')
    askForCoords()
  } else {
    console.log('already have coord info')
    handleGeoSuccess()
    // get Wheather
  }
}

function handleWeather(event) {
  console.log('clicked')
  event.preventDefault()
  loadCoords()
}

function init() {
  weatherButton.addEventListener('click', handleWeather)
  // loadCoords()
}

init()
