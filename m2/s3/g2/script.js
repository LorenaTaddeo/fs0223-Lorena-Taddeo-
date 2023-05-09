let saveBtn = document.getElementById('saveButton');
let deleteBtn = document.getElementById('deleteButton');
let input = document.getElementById('nameHolder');
let lastAdded = document.getElementById('lastAdded');
let names = [];

saveBtn.addEventListener('click', save);

function save(e){
    e.preventDefault();
    localStorage.setItem('Names', JSON.stringify(names));
    names.push(input.value);
    localStorage.setItem('Names', JSON.stringify(names));
    lastAdded.innerHTML = names[names.length - 1];
    document.querySelector('form').reset();
}

deleteBtn.addEventListener('click', cancel);

function cancel(){
    let names =JSON.parse(localStorage.getItem('Names'));
    names.pop();
    localStorage.setItem('Names', JSON.stringify(names));
    lastAdded.innerHTML = names[names.length - 1];
}

let counterValue = parseInt(sessionStorage.getItem('lastCounterValue')) || 0;

let counter = document.querySelector('#counter');

const updateCounterInDOM = () => {
	counter.innerText = counterValue;
};

window.onload = () => {
	paragraph = document.getElementById('counter');
	updateCounterInDOM();
	setInterval(incrementCounter, 1000);
};

const incrementCounter = () => {
	counterValue += 1;
	updateCounterInDOM();
	sessionStorage.setItem('lastCounterValue', counterValue);
};