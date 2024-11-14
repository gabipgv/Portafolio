

const btn = document.body.querySelector('#hamburger')
const menuItems = document.body.querySelector("#menuItems");

btn.addEventListener('click', ()=>{

  
  menuItems.classList.toggle("active");

})

const lupa = document.body.querySelector('#lupa')
const buscador = document.body.querySelector("#buscador");

lupa.addEventListener('click', ()=>{

  
  buscador.classList.toggle("mostrar");

})
