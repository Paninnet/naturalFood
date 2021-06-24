function forms () {
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
}
module.exports = forms