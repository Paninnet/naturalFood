window.addEventListener("DOMContentLoaded",()=>{

  // ТАБЫ
  const tabcontent = document.querySelectorAll('.tabcontent')
  const tabheader__items = document.querySelector('.tabheader__items')
  const tabheader__item = document.querySelectorAll('.tabheader__item')

function hideAllTabs() {
  tabcontent.forEach((item) => {
    item.classList.add('hide')
    item.classList.remove('show')
  });
  tabheader__item.forEach((item) => {
    item.classList.remove('tabheader__item_active')
  });
}

function showTab(i=0) {
  tabcontent[i].classList.add('show')
  tabheader__item[i].classList.add('tabheader__item_active')
}
  tabheader__items.addEventListener('click',(e)=>{
    let target = e.target
    if (target && target.classList.contains('tabheader__item')) {
      tabheader__item.forEach((item, i) => {
        if (target == item) {
          hideAllTabs()
          showTab(i)
        }
      });

    }
  })

hideAllTabs()
showTab()

// ТАЙМЕР

const deadLine ="2021-09-30"
function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date())
  let days = Math.floor(t / (1000 * 60 * 60 * 24))
  let hours = Math.floor((t / (1000 * 60 * 60) ) % 24)
  let minutes = Math.floor((t / 1000 / 60) % 60)
  let seconds = Math.floor((t / 1000) % 60)

  return {
    "total": t,
    "days":days,
    "hours":hours,
    "minutes":minutes,
    "seconds":seconds
  }

}

function getZero(num) {
  if (num >=0 && num <10) {
    return `0${num}`
  }
  else{
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

    if (time.total <= 0){
      clearInteval(timeInterval)
    }
  }

}
  setClock('.timer', deadLine)

  // МОДАЛЬНОЕ

  const modal = document.querySelector('.modal')
  const openModal = document.querySelectorAll('[data-modal]').forEach((item) => {
    item.addEventListener("click",showModal)
  });
  const closeModal = document.querySelector('[data-close]')

  closeModal.addEventListener("click", hideModal)
  modal.addEventListener("click",(event)=>{
    if (event.target === modal) {
      hideModal()
    }
  })


document.addEventListener('keydown',(e)=>{
  if(e.code ==="Escape" &&  modal.style.display==="block"){
    hideModal()
  }
})


function showModal() {
  modal.style.display="block"
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimeout)
}
function hideModal() {
  modal.style.display = "none"
  document.body.style.overflow = '';
}

function scrollModal() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
              showModal();
              window.removeEventListener('scroll', scrollModal);
          }
}

const modalTimeout = setTimeout(showModal,5000)

window.addEventListener("scroll",scrollModal)

})
