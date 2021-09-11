const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=tema]");

const coresIniciais = {
    background: window.getComputedStyle(html).getPropertyValue("--background"),
    corTitulo: window.getComputedStyle(html).getPropertyValue("--cortitulo"),
    corTexto: window.getComputedStyle(html).getPropertyValue("--cortexto"),
    header: window.getComputedStyle(html).getPropertyValue("--header"),
}

const darkMode = {
    background: "#000000",
    corTitulo: "#cacaca",
    corTexto: "#cacaca",
    header: "#202020",
}

const transformKey = key => "--" + key.replace(/[(A-Z)]/, "t").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])   
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(coresIniciais)
})