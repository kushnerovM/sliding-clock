"use strict";
//selectors
const clockContainer = document.querySelector(".clock-container");
const sizes = [2, 9, 5, 9, 5, 9];
const unitSize = 28;
//event listeners
//funtions
//calculating shift value via translateY css property
function currentShift(column) {
    var _a;
    const transformValue = column.style.transform;
    return Number((_a = transformValue.match(/[0-9]/g)) === null || _a === void 0 ? void 0 : _a.join(""));
}
function slide(column) {
    column.style.transform = `translateY(-${currentShift(column) + unitSize}px)`;
    console.log(column.style.transform);
}
//executable code
clockContainer.style.fontSize = `${unitSize}px`;
//clock columns generation
for (let i = 0; i < sizes.length; i++) {
    const digitColumn = document.createElement("div");
    digitColumn.classList.add("digit-column");
    digitColumn.style.width = `${unitSize}px`;
    for (let j = 0; j <= sizes[i]; j++) {
        const digit = document.createElement("div");
        digit.classList.add("digit");
        digit.innerText = String(j);
        digit.style.width = `${unitSize}px`;
        digit.style.height = `${unitSize}px`;
        digitColumn.appendChild(digit);
    }
    //colon generation
    if (i % 2 == 0 && i > 0) {
        const colon = document.createElement("div");
        colon.innerText = ":";
        clockContainer.appendChild(colon);
    }
    clockContainer.appendChild(digitColumn);
}
const clockArray = Array.from(document.querySelectorAll(".digit-column"));
const currentTimeArray = new Date().toLocaleTimeString().split(":").join("").split("").map(n => Number(n));
clockArray.forEach((elem, i) => {
    elem.style.transform = `translateY(-${currentTimeArray[i] * unitSize}px)`;
});
console.log(new Date().toLocaleTimeString());
setInterval(() => {
    console.log(currentShift(clockArray[clockArray.length - 1]) / unitSize);
    if (currentShift(clockArray[clockArray.length - 1]) / unitSize != new Date().getSeconds() % 10) {
        let currentColumn = clockArray.length - 1;
        while (true) {
            if (currentShift(clockArray[currentColumn]) / unitSize < clockArray[currentColumn].querySelectorAll(".digit").length - 1) {
                slide(clockArray[currentColumn]);
                break;
            }
            else {
                clockArray[currentColumn].style.transform = `translateY(0px)`;
                currentColumn--;
            }
        }
    }
}, 1000);
