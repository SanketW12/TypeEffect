window.addEventListener("load", (e)=> {


const btn = document.querySelector("#display");
const dtxt = document.querySelectorAll('.txt');

console.log(e);
btn.addEventListener("click", ()=>{

const etxt = document.querySelector('.inpt input').value;

dtxt.forEach(show);

function show(dtxt,i) {

dtxt.innerHTML=etxt;
}



});
});
