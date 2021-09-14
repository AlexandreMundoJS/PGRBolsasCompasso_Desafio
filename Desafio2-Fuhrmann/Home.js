//
const titulo= document.querySelector('h2');
typeWriter(titulo)

const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
        document.body.classList.toggle("dark", e.target.checked);
})

//Maquina escrever
function typeWriter(elemento) {
const textoArray = elemento.innerHTML.split('');
elemento.innerHTML = '';
textoArray.forEach((letra, i) => {
setTimeout(() => elemento.innerHTML += letra, 75 * i);
});
}

