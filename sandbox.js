const btn = document.querySelector('button');
const savE = document.querySelector('save-btn');
const countEl = document.getElementById('count-el');
const welcomeEl = document.getElementById('welcome-el');
const saveEl = document.getElementById('save-el');
let count = 0;

function increment(){
    // increasing score and outputing result to the dom
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countVariable = count + ' - ';
    saveEl.textContent += countVariable;
    countEl.textContent = 0;
    count = 0;
    console.log(count)
}


