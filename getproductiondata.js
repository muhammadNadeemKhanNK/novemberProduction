const mainContainerEl = document.querySelector(".main-container");
const tableHeadEl = document.querySelector(".tbl-head-EL");
const tableBodyEl = document.querySelector(".tbl-body-EL");

let proDtl = JSON.parse(localStorage.getItem("productionDetails")) || [];

const rowHeadEl = document.createElement("tr");
tableHeadEl.appendChild(rowHeadEl);

Object.keys(proDtl[0]).forEach(headers => {
    console.log(headers.toLocaleUpperCase());
    const thEl = document.createElement("th");
    thEl.innerText = headers.toLocaleUpperCase();
    rowHeadEl.appendChild(thEl);    
});

const twenty20 = proDtl.slice(28,35);

twenty20.forEach((proDtl, index) => {
    const dataRowEl = document.createElement("tr");
    tableBodyEl.appendChild(dataRowEl);

    const qcNumTdEl = document.createElement("td");
    const sttNumTdEl = document.createElement("td");
    const productNmTdEl = document.createElement("td");
    const numPackTdEl = document.createElement("td");
    const numPiecesTdEl = document.createElement("td");

    qcNumTdEl.innerText = proDtl.qcNo;
    sttNumTdEl.innerText = proDtl.sttNo;
    productNmTdEl.innerText = (index+1) + "-" + proDtl.productName;
    numPackTdEl.innerText = proDtl.numPack;
    numPiecesTdEl.innerText = proDtl.numPieces;

    dataRowEl.append(qcNumTdEl, sttNumTdEl, productNmTdEl, numPackTdEl, numPiecesTdEl);
});