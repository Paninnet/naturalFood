window.addEventListener("DOMContentLoaded", () => {

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

  function showTab(i = 0) {
    tabcontent[i].classList.add('show')
    tabheader__item[i].classList.add('tabheader__item_active')
  }
  tabheader__items.addEventListener('click', (e) => {
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

  // МОДАЛЬНОЕ

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 300000);
  // Изменил значение, чтобы не отвлекало

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
  // КЛАССЫ С КАРТОЧКАМИ



  class MenuCard {
    constructor(img, alt, title, text, price, pElement, ...rest) {
      this.img = img;
      this.alt = alt
      this.title = title;
      this.text = text;
      this.price = price;
      this.rest = rest
      this.dollar = 75;
      this.selector = document.querySelector(pElement)
      this.convert()
    }
    convert() {
      this.price *= this.dollar
    }
    render() {
      let element = document.createElement('div')
      if (this.rest.length === 0) {
        this.rest.push("menu__item")
      }
      this.rest.forEach((item) => element.classList.add(item));

      element.innerHTML = `
            <img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>`
      this.selector.append(element)
    }
  }
  new MenuCard("img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    15,
    ".menu .container",
    "menu__item",
    "big").render()

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    ".menu .container"
  ).render();


  let form = document.querySelectorAll('form').forEach(item => {
    postForm(item)
  })

  let message = {
    loading: "img/spinner.svg",
    ready: "ready",
    failure: "failure"
  }

  function postForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      let newBlock = document.createElement("img")
      newBlock.src = message.loading
      newBlock.style.cssText = `
        display:block;
        margin:0 auto;
      `
      form.append(newBlock)
      
      const formData = new FormData(form)

      let obj ={}
      formData.forEach((value, key)=>{
        obj[key]=value
      })
      fetch('server.php',{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(obj)
      })
      .then(data=>data.text())
      .then(data=>{
          console.log(data);
          showThanksModal(message.ready)
          newBlock.remove()
      }).catch(()=>{
        showThanksModal(message.failure)
      }).finally(()=>{
           let inputs = form.querySelectorAll('input').forEach(item => {item.value = ""})
      })
    })
  }

  function showThanksModal(message) {
    let pevModal = document.querySelector(".modal__dialog")

    pevModal.classList.add('hide')
    openModal()

    let thanksModal = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML =`
    <div class="modal__content">
      <div class="modal__close" data-close>x</div>
      <div class="modal__title">${message}</div>
    <div>`

    document.querySelector('.modal').append(thanksModal)
    setTimeout(()=>{
      thanksModal.remove()
   
      pevModal.classList.remove('hide')
      closeModal()
    },4000)
  }

})


