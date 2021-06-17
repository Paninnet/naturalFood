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

  let getResource = async (url) => {
    let res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  // getResource('http://localhost:3000/menu')
  // .then(data =>createCard(data))

  // function createCard(data) {
  //   data.forEach(({img, altimg, title, descr, price})=>{
  //     let element = document.createElement('div')
  //     element.classList.add('menu__item')

  //     element.innerHTML=` <img src=${img} alt=${altimg}>
  //     <h3 class="menu__item-subtitle">${title}</h3>
  //     <div class="menu__item-descr">${descr}</div>
  //     <div class="menu__item-divider"></div>
  //     <div class="menu__item-price">
  //         <div class="menu__item-cost">Цена:</div>
  //         <div class="menu__item-total"><span>${price}</span> руб/день</div>
  //     </div>
  //     `

  //     document.querySelector('.menu .container').append(element)
  //   })
  // }

  // getResource('http://localhost:3000/menu')
  // .then(data =>{
  // data.forEach(({img, altimg, title, descr, price}) =>{
  //   new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
  // })
  // })


  // РАЗКОМЕНТИРОВАТЬ ПРИ ИНТЕРНЕТЕ 
  // axios.get('http://localhost:3000/menu')
  // .then(data => {
  //   data.data.forEach(({img, altimg, title, descr, price}) =>{
  //     new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
  //   })
  // } )

  let form = document.querySelectorAll('form').forEach(item => {
    bindpostForm(item)
  })

  let message = {
    loading: "img/spinner.svg",
    ready: "ready",
    failure: "failure"
  }

  let postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    })
    return await res.json()
  }

  function bindpostForm(form) {
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

      // let obj ={}
      // formData.forEach((value, key)=>{
      //   obj[key]=value
      // })

      const json = JSON.stringify(Object.fromEntries(formData.entries()))


      postData('http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.ready)
          newBlock.remove()
        }).catch(() => {
          showThanksModal(message.failure)
        }).finally(() => {
          let inputs = form.querySelectorAll('input').forEach(item => { item.value = "" })
        })
    })
  }

  function showThanksModal(message) {
    let pevModal = document.querySelector(".modal__dialog")

    pevModal.classList.add('hide')
    openModal()

    let thanksModal = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>x</div>
      <div class="modal__title">${message}</div>
    <div>`

    document.querySelector('.modal').append(thanksModal)
    setTimeout(() => {
      thanksModal.remove()

      pevModal.classList.remove('hide')
      closeModal()
    }, 4000)
  }



  // Slider

  let prevSlide = document.querySelector('.offer__slider-prev')
  let nextSlide = document.querySelector('.offer__slider-next')

  let currentSlide = document.querySelector('#current')
  let totalSlide = document.querySelector("#total")

  const allImg = ["img/slider/pepper.jpg", "img/slider/food-12.jpg", "img/slider/olive-oil.jpg", "img/slider/paprika.jpg",]

  let offer__img = document.querySelector('.offer__img')

  function showTotalSlide(array) {
    let totalAllImg = 0
    for (let i = 0; i < array.length; i++) {
      totalAllImg++
    }
    console.log(totalAllImg);
    if (totalAllImg < 10) {
      totalSlide.innerHTML = `0${totalAllImg}`
    }
    else {
      totalSlide.innerHTML = totalAllImg
    }

  }

  let currentIndex = 1
  function showCurrentSlide() {
    if (currentIndex < 10) {
      currentSlide.innerHTML = `0${currentIndex}`
    }
    else {
      currentSlide.innerHTML = currentIndex
    }

  }


  nextSlide.addEventListener('click', () => {
    if (currentIndex >= allImg.length) {
      currentIndex = 0
      currentIndex++
      offer__img.src = allImg[currentIndex - 1]
      showCurrentSlide(allImg)
    } else {
      currentIndex++
      offer__img.src = allImg[currentIndex - 1]
      showCurrentSlide(allImg)
    }

    console.log(currentIndex);
  })



  prevSlide.addEventListener('click', () => {

    if (currentIndex <= 1) {
      currentIndex = allImg.length + 1
      currentIndex--
      offer__img.src = allImg[currentIndex - 1]
      showCurrentSlide(allImg)
    }
    else {
      currentIndex--
      offer__img.src = allImg[currentIndex - 1]
      showCurrentSlide(allImg)
    }
  })


  showCurrentSlide()
  showTotalSlide(allImg)


  // Калькулятор каллорий
  let gender = document.querySelector("#gender")
  let activity = document.querySelector(".calculating__choose_big")
  let innerRes = document.querySelector("#totalCal")
  innerRes.innerHTML="____"

  function chooseOne(identeficator, div) {
    let choseField = document.querySelector(identeficator)
    choseField.querySelectorAll(".choose").forEach(item => {
      item.addEventListener("click", (e) => {
        let target = e.target
        div.querySelectorAll(".choose").forEach(item => {
          item.classList.remove("calculating__choose-item_active")

        })
        target.classList.add("calculating__choose-item_active")

      })
    })
  }
  chooseOne("#gender", gender)
  chooseOne(".calculating__choose_big", activity)

  let sex
  let activit
  let result
  let weight
  let height
  let age

  document.querySelector(".calculating__choose_medium").querySelectorAll("chose")
  
  function getStaticInfo(wrapper, selector){
    
    document.querySelector(wrapper).querySelectorAll(selector).forEach(item =>{
      item.addEventListener('click', function calc(e){
        let target = e.target
        if (target.getAttribute('data-gender')){
          sex = target.getAttribute('data-gender')
          if (sex === 447.8) {
            result =( calcAllCalories(sex,9.563,1.85,4.676,activit))
          }
          else{
            result =( calcAllCalories(sex,13.75,5.003,6.775,activit))
          }
         
        }
        if (target.getAttribute('data-activity')) {
          activit = target.getAttribute('data-activity')
          console.log(sex,activit);
          if (sex === 447.8) {
            result =( calcAllCalories(sex,9.563,1.85,4.676,activit))
          }
          else{
            result =( calcAllCalories(sex,13.75,5.003,6.775,activit))
          }
        }
        
        
        

        if (sex == undefined || activit == undefined ||weight == 0 || height == 0 || age== 0){
          innerRes.innerHTML="____"
        }
        else if(isNaN(weight)){
          document.querySelector("#weight").style.border = "5px solid red"
          alert("failure")
        }
        else if(isNaN(height)){
          document.querySelector("#height").style.border = "5px solid red"
          alert("failure")
        }
        else if(isNaN(age)){
          document.querySelector("#age").style.border = "5px solid red"
          alert("failure")
        }
        else{
          document.querySelector(".calculating__choose_medium").querySelectorAll(".choose").forEach(
            item =>{
              item.style.border = '1px solid black'
            }
          )
          innerRes.innerHTML=Math.ceil(result)
        }

 
      })
    
    })

   
  }

  getStaticInfo("#gender",".choose")
  getStaticInfo(".calculating__choose_big",".choose")

  function calcAllCalories(genderCoeff,weightCoeff,heightCoeff,ageCoeff,activityCoeff){
    weight = +document.querySelector("#weight").value
    height = +document.querySelector("#height").value
    age = +document.querySelector("#age").value

    let res = ((+genderCoeff + (+weightCoeff * +weight) + (+heightCoeff * +height)-(+ageCoeff * +age))) * +activityCoeff
    console.log(genderCoeff,weightCoeff,heightCoeff,ageCoeff,activityCoeff,weight,height,age,res);
    return res
    
  }
  
  
})


