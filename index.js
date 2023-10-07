const form = document.querySelector("form")
const item = document.querySelector("#item")
const div = document.querySelector('div')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const toDo = item.value
    console.log(toDo)
    const mainText = document.createTextNode(`${toDo}`)
    const p = document.createElement('p')
    p.appendChild(mainText)
    div.appendChild(p)
})