import Timer from "./timer.js"
import Events from "./events.js"
import {
    minutesDisplay,
    secondsDisplay,
    florestAudio,
    buttonFlorest,
    rainAudio,
    buttonRain,
    coffeeShopAudio,
    buttonCoffee,
    fireAudio,
    buttonFire,} from "./elements.js"

const timer = Timer({ minutesDisplay, secondsDisplay });
Events({timer});

const buttons = [buttonFlorest, buttonRain, buttonCoffee, buttonFire];
const audios = [florestAudio, rainAudio, coffeeShopAudio, fireAudio];

let isplaying = false
function toggleAudio(audio, button){
    if(!isplaying){
     audio.play()
     isplaying = true
    }else{
        audio.pause()
        isplaying = false
    }
    handleTouch(button)
   }


function handleTouch(button){
    buttons.forEach(button => button.classList.remove("pressed"));
    button.classList.add("pressed");
   }

    buttons.forEach((button, index) => {
    button.addEventListener('click', function(){
    toggleAudio(audios[index], button); 
    audios.forEach((audio, i) => {
    if(i !== index){
        audio.pause()
    }
    })
    })
    })




   