function listProcessor(arrOfCommnds){
    let string = []
    let methods = {
        "add": (s) => string.push(s),
        "remove": (s) => string = string.filter(x => x !== s),
        "print": () => console.log(string.join(",")),
    }

    proces();

    function proces(){
        arrOfCommnds.forEach(string => {
            let [method, str] = string.split(" ");
            methods[method](str);
        });
    }

}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);