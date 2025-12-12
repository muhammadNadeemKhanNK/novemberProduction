const productionCsv = async (fileCsvData) => {
    const req = await fetch(fileCsvData);
    const res = (await req.text()).split("\n");

    let productionArray = new Array();
    
    res.forEach(element => {
        const eachRow = element.split(",");
        productionArray.push(
            {
                qcNo : eachRow[0].trim(),
                sttNo : eachRow[1].trim(),
                productName : eachRow[2].trim(),
                numPack : eachRow[3].trim(),
                numPieces : eachRow[4].trim()
            }
        );        
        // console.log(productionArray);
    });
    console.log(productionArray);
    localStorage.setItem("productionDetails", JSON.stringify(productionArray));
};

productionCsv("finish11-2.csv");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// tasks.push("Finish project");
// localStorage.setItem("tasks", JSON.stringify(tasks));
// console.log("Tasks:", JSON.parse(localStorage.getItem("tasks")));


// const arrInput = [];
// arrInput.push({
//         pDate : tdDate.innerText,
//         productNm : tdProductName.innerText,
//         pPack : tdPacked.innerText,
//         pPieces : tdPacked.innerText,
//         totalP : tdTotalCalc.innerText,
//         produce : tdProduced.innerText,
//     });

// function addTask(task) {
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.push(task);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function getTasks() {
//   return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// addTask("Buy groceries");
// console.log("Current tasks:", getTasks());