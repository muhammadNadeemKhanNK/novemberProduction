let proDtl = JSON.parse(localStorage.getItem("productionDetails")) || [];

proDtl.forEach(element => {
    console.log(element.productName);
});