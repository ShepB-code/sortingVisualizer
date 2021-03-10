
function startmergeSort() {
    // let array = [];
    // for(let i = 0; i < 100; i++) {
    //     array[i] = generateRandom();
    // }
    // console.log(array);
    delayTime = 2;

    mergeSort(div_sizes, 0, div_sizes.length - 1);
    console.log(div_sizes);
    console.log(confirmSort(div_sizes));


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
            div_update(divs[correctLoc], div_sizes[correctLoc], "green");//update height

            correctLoc++;
            lowPointer++;
        } else {
            //console.log("Changing " +array[correctLoc] + "to " + tmpArray[highPointer]);
            array[correctLoc] = tmpArray[highPointer];
            div_update(divs[correctLoc], div_sizes[correctLoc], "green");//update height
            correctLoc++;
            highPointer++;
         }
        //[3, 2, 3, 5] -> [3, 2] and [3, 5] [2, 3] and [3, 5]
    }
    while (lowPointer <= middleIndex){
        console.log("Changing " +array[correctLoc] + "to " + tmpArray[lowPointer]);
        array[correctLoc] = tmpArray[lowPointer];
        div_update(divs[correctLoc], div_sizes[correctLoc], "green"); //update height

        correctLoc++;
        lowPointer++;
     }
     div_update(divs[lowIndex], div_sizes[lowIndex], "green"); //update height

     div_update(divs[topIndex], div_sizes[topIndex], "green"); //update height
     

}


// function startmergeSort() {
//     mergeSort(0, div_sizes.length - 1);
//     console.log(confirmSort(div_sizes));
// }

// function mergeSort(lowIndex, topIndex) {
    
    
//     if(lowIndex < topIndex) {
//         let middleIndex = Math.floor((topIndex+lowIndex) / 2);
//         mergeSort(Number(lowIndex), Number(middleIndex));
//         mergeSort(Number(middleIndex + 1), Number(topIndex));
//         doMerge(Number(lowIndex), Number(middleIndex), Number(topIndex));
//     }
// }


// function doMerge (lowIndex, middleIndex, topIndex) {
    
//     let tmpArray = [];

//     for(let i = 0; i < div_sizes.length; i++){
//         tmpArray[i] = div_sizes[i];
//     }

//     let correctLoc = lowIndex;
//     let lowPointer = lowIndex;
//     let highPointer = middleIndex + 1;
//     while (lowPointer <= middleIndex && highPointer <= topIndex){
        
//         //div_update(divs[lowIndex], div_sizes[lowIndex], "red"); //color update
//         //div_update(divs[topIndex], div_sizes[topIndex], "red");
//         if(tmpArray[lowIndex] <= tmpArray[topIndex]) {
//             div_sizes[correctLoc] = tmpArray[lowPointer];
//             //div_update(divs[correctLoc], div_sizes[correctLoc], "green");//update height
//             correctLoc++;
//             lowPointer++;
//         } else {
//             div_sizes[correctLoc] = tmpArray[highPointer];
//             //div_update(divs[correctLoc], div_sizes[correctLoc], "green");//update height
//             correctLoc++;
//             highPointer++;
//          }
//         //[3, 2, 3, 5] -> [3, 2] and [3, 5] [2, 3] and [3, 5]
//     }
//     while (lowPointer <= middleIndex){
//         div_sizes[correctLoc] = tmpArray[lowPointer];
//         //div_update(divs[correctLoc], div_sizes[correctLoc], "green"); //update height
//         correctLoc++;
//         lowPointer++;
//      }
     
//   }
