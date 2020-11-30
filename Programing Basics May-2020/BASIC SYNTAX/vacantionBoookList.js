function bookList(numPages, pages, numDays) {
    numPages = Number(numPages);
    pages = Number(pages);
    numDays = Number(numDays);

    let totalReadingTime = numPages / pages;
    let allTime = totalReadingTime / numDays;

    console.log(allTime);

}

bookList("212",
    "20",
    "2"
)