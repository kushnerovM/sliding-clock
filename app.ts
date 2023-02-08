//selectors
const clockContainer: HTMLElement = document.querySelector(".clock-container")!;
const sizes : number[] = [2,9,5,9,5,9];
const unitSize : number = 28;
//event listeners

//funtions
function currentShift (column: HTMLElement) : number {
    const transformValue : String = column.style.transform;
    return Number(transformValue.match(/[0-9]/g))
}
function slide(column: HTMLElement) : void {
    column.style.transform = `${currentShift(column)+unitSize}px`;
}

//executable code
clockContainer.style.fontSize =`${unitSize}px`;
//clock columns generation
for(let i=0;i<sizes.length;i++){
    const digitColumn:HTMLElement=document.createElement("div");
    digitColumn.classList.add("digit-column");
    digitColumn.style.width= `${unitSize}px`;
    for(let j=0;j<=sizes[i];j++){
        const digit:HTMLElement=document.createElement("div");
        digit.classList.add("digit");
        digit.innerText=String(j);
        digit.style.width= `${unitSize}px`;
        digit.style.height= `${unitSize}px`;
        digitColumn.appendChild(digit);
    }
//colon generation
    if(i%2==0&&i>0){
        const colon: HTMLElement = document.createElement("div");
        colon.innerText = ":";
        clockContainer.appendChild(colon);
    }
    clockContainer.appendChild(digitColumn);
}