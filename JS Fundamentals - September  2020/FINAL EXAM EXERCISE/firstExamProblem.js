function problem(input) {
    let stringForEdit = input.shift();

    let command = input.shift();

    while (command !== 'Done') {
        let curCommand = command.split(" ");

        switch (curCommand[0]) {
            case 'Change':
                stringForEdit = changeCase(stringForEdit, curCommand);
                break;
            case 'Includes':
                stringForEdit = includesCase(stringForEdit, curCommand);
                break;
            case 'End' : 
                stringForEdit = endCase(stringForEdit, curCommand);
                break;
            case 'Uppercase' :
                stringForEdit = upperCase(stringForEdit);
                break;
            case 'FindIndex' :
                stringForEdit = findIndexCase(stringForEdit, curCommand);
                break;
            case 'Cut' :
                stringForEdit = cutCase(stringForEdit, curCommand);
                break;
        }

        command = input.shift();
    }

    function changeCase(string, arr) {
        let [char, replacement] = arr.slice(1);

        while (string.includes(char)) {
            string = string.replace(char, replacement);
        }

        console.log(string);
        return string;
    }

    function includesCase(string, arr) {
        let surchedString = arr[1];

        if (string.includes(surchedString)) {
            console.log('True');
            return string;
        }

        console.log('False');
        return string;
    }

    function endCase(string, arr){
        let otherString = arr[1];
        
        if(string.endsWith(otherString)){
            console.log('True');
            return string;
        } 
        
        console.log('False');
        return string;
    }

    function upperCase(string){
        string = string.toUpperCase();
        console.log(string);
        return string;
    }

    function findIndexCase(string, arr){
        let char = arr[1];

        let index = string.indexOf(char);
        console.log(index);
        return string;
    }

    function cutCase(string, arr){
        let [startIndex, length] = arr.slice(1);

        string = string.substr(startIndex, length);
        console.log(string);
        return string;
    }

}