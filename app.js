'use strict'

//Model 
const options = {
  'I' : {
    'see' : {'myself': '', 'you': '', 'them': '', 'her': '', 'him': ''},
    'eat' : {'dinner': '', 'breakfast': '','lunch': ''},
    'drink' : {'water': '', 'juice': '', 'milk': ''},
    'am' : {'hungry': '','sad' : '', 'happy': '' ,'full': '', 'sleepy': ''}
  }
}

//Views 

function render() {
  return `
    <article>
      <input id='voice-input' type='text' />
      <article id='display-options'>Options</article>
      <button onclick='say()'> speak </button> 
  </article>
  `
}

function renderOptions(options, parentElement){
  let displayOptions = document.getElementById('display-options')
  let mapped = new Map(Object.entries(options))
  Object.keys(options).map((key) => {
    let div = document.createElement('div')
    div.textContent = key
    div.id = key
    div.onclick = () => { addText(key), renderOptions(options[key], div)}
    
    if (parentElement) {
      parentElement.insertAdjacentElement('afterend',div)
    }else {
      displayOptions.appendChild(div)
    }
        
  })
}

//Actions 

function addText(content) {
  let input = document.getElementById('voice-input')
  input.value += ` ${content}`
}

export function say(){
  let synth = window.speechSynthesis
  let voiceInput = document.getElementById('voice-input')
  let utterance = new SpeechSynthesisUtterance(voiceInput.value)
  utterance.lang = 'en-US'
  
  synth.speak(utterance)
    
}


export function addToPage() {
  let mainArticle = document.getElementById('speak')
  //document.getElementById('speak').innerHTML = render()
  mainArticle.innerHTML = render()
  renderOptions(options)
  
}