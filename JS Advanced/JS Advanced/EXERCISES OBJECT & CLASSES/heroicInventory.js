function heroinInvenroty(input) {
    let heroData = [];

    for (const line of input) {
        let [name, level, items] = line.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        heroData.push({ name, level, items });
    }

    console.log(JSON.stringify(heroData));
}

heroinInvenroty(
    ['Jake / 1000 / Gauss, HolidayGrenade']
);