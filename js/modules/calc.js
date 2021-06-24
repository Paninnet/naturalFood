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
module.exports = calc;