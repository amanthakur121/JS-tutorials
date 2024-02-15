// The best way of using event function

const addEvent = document.querySelector('#B3');

function twist(){
    console.log("twist");
}

function shout(){
    console.log("shout");
}

addEvent.addEventListener('click',twist);
addEvent.addEventListener('click',shout);