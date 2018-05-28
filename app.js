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
      <button> speak </button> 
  </article>
  `
}

function renderOptions(options){
  let displayOptions = document.getElementById('display-options')
  let mapped = new Map(Object.entries(options))
  Object.keys(options).map((key) => {
    console.log(options[key])
    console.log(typeof options[key])
    let div = document.createElement('div')
    div.textContent = key
    //let renderedChildren = renderChildren(options[key])
    div.onclick = () => { addText(key), renderOptions(options[key])}
    displayOptions.appendChild(div)
    
  })
}

function renderChildren(content){
  console.log(content)
  let div = document.createElement('div')
  div.textContent = content
  div.onclick = () => addText(content)
}

//Actions 

function addText(content) {
  //console.log('clicked')
  let input = document.getElementById('voice-input')
  input.value += ` ${content}`
}

function speak(){
  
  
  
}


export function addToPage() {
  let mainArticle = document.getElementById('speak')
  //document.getElementById('speak').innerHTML = render()
  mainArticle.innerHTML = render()
  renderOptions(options)
  
}