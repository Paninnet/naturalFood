/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc () {
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
        }
        else if(isNaN(height)){
          document.querySelector("#height").style.border = "5px solid red"
        }
        else if(isNaN(age)){
          document.querySelector("#age").style.border = "5px solid red"
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
    
    return res
    
  }
  
  document.querySelector('.calculating__choose_medium').querySelectorAll('.choose').forEach(item =>{
    item.addEventListener('input',() =>{
      if (sex === 447.8) {
        result =( calcAllCalories(sex,9.563,1.85,4.676,activit))
      }
      else{
        result =( calcAllCalories(sex,13.75,5.003,6.775,activit))
      }
      if (sex == undefined || activit == undefined ||weight == 0 || height == 0 || age== 0){
        innerRes.innerHTML="____"
      }
      else if(isNaN(weight)){
        document.querySelector("#weight").style.border = "5px solid red"
      }
      else if(isNaN(height)){
        document.querySelector("#height").style.border = "5px solid red"
      }
      else if(isNaN(age)){
        document.querySelector("#age").style.border = "5px solid red"
        
      }
      else{
        document.querySelector(".calculating__choose_medium").querySelectorAll(".choose").forEach(
          item =>{
            item.style.border = '1px solid black'
          }
        )
        innerRes.innerHTML=Math.ceil(result)
      }

    } )
  })
  
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards () {
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


 
 axios.get('http://localhost:3000/menu')
 .then(data => {
   data.data.forEach(({img, altimg, title, descr, price}) =>{
     new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
   })
 } )

 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalCards */ "./js/modules/modalCards.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function forms (formSelector,modalTimerId) {
   let form = document.querySelectorAll(formSelector).forEach(item => {
      bindpostForm(item)
    })
   
    let message = {
      loading: "img/spinner.svg",
      ready: "ready",
      failure: "failure"
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
   
   
        ;(0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
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
      ;(0,_modalCards__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId)
   
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
        ;(0,_modalCards__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal')
      }, 4000)
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modalCards.js":
/*!**********************************!*\
  !*** ./js/modules/modalCards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);

   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
 }
 
 function openModal(modalSelector , modalTimerId) {
   const modal = document.querySelector(modalSelector);

   modal.classList.add('show');
   modal.classList.remove('hide');
   document.body.style.overflow = 'hidden';

   if( modalTimerId) {
      clearInterval(modalTimerId)
   }
   clearInterval(modalTimerId);
 }

function modalCards(triggerSelector, modalSelector, modalTimerId){
     // МОДАЛЬНОЕ

  const modalTrigger = document.querySelectorAll(triggerSelector),
  modal = document.querySelector(modalSelector);

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
});



modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == "") {
    closeModal(modalSelector);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    closeModal(modalSelector);
  }
});


// Изменил значение, чтобы не отвлекало

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal(modalSelector, modalTimerId);
    window.removeEventListener('scroll', showModalByScroll);
  }
}
window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCards);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function slider () {
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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
   // ТАБЫ
  const tabcontent = document.querySelectorAll(tabsContentSelector)
  const tabheader__items = document.querySelector(tabsParentSelector)
  const tabheader__item = document.querySelectorAll(tabsSelector)

  function hideAllTabs() {
    tabcontent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show')
    });
    tabheader__item.forEach((item) => {
      item.classList.remove(activeClass)
    });
  }

  function showTab(i = 0) {
    tabcontent[i].classList.add('show')
    tabheader__item[i].classList.add(activeClass)
  }
  tabheader__items.addEventListener('click', (e) => {
    let target = e.target
    if (target && target.classList.contains(tabsSelector.slice(1))) {
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
   function getTimeRemaining(endtime) {
       const t = Date.parse(endtime) - Date.parse(new Date()),
           days = Math.floor( (t/(1000*60*60*24)) ),
           seconds = Math.floor( (t/1000) % 60 ),
           minutes = Math.floor( (t/1000/60) % 60 ),
           hours = Math.floor( (t/(1000*60*60) % 24) );

       return {
           'total': t,
           'days': days,
           'hours': hours,
           'minutes': minutes,
           'seconds': seconds
       };
   }

   function getZero(num){
       if (num >= 0 && num < 10) { 
           return '0' + num;
       } else {
           return num;
       }
   }

   function setClock(selector, endtime) {

       const timer = document.querySelector(selector),
           days = timer.querySelector("#days"),
           hours = timer.querySelector('#hours'),
           minutes = timer.querySelector('#minutes'),
           seconds = timer.querySelector('#seconds'),
           timeInterval = setInterval(updateClock, 1000);

       updateClock();

       function updateClock() {
           const t = getTimeRemaining(endtime);

           days.innerHTML = getZero(t.days);
           hours.innerHTML = getZero(t.hours);
           minutes.innerHTML = getZero(t.minutes);
           seconds.innerHTML = getZero(t.seconds);

           if (t.total <= 0) {
               clearInterval(timeInterval);
           }
       }
   }

   setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
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

 let getResource = async (url) => {
   let res = await fetch(url)

   if (!res.ok) {
     throw new Error(`Could not fetch ${url}, status: ${res.status}`)
   }
   return await res.json()
 }

 
 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modalCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalCards */ "./js/modules/modalCards.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");








window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(()=>(0,_modules_modalCards__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal',modalTimerId ) , 300000);




  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item','.tabcontent','.tabheader__items' , 'tabheader__item_active')
  ;(0,_modules_modalCards__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal', modalTimerId)
  ;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)('.timer','2021-09-30')
  ;(0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)()
  ;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__.default)()
  ;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__.default)('form',modalTimerId)
  ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)()
})



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map