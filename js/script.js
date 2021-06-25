import tabs  from './modules/tabs'
import modalCards  from './modules/modalCards'
import timer  from './modules/timer'
import cards  from './modules/cards'
import calc  from './modules/calc'
import forms  from './modules/forms'
import slider  from './modules/slider'
import {openModal} from './modules/modalCards'
window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(()=>openModal('.modal',modalTimerId ) , 300000);




  tabs('.tabheader__item','.tabcontent','.tabheader__items' , 'tabheader__item_active')
  modalCards('[data-modal]', '.modal', modalTimerId)
  timer('.timer','2020-30-09')
  cards()
  calc()
  forms('form',modalTimerId)
  slider()
})


