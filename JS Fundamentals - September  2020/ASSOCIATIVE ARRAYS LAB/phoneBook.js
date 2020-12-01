function phoneBook(input) {
    let phoneContacts = {};

    while (input.length > 0) {
        let [name, phone] = input.shift().split(" ");
        phoneContacts[name] = phone;
    }

    for (const key in phoneContacts) {
        console.log(`${key} -> ${phoneContacts[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)