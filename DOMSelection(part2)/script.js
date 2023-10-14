// document.querrySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript'

// document.querrySelectorAll()
const p = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++){
     p[i].style.backgroundColor = 'lightblue';
}



