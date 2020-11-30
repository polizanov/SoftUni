function evenPow(n){
    n = Number(n);

    for(i = 0; i <= n; i++){
        if(i % 2 == 0){
            console.log(Math.pow(2,i));
        }
    }
    
}


evenPow('7')