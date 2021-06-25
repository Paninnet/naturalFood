
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

export default  slider;