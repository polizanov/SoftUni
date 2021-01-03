function tickets(arr, sortParametar) {
    let data = [];
    let sortedData = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    for (const line of arr) {
        let [destination, price, status] = line.split("|");
        price = Number(price);
        data.push(new Ticket(destination, price, status));
    }

    switch(sortParametar){
        case "destination":
            sortedData = data.sort((a, b) => {
                return a.destination.localeCompare(b.destination)
            })
            break;
        case 'price':
            sortedData = data.sort((a, b) => {
                return a.price - b.price
            })
            break;
        case 'status':
            sortedData = data.sort((a, b) => {
                return a.status.localeCompare(b.status)
            })
            break;
    }

    return sortedData;
}

tickets(
    ['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'


)