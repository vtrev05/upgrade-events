'use strict';

//iteration 1

const btn = document.querySelector('#btnToClick');

function handleClick(e) {
    console.log(e)
}

btn.addEventListener('click', handleClick)

//iteration 2

const inputFocus = document.querySelector('.focus');

function handleFocus() {
    console.log(inputFocus.value)
}

inputFocus.addEventListener('focus', handleFocus)

//iteration 3

const inputInput = document.querySelector('.value');

function handleInput() {
    console.log(inputInput.value)
}

inputInput.addEventListener('input', handleInput)