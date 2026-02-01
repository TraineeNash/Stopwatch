const Start_Btn = document.querySelector("#start")
const Stop_Btn = document.querySelector("#stop")
const Reset_Btn = document.querySelector("#reset")

const Hour_Value = document.querySelector("#hour")
const Minute_Value = document.querySelector("#minute")
const Second_Value = document.querySelector("#second")

let Interval = null
let second = 0
let minute = 0
let hour = 0

function updateUI(){
    Hour_Value.textContent = hour < 10 ? "0" + hour : hour
    Minute_Value.textContent = minute < 10 ? "0" + minute : minute
    Second_Value.textContent = second < 10 ? "0" + second : second
}

function tick(){
    second++
    if(second>59){
        minute+=1
        second = 0
    }
    if(minute>59){
        hour+=1
        minute = 0
    }

    updateUI()
}

Start_Btn.addEventListener("click",()=>{
    console.log("Start button pressed")

    if(Interval){
        return
    }

    Interval = setInterval(tick,1000)
})

Stop_Btn.addEventListener("click",()=>{
    console.log("Stop button pressed")

    clearInterval(Interval)
    Interval = null
})

Reset_Btn.addEventListener("click",()=>{
    console.log("Reset button pressed")

    clearInterval(Interval)
    Interval = null
    hour = 0
    minute = 0
    second = 0
    updateUI()
})

// ----------------------------------------------------------
// to add popup and click the button to youtube

const Popup_Btn = document.querySelector("#click-popup")
const Youtube_Btn = document.querySelector("#youtube")
const Close_Popup = document.querySelector("#close-popup")
const Popup_Layout = document.querySelector("#popup")

Popup_Btn.addEventListener("click",()=>{
    Popup_Layout.classList.remove("translate-x-full")
})

Youtube_Btn.addEventListener("click",()=>{
    // window.location.href = "https://www.youtube.com"
    window.open("https://www.youtube.com","_blank")
})

Close_Popup.addEventListener("click",()=>{
    Popup_Layout.classList.add("translate-x-full")
})

document.addEventListener("click",(event)=>{
    if(Popup_Layout && Popup_Layout.contains(event.target)){
        Popup_Layout.classList.add("translate-x-full")
    }   
})