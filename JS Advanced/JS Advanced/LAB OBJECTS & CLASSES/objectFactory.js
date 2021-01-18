const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];


function factory(library, orders) {
    let fulfilledOrders = [];

    orders.forEach(obj => {
        let name = obj.template.name;
        let partsArr = obj.parts;

        let printObj = { name }

        partsArr.forEach(e => {
            printObj[e] = library[e];
        })

        fulfilledOrders.push(printObj);
    })

    return fulfilledOrders;
}

const products = factory(library, orders);
console.log(products);
