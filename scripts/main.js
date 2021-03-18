const MAX = 700;
const MIN = 5;
var divs = [];
var div_sizes = [];
var animations = [];
var comparisonCount = 0;
var arraySwapCount = 0;


window.onreadystatechange = generateArray(300);

//Initializing Onclick attributes for each list item

document.getElementById("pickSelectionSort").onclick = () => {
    document.getElementById("sortButton").innerHTML = '<button id = "sortButton" type="button" class="btn btn-primary" style="background-color: rgb(62,122,130);" onclick="startselectionSort()">Visualize Selection Sort!</button>';
}
document.getElementById("pickInsertionSort").onclick = () => {
    document.getElementById("sortButton").innerHTML = '<button id = "sortButton" type="button" class="btn btn-primary" style="background-color: rgb(62,122,130);" onclick="startinsertionSort()">Visualize Insertion Sort!</button>'
}
document.getElementById("pickMergeSort").onclick = () => {
    document.getElementById("sortButton").innerHTML = '<button id = "sortButton" type="button" class="btn btn-primary" style="background-color: rgb(62,122,130);" onclick="startmergeSort()">Visualize Merge Sort!</button>'
}


//Generates a new array based on the size
function generateArray (arraySize) {
    comparisonCount = 0;
    arraySwapCount = 0;

    //updating Array Stats. 
    document.getElementById("arraySize").textContent = "Array Size = " + arraySize;
    document.getElementById("comparisonCounter").textContent = "Comparison Count = " + comparisonCount;
    document.getElementById("arraySwapCounter").textContent = "Array Swaps = " + arraySwapCount;

    
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
    delayTime=10000/(Math.floor(divs.length/10)*250);        //Decrease numerator to increase speed.

    console.log(document.getElementById("comparisonCounter").textContent)
}

//This function is called from the Create Array button that allows you to input size. MAX SIZE = 450
function updateArraySize() {
    arraySize = document.getElementById("arrayInputSize").value;
    if (arraySize > 450) {
        arraySize = 450;
    }
    generateArray(arraySize);
}

//colors the finished array purple
function arrayFinisher () {

    delayTime = 5;
    for(let i = 0; i < divs.length; i++) {
        div_update(divs[i], div_sizes[i], "purple");
    }
}


//Randomly changes each element's size 
function randomizeCurrent() {
    comparisonCount = 0;
    arraySwapCount = 0;
    document.getElementById("comparisonCounter").textContent = "Comparison Count = " + comparisonCount;
    document.getElementById("arraySwapCounter").textContent = "Array Swaps = " + arraySwapCount;

    for(let i = 0; i < divs.length; i++) {
        let randomNum = generateRandom();
        div_sizes[i] = randomNum;

        divs[i].style = "height:" +div_sizes[i]+ "px;"
     }
}
function generateRandom () {
    return Math.floor((MAX-MIN)*Math.random() + MIN);

}

function disableButtons () {
    var buttons = document.getElementsByTagName("button");

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function resetCounters () {
    comparisonCount = 0;
    arraySwapCount = 0;
    document.getElementById("comparisonCounter").textContent = "Comparison Count = " + comparisonCount;
    document.getElementById("arraySwapCounter").textContent = "Array Swaps = " + arraySwapCount;
}
function updateAlgorithmInfo(algorithmName) {
    if(algorithmName == "mergeSort") {
        document.getElementById("algorithmType").innerHTML = "Algorithm Type: Comparison Sort";
        document.getElementById("algorithmBigO").innerHTML = "Algorithm Big(O): O(nlog(n))";
    }
    else if(algorithmName == "selectionSort") {
        document.getElementById("algorithmType").innerHTML = "Algorithm Type: Comparison Sort";
        document.getElementById("algorithmBigO").innerHTML = "Algorithm Big(O): O(n^2)";
    }
    else if(algorithmName == "insertionSort") {
        document.getElementById("algorithmType").innerHTML = "Algorithm Type: Comparison Sort";
        document.getElementById("algorithmBigO").innerHTML = "Algorithm Big(O): O(n^2)";
    }
}

//for debugging purposes to make sure the sorting algorithm works
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


