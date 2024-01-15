// configurar la aplicación
const mensajeInicial = 'Empieza a adivinar...'
const SCORE = 20
//Variables de la aplicacion
let score 
let highScore = 0
let secretNumber



// seleccionar elementos del DOM
const messageField = window.document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// inicializar la aplicación
initApp()



// funcionalidad de la aplicación

// addEventListener es una función que recibe
// como argumento otra función
checkButton.addEventListener('click', () => {
  // obtener el valor del input
  const guessNumber = Number(guessNumberField.value)
  if (guessNumber > secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = score
    messageField.textContent = 'Te has pasado'
  } else if (guessNumber < secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = score
    messageField.textContent = 'Has acertado'
  } else {
    // ha ganado...
    // cambiar fondo de pantalla
    document.body.style.backgroundColor = 'green'
    checkButton.disabled = true
    // mostrar el número secreto
    secretNumberField.textContent = secretNumber
    highScoreField.style.backgroundColor = 'yellow'
    secretNumberField.style.width = '300px'
    // actualizar el highScore
    if(score>highScore){
      highScore = score
      highScoreField.textContent = highScore
    }
  }

  // compararlo con el secretNumber
})

function initApp() {
//inicializamos score
//FIXme:Errores de Scope
score = SCORE
scoreField.textContent = score
//TODO:inicializamos highscore
//Habría que leer algún almacenamiento, cookies

//Inicializar el texto
messageField.textContent = mensajeInicial

//Inicializar el nº secreto

highScoreField.textContent = highScore
const secretNumber = Math.trunc(Math.random() * 20) + 1
secretNumberField.texContent = '?'

  



//Inicializar el fondo de pantalla
document.body.style.backgroundColor ='#222'
highScoreField.style.backgroundColor = '#fff'
secretNumberField.style.width = '150px'

checkButton.disabled =false
}


againButton.addEventListener('click', initApp) 

  





