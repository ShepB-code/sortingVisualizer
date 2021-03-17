
function startmergeSort() {
   // delayTime = 2;
    mergeSort(div_sizes, 0, div_sizes.length - 1);
    arrayFinisher();
    c_delay = 0;
    
}

function mergeSort(array, lowIndex, topIndex) {
    
    
    if(lowIndex < topIndex) {
        let middleIndex = Math.floor((topIndex+lowIndex) / 2);
        mergeSort(array, Number(lowIndex), Number(middleIndex));
        mergeSort(array, Number(middleIndex + 1), Number(topIndex));
        doMerge(array, Number(lowIndex), Number(middleIndex), Number(topIndex));
    }

}


function doMerge (array, lowIndex, middleIndex, topIndex) {
    
    let tmpArray = [];

    for(let i = 0; i < array.length; i++){
        tmpArray[i] = array[i];
    }

    var lowPointer = lowIndex;
    var highPointer = middleIndex + 1;
    var correctLoc = lowIndex;
    
    while (lowPointer <= middleIndex && highPointer <= topIndex){
        div_update(divs[lowIndex], div_sizes[lowIndex], "red"); //color update
        div_update(divs[topIndex], div_sizes[topIndex], "red");
        comparisonCount++;
        comparisonCountUpdate(comparisonCount);
        if(tmpArray[lowPointer] <= tmpArray[highPointer]) {
            //console.log("Changing " +array[correctLoc] + "to " + tmpArray[lowPointer]);

            array[correctLoc] = tmpArray[lowPointer];
            
            //updating swap count
            arraySwapCount++;
            arraySwapCountUpdate(arraySwapCount);

            div_update(divs[correctLoc], div_sizes[correctLoc], "green");//update height

            correctLoc++;
            lowPointer++;
        } else {
            //console.log("Changing " +array[correctLoc] + "to " + tmpArray[highPointer]);
            array[correctLoc] = tmpArray[highPointer];

            //updating swap count
            arraySwapCount++;
            arraySwapCountUpdate(arraySwapCount);

            div_update(divs[correctLoc], div_sizes[correctLoc], "green");//update height
            correctLoc++;
            highPointer++;
         }
        //[3, 2, 3, 5] -> [3, 2] and [3, 5] [2, 3] and [3, 5]
    }
    while (lowPointer <= middleIndex){
        console.log("Changing " +array[correctLoc] + "to " + tmpArray[lowPointer]);
        array[correctLoc] = tmpArray[lowPointer];
        
        //updating swap count
        arraySwapCount++;
        arraySwapCountUpdate(arraySwapCount);

        div_update(divs[correctLoc], div_sizes[correctLoc], "green"); //update height

        correctLoc++;
        lowPointer++;
     }
     div_update(divs[lowIndex], div_sizes[lowIndex], "green"); //update height

     div_update(divs[topIndex], div_sizes[topIndex], "green"); //update height
     

}