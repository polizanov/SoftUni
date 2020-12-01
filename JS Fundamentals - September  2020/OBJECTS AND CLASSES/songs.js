function songs(inputArray) {
    let input = inputArray.slice();
    let numberOfSongs = Number(input[0]);
    let commandType = input[input.length - 1];
    let songsData = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 1; i < input.length - 1; i++) {
        let songInfo = input[i].replace(/_/g, " ");
        songInfo = songInfo.split(' ');
        let typeList = songInfo[0];
        let nameData = songInfo.slice(1, songInfo.length - 1);
        let name = getSongName(nameData)
        let time = songInfo[songInfo.length - 1];
        songsData.push(new Song(typeList, name, time));
    }

    function getSongName(array) {
        let output = '';
        for (let i = 0; i < array.length; i++) {
            output += array[i] + ' ';
        }
        return output;
    }

    function printNamedSong(array, command) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].typeList == command) {
                console.log(array[i].name);
            } else if (command == 'all') {
                console.log(array[i].name);
            }
        }
    }
    console.log(songsData)
    console.log(songsData.length)
    printNamedSong(songsData, commandType);
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']



)