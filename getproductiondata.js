const mainContainerEl = document.querySelector(".main-container");

let proDtl = JSON.parse(localStorage.getItem("productionDetails")) || [];
console.log(Object.keys(proDtl[0]));
Object.keys(proDtl[0]).forEach(headers => {
    console.log(headers.toLocaleUpperCase());
})