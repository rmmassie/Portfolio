/**
 * Document Object Model - Where JS interacts with HTML/CSS
 * Specifies how a broswer interprets the Markup, and hos JS can access and manipulate the browser window.
 * DOM is an OOP representation of a web page.
 * Makes a model of the HTML webpage
 *
 *  Access and Manipulate the Markup
 * Methods to access a single element:
 * 1. getElementById()
 * 2. querySelector('h1') Selects first H1
 *
 * Access Multi Elements
 * 1. querySelectorAll('h1')  selects all H1s
 *  2. getElementsByClass()
 * 3. getElementsByTagName()
 * 
 * Manupulating Data CONTENT: (HTML)
 * 1. innerHTML
 * 2. textContent
 * 3. createElement
 * 
 * Manipulating data attributes (CSS)
 * 1. className / id
 * 2  setAttribute()
 * 2. getAttribute()
 */

//  1.
let x = 10;
console.log(x);

// getElementById()

// let testPara = document.getElementById('testParagraph')
// testPara.style.color = 'red'
let testPara = document.getElementById('testParagraph').style
testPara.color = 'red'


// querySelectorAll(), innerText, innerHTML
console.log(document.querySelectorAll('p.sampleClass')) 
//returns a nodeList in the browser console with tons of info aboupt the element(s)

//change 1 element
//document.querySelectorAll('p.sampleClass')[3].innerText = 'This One Has Been Changed in the JS doc.'

//Change all the elements

let changeAll = document.querySelectorAll('p.sampleClass')
let colors = ['red', 'blue', 'green', 'orange', 'yellow', 'violet']
let i = 0
changeAll.forEach(element => {
    element.innerHTML = (`This is Element Number ${i+1}`)
    element.style.color = colors[i]
    i++
});


//innerText = changes the text of the specified element. Only returns visible text.
//textContent does the same thing with the FULL text of the node.
//innerHTML changes all the HTML and text in a tag.

console.log(document.getElementById('spantest').innerText)
console.log(document.getElementById('spantest').textContent)


//addEventListener()
// //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// document.getElementById('clickThisButton').addEventListener('click', event => {
//     event.target.style.backgroundColor = 'blue'
// })

document.getElementById('clickThisButton').style.color = 'white'
document.getElementById('clickThisButton').style.backgroundColor = 'red'
document.getElementById('clickThisButton').addEventListener('click', listener)

function listener(){
   if (event.target.style.backgroundColor === 'red') {
        event.target.style.backgroundColor = 'blue'
   } else if (event.target.style.backgroundColor === 'blue'){
        event.target.style.backgroundColor = 'red'
   }
}

// addEventListenet keyup, getElementByTagName()
// console.log(document.getElementsByTagName('p'))
document.getElementById('nameInput').addEventListener('keyup', event => {
    console.log(event.target.value)
    document.getElementsByTagName('p')[1].innerText = 'Something Changed'
    if(event.target.value =="") {
        document.getElementsByTagName('p')[2].innerText = 'Nothing Has Been Typed.'
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone Say Hi to ${event.target.value}`
    }
})

test = document.createTreeWalker(document.body)
console.log(test)