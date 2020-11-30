function combinations(inputData){
    let index = 0;
    let curNum = Number(inputData[index++]);
    let combinations = 0;

    for(let x1 = 0 ; x1 <= curNum; x1++){
        for(let x2 = 0; x2 <= curNum; x2++){
            for(let x3 = 0; x3 <= curNum; x3++){
                if(x1 + x2 + x3 == curNum){
                    combinations++
                }
            }
        }
    }

    console.log(combinations);
    
}

combinations(["20"])