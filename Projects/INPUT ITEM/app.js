const form= document.querySelector("#form");
const input= document.querySelector("#name");
const list=document.querySelector("#item");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=input.value;
    const newli=document.createElement('li');
    newli.innerText=name;
    list.append(newli);
    input.value='';
});