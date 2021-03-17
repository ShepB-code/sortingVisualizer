function startselectionSort () {
    selectionSort();
    arrayFinisher();
    c_delay = 0;
    
}

function selectionSort () {
    let i = 0;
    delayTime = .1;
    for(i = 0; i < divs.length-1; i++) {
        div_update(divs[i],div_sizes[i],"red");//Color update
        let min_index = i;
        for(let j = i+1; j < divs.length; j++) {
            div_update(divs[j],div_sizes[j],"yellow");//Color update
            if(div_sizes[j]<div_sizes[min_index]) {
                if(min_index!=i) {
                    div_update(divs[min_index],div_sizes[min_index],"blue");//Color update
                }
                min_index=j;
                div_update(divs[min_index],div_sizes[min_index],"red");//Color update
            } else {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
            comparisonCount++;
            comparisonCountUpdate(comparisonCount);
        }
        if(min_index!=i) {
            var temp=div_sizes[min_index];
            div_sizes[min_index]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[min_index],div_sizes[min_index],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[min_index],div_sizes[min_index],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update

    

}


