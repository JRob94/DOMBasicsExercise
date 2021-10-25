// DOM Basics Exercise

// 1
const portillos = document.getElementById(`portillos`);
console.dir(portillos);

// 2
const images = document.getElementsByTagName(`img`);
console.dir(images);

// 3
const centered = document.getElementsByClassName(`center`);
console.dir(centered);

// 4
const ginosEast = document.querySelector(`div`);
console.dir(ginosEast);

// 5
const pTags = document.querySelectorAll(`p`);
console.dir(pTags);

// 6a
const h1 = document.querySelector(`h1`);
console.dir(h1);
console.log(h1.innerText);

// 6b
h1.innerText= `Matt's Favorite Places to Eat in Sweet Home Chicago!`;
console.log(h1.innerText);

// 7a
const others = document.querySelector(`#others`);
console.dir(others);
console.log(others.innerHTML);

// 7b
others.innerHTML = `<h3>Other favorites</h3>`
console.log(others.innerHTML);

// 8a
const aTag = document.querySelector(`a`);
console.dir(aTag);
console.log(aTag.href);

// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`
console.log(aTag.href);

// 9
console.log(h1.classList);
h1.classList.add(`background`, `text-color`);
console.dir(h1.classList)

// 10
h1.classList.remove(`background`);
console.log(h1.classList);

// 11a
const h4 = document.createElement(`h4`);

// 11b
h4.innerText = `CHICAGO: A great place to eat!`
console.dir(h4.innerText);

// 11c
const body = document.querySelector(`body`);
body.prepend(h4);

// 12a
const h5 = document.createElement(`h5`);

// 12b
h5.innerText = `See you in The Windy City Sometime!`;

// 12c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
const  jays = document.querySelector(`li`);
jays.remove();