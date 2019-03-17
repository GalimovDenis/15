let container = document.getElementById("fifteens");

window.onload = function () {
    for (let i = 0; i < 16; i++) {
        let dice = document.createElement("div");
        dice.id = "i"+i;
        dice.classList.add("x"+i%4,"y"+(i/4|0));
        dice.setAttribute("x", i%4);
        dice.setAttribute("y",i/4|0);
        dice.innerText = i;
        container.appendChild(dice);
        dice.addEventListener("click", move);
    }
    shufle();

}

function shufle(){
    Math.random()
}

function move(){
    let i0 = document.getElementById("i0");
    let x0 = +i0.getAttribute("x");
    let y0 = +i0.getAttribute("y");
    let x1 = +this.getAttribute("x");
    let y1 = +this.getAttribute("y");
    let incX = 0;
    let incY = 0;
    let distance;

    if(x1==x0){
        incY = 1;
        distance = y1 - y0;
    }
    if(y1==y0){
        incX = 1;
        distance = x1 - x0;
    }

    if(Math.abs(distance)<2){
        changePosition(i0,this);
    }else{
        let sign = Math.abs(distance)/distance;                     // 1 or -1
        for (let i = 1; i<=Math.abs(distance); i++){
            let nextElement = document.getElementsByClassName("x"+(x0+sign*incX*i)+" "+"y"+(y0+sign*incY*i))[0];
            changePosition(i0, nextElement);
        }

    }
}

function changePosition(el1, el2){
    let temp = el1.classList.value;
    el1.classList.value = el2.classList.value;
    el2.classList.value = temp;
    temp = el1.getAttribute("x");
    el1.setAttribute("x", el2.getAttribute("x"));
    el2.setAttribute("x",temp);
    temp = el1.getAttribute("y");
    el1.setAttribute("y", el2.getAttribute("y"));
    el2.setAttribute("y",temp);
}