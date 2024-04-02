// console.log('amei connerct hoice');
// --------------------------------------------
// const title = document.getElementById('title');
// title.innerText = 'My Js Power';
// title.innerText;
// title.style.color = 'red';
// console.log(title.innerText);


// const title2 = document.querySelector('p');
// title2.textContent = 'I am done by selector'
// console.log(title2);

// ---------------------------------------------

// const items = document.getElementsByClassName('li_items');
// const array = Array.from(items);
// console.log(Array.isArray(array));
// console.log(array);
// for (let index = 0; index < items.length; index++) {
//     const element = items[index];

//     element.innerText = 'amer name anik';
//     element.style.color = 'green'
// }
// console.log(typeof items);
// --------------------------------------
// const items2 = document.getElementsByTagName('li');
// // console.log(li);
// for (const iterator of items2) {
//     // console.log(iterator);
//     iterator.style.fontSize = '30px';
//     iterator.style.backgroundColor = 'red'
// }
// ----------------------------------------------
// const items3 = document.querySelectorAll('li');
// // console.log(items3);
// for(const item of items3){
//     item.style.color = 'red'
// }
// ----------------------------------------------
// const bodyName = document.querySelector('body');
// console.log(bodyName.childNodes);
// console.log(bodyName.children);
// -----------------------------------------------
// const elements = document.getElementsByClassName('li_items');
// console.log(elements);

// const nodes = document.querySelectorAll('.li_items');
// console.log(nodes);
// ---------------------------------------------
// const nodes = document.querySelector('.lists');
// console.log(nodes.childNodes);

// const elements = document.getElementById('li_container');
// console.log(elements.children);
// ----------------------------------------------
// const ul = document.getElementById('li_container');
// console.log(ul.children);
// console.log(ul.parentElement);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
// ---------------------------------------------
// const lists = document.querySelector('ul');
// console.log(lists.innerText);
// console.log(lists.textContent);
// let name = 'anik'
// lists.innerHTML = `<p>${name}</p>`
// -----------------------------------------------
// document.querySelector('h2').removeAttribute('id')
// document.querySelector('h2').setAttribute('class', 'afasf')
// console.log(document.querySelector('h2').getAttribute('id'));
// console.log(document.querySelector('h2').getAttribute('class'));
// ----------------------------------------------
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.innerText = 'anik tumei valo aco';
// ul.appendChild(li)
// -----------------------------------------------
// const h2 = document.querySelector('h2');
// h2.classList.add('anik', 'joy', 'apu')
// h2.classList.remove('la')
// ---------------------------------------------
// const ul = document.querySelector('ul');

// const second = document.getElementById('second');
// const li = document.createElement('li');
// li.innerText = 'anik akon valo pareay';
// ul.insertBefore(li, second)

// const fourth = document.getElementById('fourth');
// const li1 = document.createElement('li');
// li1.innerText = 'amei akon valo na';
// ul.insertBefore(li1, fourth)
// -------------------------------------------------
// const ul = document.querySelector('ul');
// const li = document.querySelector('li');
// ul.removeChild(li);