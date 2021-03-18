function startinsertionSort () {
    resetCounters();
    updateAlgorithmInfo("insertionSort");
    disableButtons();
    insertionSort();
    arrayFinisher();
    enableButtons();
    c_delay = 0;
    
}

function insertionSort () {
    var i = 0;
    delayTime = .1;
    for(i = 1; i < divs.length; i++) {

        div_update(divs[i], div_sizes[i], "yellow"); //color
        let currentItem = div_sizes[i];
        var j = i-1;

        for(j = i-1; j>=0; j--) {
            div_update(divs[j], div_sizes[j], "yellow");
            comparisonCount++;
            comparisonCountUpdate(comparisonCount);
            if(currentItem < div_sizes[j]) {
                div_update(divs[j], div_sizes[i], "red"); //color
                div_update(divs[j+1], div_sizes[j+1], "red") //color


                div_sizes[j+1] = div_sizes[j]; //swap
                //updating swap count
                arraySwapCount++;
                arraySwapCountUpdate(arraySwapCount);


                div_update(divs[j], div_sizes[j], "red"); //size
                div_update(divs[j+1], div_sizes[j+1], "red") //size

                div_update(divs[i],div_sizes[i],"blue");//Color update

            } else{
                break;
            }
        }
        div_sizes[j+1] = currentItem;
        
        //updating swap count
        arraySwapCount++;
        arraySwapCountUpdate(arraySwapCount);
        for(let k = 0; k < i; k++) {
            div_update(divs[k], div_sizes[k], "green");
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"green");//Color update


}