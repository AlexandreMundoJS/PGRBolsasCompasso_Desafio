const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=tema]");

const coresIniciais = {
    background: window.getComputedStyle(html).getPropertyValue("--background"),
    corTitulo: window.getComputedStyle(html).getPropertyValue("--cortitulo"),
    corTexto: window.getComputedStyle(html).getPropertyValue("--cortexto"),
    header: window.getComputedStyle(html).getPropertyValue("--header"),
}