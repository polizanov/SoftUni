function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName("button")[0];
    let decodeButton = document.getElementsByTagName("button")[1];
    let firstTextAreaElement = document.getElementsByTagName("textarea")[0];
    let secondTextAreaElement = document.getElementsByTagName("textarea")[1]

    encodeButton.addEventListener("click", () => {
        let message = firstTextAreaElement.value;
        firstTextAreaElement.value = ""
        let encodedMessage = encodeMessage(message);
        secondTextAreaElement.value = encodedMessage;
    })

    decodeButton.addEventListener("click", () => {
        let encodedMessage = secondTextAreaElement.value;
        let message = decodeMessage(encodedMessage);
        secondTextAreaElement.value = message;
        
    })

    function encodeMessage(message){
        let encooded = "";

        for (let  char of message) {
            let code = char.charCodeAt(0);
            code++;
            let newChar = String.fromCharCode(code);

            encooded += newChar;
        }
         
        return encooded;
    }

    function decodeMessage(encodedMessage){
        let decodedMessage = "";

        for (let char of encodedMessage) {
            let code = char.charCodeAt(0);
            code--;
            let newChar = String.fromCharCode(code);

            decodedMessage += newChar;
        }

        return decodedMessage;
    }

}