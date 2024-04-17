import {ENO_numbers, ENO_operations, ENO_result, ENO_clear, ENO_display, ENO_deleteLast, ENO_DisplayResult} from './QuerySelector.js';

ENO_numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if(ENO_display.textContent === "0"){
            ENO_display.textContent = "";
        }
        ENO_display.textContent += number.textContent;
    });
});    
;
ENO_operations.forEach((op) => {
    op.addEventListener("click", () => {
        ENO_display.textContent += op.textContent;
    }) 
});

ENO_result.addEventListener("click", () => {
    let tabuada = "";
    
    let operationIndice = ENO_display.textContent.indexOf('+');
    if(operationIndice !== -1){
        let number = parseInt(ENO_display.textContent.slice(0, operationIndice));
        for(let i = 1; i <= 10; i++){
            tabuada += `${parseFloat(number)} + ${i} = ${number + i}<br>`;
            ENO_DisplayResult.innerHTML = tabuada;
        }
    }

    operationIndice = ENO_display.textContent.indexOf('-');
    if(operationIndice !== -1){
        let number = parseInt(ENO_display.textContent.slice(0, operationIndice));
        for(let i = 1; i <= 10; i++){
            tabuada += `${parseFloat(number)} - ${i} = ${number - i}<br>`;
            ENO_DisplayResult.innerHTML = tabuada;
        }
    }

    operationIndice = ENO_display.textContent.indexOf('*');
    if(operationIndice !== -1){
        let number = parseInt(ENO_display.textContent.slice(0, operationIndice));
        for(let i = 1; i <= 10; i++){
            tabuada += `${parseFloat(number)} * ${i} = ${number * i}<br>`;
            ENO_DisplayResult.innerHTML = tabuada;
        }
    }

    operationIndice = ENO_display.textContent.indexOf('/');
    if(operationIndice !== -1){
        let number = parseInt(ENO_display.textContent.slice(0, operationIndice));
        for(let i = 1; i <= 10; i++){
            tabuada += `${parseFloat(number)} / ${i} = ${number / i}<br>`;
            ENO_DisplayResult.innerHTML = tabuada;
        }
    }
});

ENO_clear.addEventListener("click", () => {
    if(ENO_display.textContent !== ""){
        ENO_display.textContent = "";
        ENO_DisplayResult.innerHTML = "0";
    }

});

ENO_deleteLast.addEventListener("click", () => {
    if(ENO_display.textContent !== ""){
        let clearOne = ENO_display.textContent.length;
        ENO_display.textContent = ENO_display.textContent.slice(0, clearOne - 1);
    }
});
        