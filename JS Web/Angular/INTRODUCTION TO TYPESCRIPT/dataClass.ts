class Requestt {
    private responce: string;
    private fulfilled: boolean;
    constructor(public method: string, public uri: string, public version: string, public message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.responce = "undefined";
        this.fulfilled = false;
    }
}

let myData = new Requestt('GET', 'http://google.com', 'HTTP/1.1', "");
console.log(myData)