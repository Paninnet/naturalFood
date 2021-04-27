window.addEventListener("DOMContentLoaded",()=>{
  const tabcontent = document.querySelectorAll('.tabcontent')
  const tabheader__items = document.querySelector('.tabheader__items')
  const tabheader__item = document.querySelectorAll('.tabheader__item')
console.log(tabheader__item);


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
})
