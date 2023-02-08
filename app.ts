//selectors
const clockContainer: HTMLElement = document.querySelector(".clock-container")!;
const sizes : number[] = [2,9,5,9,5,9];

//event listeners

//funtions

//executable code
for(let i=0;i<sizes.length;i++){
    const digitColumn:HTMLElement=document.createElement("div");
    digitColumn.classList.add("digit-column");
    for(let j=0;j<=sizes[i];j++){
        const digit:HTMLElement=document.createElement("div");
        digit.classList.add("digit");
        digit.innerText=String(j);
        digitColumn.appendChild(digit);
    }
    if(i%2==0&&i>0){
        const colon: HTMLElement = document.createElement("div");
        colon.innerText = ":";
        clockContainer.appendChild(colon);
    }
    clockContainer.appendChild(digitColumn);
}