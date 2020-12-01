function songsTwo(input) {
    let totalSongs = input.shift();
    let inputType = input.pop();
    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    function AddSongsInObj(arr) {
        for (let i = 0; i < totalSongs; i++) {
            let songData = arr.shift().split('_');
            let typeSong = songData.shift();
            let nameSong = songData.splice(0, songData.length - 1).join(' ');
            let timeSong = songData.shift();
            songs.push(new Song(typeSong, nameSong, timeSong));
        }
    }

    function printSong(arr, type) {
        for (let i = 0; i < arr.length; i++) {
            if (type == 'all') {
                console.log(arr[i].name);
            } else if (arr[i].type == type) {
                console.log(arr[i].name);
            }
        }
    }

    AddSongsInObj(input);
    printSong(songs, inputType);

}

songsTwo([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']

);