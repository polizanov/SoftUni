function gramophone(brand, album, songFromAlbum) {
    let duration = (album.length * brand.length) * songFromAlbum.length / 2;

    let rotatePlate = duration / 2.5;


    console.log(`The plate was rotated ${Math.ceil(rotatePlate)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')