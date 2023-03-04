const btn = document.getElementById("input-id");
const heading=document.getElementById("heading");

const val =(a) =>{
    heading.innerText="You have Pressed "+ a.key;
};
btn.addEventListener("keypress",val);
