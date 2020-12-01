function extractFile(text) {
    let typeStratIndex = text.lastIndexOf('.');
    let nameStartIndex = text.lastIndexOf("\\");
    let type = text.substring(typeStratIndex + 1);
    let name = text.substring(nameStartIndex + 1, typeStratIndex)

    console.log(`File name: ${name}`);
    console.log(`File extension: ${type}`);

}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.pop.cs')