class Ticket {
    constructor(public destination: string, public price: number, public status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status
    }
}

function createTicketsArr(data: string[], sortCriteria: string) {
    let sorted:  { "destination": string, price: number, status: string }[];
    let obj: { "destination": string, price: number, status: string }[] = data.map(x => {
        let [destination, number, status] = x.split("|");
        let price: number = Number(Number(number).toFixed(2));
        return new Ticket(destination, price, status);
    })

    switch (sortCriteria) {
        case "destination":
            sorted = obj.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sorted = obj.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sorted = obj.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    console.log(sorted);
}


createTicketsArr(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'
)