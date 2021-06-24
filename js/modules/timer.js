function timer (){
   // ТАЙМЕР


  const deadLine = "2021-09-30"
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date())
    let days = Math.floor(t / (1000 * 60 * 60 * 24))
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    let minutes = Math.floor((t / 1000 / 60) % 60)
    let seconds = Math.floor((t / 1000) % 60)

    return {
      "total": t,
      "days": days,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    }

  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    }
    else {
      return num
    }
  }
  function setClock(element, endtime) {
    let time = document.querySelector(element)
    let days = time.querySelector('#days')
    let hours = time.querySelector('#hours')
    let minutes = time.querySelector('#minutes')
    let seconds = time.querySelector('#seconds')
    let timeInterval = setInterval(uptadeClock, 1000)
    uptadeClock()

    function uptadeClock() {
      let time = getTimeRemaining(endtime)

      days.innerHTML = getZero(time.days)
      hours.innerHTML = getZero(time.hours)
      minutes.innerHTML = getZero(time.minutes)
      seconds.innerHTML = getZero(time.seconds)

      if (time.total <= 0) {
        clearInteval(timeInterval)
      }
    }

  }
  setClock('.timer', deadLine)

}

module.exports = timer