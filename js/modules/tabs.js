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
export default  tabs;