function clock(){
    for(let hour = 0; hour < 24; hour++){
        for(let min = 0; min < 60; min++){
            console.log(`${hour}:${min}`);
        }
    }
}

clock()