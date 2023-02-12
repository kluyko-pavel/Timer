const pauseBtn = document.querySelector('.timer-btn-pause')
const resetBtn = document.querySelector('.timer-btn-reset')
const startBtn = document.querySelector('.timer-btn-start')
const clockFace = document.querySelector('.timer-clock-face')

let time = 0
let interval = 0

function handlerStartTimer () {
  interval = setInterval(count, 1000)
  startBtn.setAttribute('disabled', '')
  pauseBtn.removeAttribute('disabled', '')
}
function count () {
  time += 1
  clockFace.innerText = `${time}`
}

function handlerStopTimer () {
  clearInterval(interval)
  startBtn.removeAttribute('disabled', '')
  pauseBtn.setAttribute('disabled', '')
}

function handlerResetTimer () {
  clearInterval(interval)
  time = 0
  clockFace.innerText = `${time}`
  startBtn.removeAttribute('disabled', '')
  pauseBtn.removeAttribute('disabled', '')
}

startBtn.addEventListener('click', handlerStartTimer)
pauseBtn.addEventListener('click', handlerStopTimer)
resetBtn.addEventListener('click', handlerResetTimer)
