// PAINEL DE CONTROLE DOS MINUTOS//

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const addPlus = document.querySelector('.plus')
const subtractMinus = document.querySelector('.minus')

// PAINEL DOS CARDS//
const florestAudio = document.querySelector('#florest')
const buttonFlorest = document.querySelector('.florest')

const rainAudio = document.querySelector('#rain')
const buttonRain = document.querySelector('.rain')

const coffeeShopAudio = document.querySelector('#coffee-shop')
const buttonCoffee = document.querySelector('.coffee-shop')

const fireAudio = document.querySelector('#fire')
const buttonFire = document.querySelector('.fire')

export {
    buttonPlay,
    buttonPause,
    addPlus,
    buttonStop,
    subtractMinus,
    minutesDisplay,
    secondsDisplay,

    florestAudio,
    buttonFlorest,
    rainAudio,
    buttonRain,
    coffeeShopAudio,
    buttonCoffee,
    fireAudio,
    buttonFire,
}