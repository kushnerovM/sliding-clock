//selectors
var clockContainer = document.querySelector(".clock-container");
var sizes = [2, 9, 5, 9, 5, 9];
var unitSize = 28;
//event listeners
//funtions
function currentShift(column) {
    var transformValue = column.style.transform;
    return Number(transformValue.match(/[0-9]/g));
}
function slide(column) {
    column.style.transform = "".concat(currentShift(column) + 28, "px");
}
//executable code
clockContainer.style.fontSize = "".concat(unitSize, "px");
//clock columns generation
for (var i = 0; i < sizes.length; i++) {
    var digitColumn = document.createElement("div");
    digitColumn.classList.add("digit-column");
    digitColumn.style.width = "".concat(unitSize, "px");
    for (var j = 0; j <= sizes[i]; j++) {
        var digit = document.createElement("div");
        digit.classList.add("digit");
        digit.innerText = String(j);
        digit.style.width = "".concat(unitSize, "px");
        digit.style.height = "".concat(unitSize, "px");
        digitColumn.appendChild(digit);
    }
    //colon generation
    if (i % 2 == 0 && i > 0) {
        var colon = document.createElement("div");
        colon.innerText = ":";
        clockContainer.appendChild(colon);
    }
    clockContainer.appendChild(digitColumn);
}
