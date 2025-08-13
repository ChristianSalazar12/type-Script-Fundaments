const h1 = document.querySelector('h1');
console.log(h1);

let title: HTMLHeadingElement = document.querySelector('.title') as HTMLHeadingElement;
console.log(title); // This will log the element with class 'title' or null if not found

const message = document.querySelector('#message') as HTMLInputElement;
console.log(message); // This will log the element with id 'message' or null if not found

// More calls to HTML tags
const button = document.querySelector('button') as HTMLButtonElement;
console.log(button); // Logs the first <button> element

const form = document.querySelector('form') as HTMLFormElement;
console.log(form); // Logs the first <form> element

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs); // Logs all <p> elements as a NodeList

const inputText = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(inputText); // Logs the first text input element

const links = document.querySelectorAll('a');
console.log(links); // Logs all <a> (anchor) elements as a

const images = document.querySelectorAll('img');
console.log(images); // Logs all <img> elements as a NodeList

const divs = document.querySelectorAll('div');
console.log(divs); // Logs all <div> elements as a NodeList