const MAX = 350;
const MIN = 5;
var delayTime = 1;
var divs = [];
var div_sizes = [];
var animations = [];
var comparisonCount = 0;


window.onreadystatechange = generateArray(300);
function generateArray (arraySize) {
    comparisonCount = 0;
    document.getElementById("counter").textContent = "Comparison Count = " + comparisonCount;
    divs = [];
    div_sizes = [];
    //let arraySize = document.querySelector("#arraySize").value;
    let container = document.getElementById("arrayBody");
    container.innerHTML = "";
    console.log(arraySize);
    for(let i = 0; i < arraySize; i++) {
        randomNum = generateRandom()
        div_sizes[i] = randomNum;
        divs[i] = document.createElement("div");
        divs[i].className = "arrayItem"
        divs[i].style = "height: " + randomNum + "px;"
        container.appendChild(divs[i]);
    }
    delayTime=10000/(Math.floor(divs.length/10)*250);   
    console.log(document.getElementById("counter").textContent)
}

function updateArraySize() {
    arraySize = document.getElementById("arraySize").value;
    generateArray(arraySize);
}

//colors the finished array purple
function arrayFinisher () {
    for(let i = 0; i < divs.length; i++) {
        div_update(divs[i], div_sizes[i], "purple");
    }
}

function randomizeCurrent() {
    comparisonCount = 0;
    document.getElementById("counter").textContent = "Comparison Count = " + comparisonCount;
    for(let i = 0; i < divs.length; i++) {
        let randomNum = generateRandom();
        div_sizes[i] = randomNum;

        divs[i].style = "height:" +div_sizes[i]+ "px;"
     }
}
function generateRandom () {
    return Math.floor((MAX-MIN)*Math.random() + MIN);

}

function confirmSort () {
    console.log(div_sizes);
    for(let i = 1; i < div_sizes.length; i++) {
        let low = div_sizes[i-1];
        console.log(low);
        if(div_sizes[i] < div_sizes[i-1]) {
            console.log(div_sizes[i]);
            return false;
        }
    }
    return true;
}


