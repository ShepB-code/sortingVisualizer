var delayTime=10000/(Math.floor(divs.length/10)*250);        //Decrease numerator to increase speed.

//var delayTime = 1;
var c_delay = 0;

function div_update(myElement,height,color) {
    setTimeout(function(){
        myElement.style = "height:" + height + "px; background-color:" + color + ";";
        
    },c_delay+=delayTime);
}

function enableButtons() {
    setTimeout(function(){
        var buttons = document.getElementsByTagName("button");

        for(let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    },c_delay+=delayTime);
}

function comparisonCountUpdate(currentCount) {
    setTimeout(function(){
        document.getElementById("comparisonCounter").textContent = "Comparison Count = " + currentCount;
    },c_delay+=delayTime);
}

function arraySwapCountUpdate(currentCount) {
    setTimeout(function(){
        document.getElementById("arraySwapCounter").textContent = "Array Swaps = " + currentCount;
    },c_delay+=delayTime);
}
  
