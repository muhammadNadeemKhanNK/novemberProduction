const mainContainerEl = document.querySelector(".main-container");
const tableHeadEl = document.querySelector(".tbl-head-EL");
const tableBodyEl = document.querySelector(".tbl-body-EL");

let proDtl = JSON.parse(localStorage.getItem("productionDetails")) || [];

const rowHeadEl = document.createElement("tr");
tableHeadEl.appendChild(rowHeadEl);
const thElSrNo = document.createElement("th");
thElSrNo.innerText = "Sr No.";
rowHeadEl.appendChild(thElSrNo);

Object.keys(proDtl[0]).forEach(headers => {
    const thEl = document.createElement("th");
    thEl.innerText = headers.toLocaleUpperCase();
    rowHeadEl.appendChild(thEl);
});

const thElTotal = document.createElement("th");
thElTotal.innerText = "Total";
rowHeadEl.appendChild(thElTotal);

const twenty20 = proDtl.slice(15,30);

twenty20.forEach((proDtl, index) => {
    const dataRowEl = document.createElement("tr");
    tableBodyEl.appendChild(dataRowEl);

    const srNumTdEl = document.createElement("td");
    const qcNumTdEl = document.createElement("td");
    const sttNumTdEl = document.createElement("td");
    const productNmTdEl = document.createElement("td");
    const numPackTdEl = document.createElement("td");
    numPackTdEl.classList.add("num-figure");
    const numPiecesTdEl = document.createElement("td");
    numPiecesTdEl.classList.add("num-figure");
    const totalUnitEl = document.createElement("td");
    totalUnitEl.classList.add("num-figure");

    srNumTdEl.innerText = index+1;
    qcNumTdEl.innerText = proDtl.qcNo;
    sttNumTdEl.innerText = proDtl.sttNo;
    productNmTdEl.innerText = proDtl.productName;
    numPackTdEl.innerText = proDtl.numPack;
    numPiecesTdEl.innerText = proDtl.numPieces;
    totalUnitEl.innerText = proDtl.numPack * proDtl.numPieces;

    dataRowEl.append(srNumTdEl, qcNumTdEl, sttNumTdEl, productNmTdEl, numPackTdEl, numPiecesTdEl, totalUnitEl);
});