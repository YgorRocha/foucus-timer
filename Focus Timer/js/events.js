import{
    buttonPlay,
    buttonPause,
    addPlus,
    buttonStop,
    subtractMinus,
    minutesDisplay,} from "./elements.js"

export default function Events({timer}){
    
    buttonPlay.addEventListener('click', function(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        timer.countDown()
    })
    
        buttonPause.addEventListener('click', function(){
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            timer.hold()
    
        })
        
        buttonStop.addEventListener('click', function(){
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            timer.resetTimer()
                   
        })
        
        function handleaddPlus(){
            let currentMinutes = Number(minutesDisplay.textContent)
            timer.updateTimer(currentMinutes + 5 ,0)
       
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            timer.hold()
       
           }  
       
           function handleSubtract(){
               let currentMinutes = Number(minutesDisplay.textContent)    
               timer.updateTimer(currentMinutes - 5, 0) 
       
               buttonPlay.classList.remove('hide')
               buttonPause.classList.add('hide')
               timer.hold()
       
              if(currentMinutes <=0){
              timer.updateTimer(minutesDisplay.textContent = currentMinutes * 0, 0) 
              }
           }
       
           addPlus.addEventListener('click', handleaddPlus)
           subtractMinus.addEventListener('click', handleSubtract)
}
