var horas = 0
var minutos = 0
var segundos = 0

const spanHoras = document.getElementById("horas")
const spanMin = document.getElementById("min")
const spanSeg = document.getElementById("seg")
const turnColor = document.getElementById("ChangeBg")
const turnColor2 = document.getElementById("ChangeBg2")
const main = document.getElementById("mainContent")
const boxHour = document.getElementsByClassName('box')
const changeBox = document.getElementById("btn")

const relogio = setInterval(function time() {
    let dataHoje = new Date()
    let hr = dataHoje.getHours()
    let min = dataHoje.getMinutes()
    let seg = dataHoje.getSeconds()

    spanHoras.innerHTML = hr
    spanMin.innerHTML = min 
    spanSeg.innerHTML = seg
})


  
turnColor.addEventListener('click', () =>{
         if(main.dataset.theme = "dark"){
            main.classList.add('Light')
            changeBox.classList.add('')
            main.dataset.theme = "Light"
            console.log(main.dataset)
       }
       
})

turnColor2.addEventListener('click', () =>{
    if(main.dataset.theme = "Light"){
       main.classList.remove('Light')
       main.dataset.theme = "dark"
       console.log(main.dataset)
  }
  
})