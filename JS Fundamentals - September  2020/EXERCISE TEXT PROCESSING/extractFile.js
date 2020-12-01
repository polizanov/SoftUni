function extractFile(input) {
    let fileIndex = Number(input.lastIndexOf('\\'));
    let fileData = input.substring(fileIndex + 1)
    let fileEndIndex = Number(fileData.lastIndexOf('.'));
    let fileValue = fileData.substring(fileEndIndex + 1);
    let fileName = fileData.substring(0, fileEndIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileValue}`);


}

extractFile('C:\\Internal\\training-internal\\Template.pptx.dock');