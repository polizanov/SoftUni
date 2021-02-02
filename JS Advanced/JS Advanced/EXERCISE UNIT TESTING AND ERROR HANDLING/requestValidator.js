function requestValidator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /\*|^[A-Za-z.0-9]+$/g;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let messagePattern = /^[^<>\\&'"]*$/g;

    if (!obj.hasOwnProperty("method") || !validMethods.includes(obj['method'])) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.hasOwnProperty("uri") || !obj["uri"].match(uriPattern)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!obj.hasOwnProperty("version") || !validVersions.includes(obj["version"])) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!obj.hasOwnProperty("message") || !obj["message"].match(messagePattern)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }


    return obj
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));