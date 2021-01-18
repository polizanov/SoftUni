const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


console.log(myCar)

myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};




function createAssemblyLine() {
    let obj = {
        "hasClima": (car) => {
            car["temp"] = 21;
            car["tempSettings"] = 21;
            car["adjustTemp"] = () => {
                if (car["temp"] < car["tempSettings"]) {
                    car["temp"] = ++car["temp"]
                } else if (car["temp"] > car["tempSettings"]) {
                    car["temp"] = --car["temp"];
                }
            }
        },
        "hasAudio": (car) => {
            car["currentTrack"] = {
                "name": null,
                "artist": null,
            },
                car["nowPlaying"] = () => {
                    if (car["currentTrack"].name !== null && car["currentTrack"].artist !== null) {
                        console.log(`Now playing '${car["currentTrack"].name}' by ${car["currentTrack"].artist}`);
                    }
                }
        },
        "hasParktronic": (car) => {
            car["checkDistance"] = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        }

    }

    return obj;

}


