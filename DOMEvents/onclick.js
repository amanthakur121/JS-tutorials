const btn =document.querySelector('#B1');

btn.onclick = function () {
    console.log("You clicked me");
    console.log("It worked!!")

}
const hover = document.querySelector('#B2')
function scream(){
    console.log("AAAAAAHHH!!!")
    console.log("Dont touch me!!");
}
hover.onclick = function(){
    alert("I worned you not to touch me!!")
}
hover.onmouseenter = scream ;


document.querySelector('h1').onclick = function(){
    alert("You clicked Events");
}