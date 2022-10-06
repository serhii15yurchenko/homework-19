// Створити сторінку, що показує нумерований список пісень:
let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    
    ];

const LIST = document.createElement('ol');
const CONTAINER = document.querySelector('.container');
CONTAINER.prepend(LIST);


// for (let i = 0; i < playList.length; i++) {
//     const ITEM = document.createElement('li');
//     LIST.append(ITEM);
//     ITEM.innerText = `${playList[i].author} - ${playList[i].song}`
//     ITEM.style.marginBottom = '5px';
// };

playList.forEach(i => {
    const ITEM = document.createElement('li');
    LIST.prepend(ITEM)
    ITEM.innerHTML = `<b> Author: </b> ${i.author} <br> <b> Song: </b> ${i.song}`
});


// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". 
// Спочатку модальне вікно не відображається. 
// При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const MODAL = document.querySelector('.modal');
const BUTTON = document.querySelector('.show-modal').addEventListener('click', show);
const CROSS = document.querySelector('.btn-close').addEventListener('click', show);
const CLOSE = document.querySelector('.btn-secondary').addEventListener('click', show);

function show() {
    MODAL.classList.toggle('show')
};


// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const TRAFFIC_LIGHTS = document.querySelector('.traffic-lights');
const RED = document.getElementById('red');
const YELLOW = document.getElementById('yellow');
const GREEN = document.getElementById('green');
const BUTTON_CHANGE = document.querySelector('.change-color');

BUTTON_CHANGE.addEventListener('click', function() {
    
    if (RED.classList.contains('active-red')){
        RED.classList.remove('active-red');
        YELLOW.classList.add('active-yellow');
    } else if (YELLOW.classList.contains('active-yellow')){
        YELLOW.classList.remove('active-yellow');
        GREEN.classList.add('active-green');
    } else if (GREEN.classList.contains('active-green')){
        GREEN.classList.remove('active-green');
        RED.classList.add('active-red');
    }   
});

