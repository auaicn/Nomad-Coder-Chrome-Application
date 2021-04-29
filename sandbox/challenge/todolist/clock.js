const clock = document.querySelector('.clock'),
  currentTime = clock.querySelector('#time')

const topBar = document.querySelector('.topBar'),
  calendar = topBar.querySelector('p')

const months = new Array()

months[0] = 'January'
months[1] = 'February'
months[2] = 'March'
months[3] = 'April'
months[4] = 'May'
months[5] = 'June'
months[6] = 'July'
months[7] = 'August'
months[8] = 'September'
months[9] = 'October'
months[10] = 'November'
months[11] = 'December'

const days = new Array()

days[0] = 'SunDay'
days[1] = 'MonDay'
days[2] = 'TuesDay'
days[3] = 'WednesDay'
days[4] = 'ThursDay'
days[5] = 'FriDay'
days[6] = 'SaturDay'

function getTime() {
  const time = new Date()
  const month = months[time.getMonth()]
  const date = time.getDate()
  const day = days[time.getDay()]
  //   console.log(time)
  //   console.log(month)
  //   console.log(day)

  calendar.innerHTML = `${month} ${date} it's ${day}`

  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()

  currentTime.innerHTML = `${hour < 10 ? '0' + hour : hour}:
    ${minute < 10 ? '0' + minute : minute}:
    ${second < 10 ? '0' + second : second}`
}

function init() {
  getTime()
  setInterval(getTime, 1000)
}

init()
