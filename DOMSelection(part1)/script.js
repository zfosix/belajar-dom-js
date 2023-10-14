// DOM Selection
// document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul')
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Fajar Fauzian';

// document.getElementByIdTagName() -> mengembalikan HTMLCollection
const p = document.getElementsByTagName('p');
for( let i = 0; i < p.length; i++){
     p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari Javascript';   