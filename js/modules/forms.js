import { closeModal, openModal} from './modalCards'
import {postData} from '../services/services'
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
      openModal('.modal', modalTimerId)
   
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
        closeModal('.modal')
      }, 4000)
    }
}
export default   forms