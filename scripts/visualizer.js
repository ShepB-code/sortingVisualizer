//var delayTime=10000/(Math.floor(divs.length/10)*20);        //Decrease numerator to increase speed.

//var delayTime = 1;
var c_delay = 0;

function div_update(myElement,height,color) {
    setTimeout(function(){
        myElement.style = "height:" + height + "px; background-color:" + color + ";";
    },c_delay+=delayTime);
}

function comparisonCountUpdate(currentCount) {
    setTimeout(function(){
        document.getElementById("counter").textContent = "Comparison Count = " + currentCount;
    },c_delay+=delayTime);
}
