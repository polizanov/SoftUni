function movies(input) {
    let allMovies = [];
    while (input.length > 0) {
        let curCommand = input.shift();

        if (curCommand.includes('addMovie')) {
            let movie = {};
            name = curCommand.split(" ").filter(x => x !== 'addMovie').join(" ");
            movie['name'] = name;
            allMovies.push(movie);
        } else if (curCommand.includes('directedBy')) {
            curCommand = curCommand.split(' directedBy ');
            [name, director] = curCommand
            allMovies.forEach(movie => {
                if (name == movie.name) {
                    movie['director'] = director;
                }
            })
        } else if (curCommand.includes(' onDate ')) {
            curCommand = curCommand.split(' onDate ');
            [name, date] = curCommand;
            allMovies.forEach(movie => {
                if (name == movie.name) {
                    movie['date'] = date;
                }
            })
        }
    }


    allMovies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)