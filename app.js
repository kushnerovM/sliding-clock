//selectors
var clockContainer = document.querySelector(".clock-container");
var sizes = [2, 9, 5, 9, 5, 9];
//event listeners
//funtions
//executable code
for (var i = 0; i < sizes.length; i++) {
    var digitColumn = document.createElement("div");
    digitColumn.classList.add("digit-column");
    for (var j = 0; j <= sizes[i]; j++) {
        var digit = document.createElement("div");
        digit.classList.add("digit");
        digit.innerText = String(j);
        digitColumn.appendChild(digit);
    }
    if (i % 2 == 0 && i > 0) {
        var colon = document.createElement("div");
        colon.innerText = ":";
        clockContainer.appendChild(colon);
    }
    clockContainer.appendChild(digitColumn);
}
