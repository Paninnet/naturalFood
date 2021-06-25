import {getResource} from '../services/services'
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

export default  cards