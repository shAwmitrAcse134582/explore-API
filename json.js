
const user = {
    id: 1,
    name: 'Shawmitra',
    occupation: 'student'
};

//* javascript object Notation(JSON)
const stringified = JSON.stringify(user);
// 

const shop = {
    owner: 'Shawmitra',
    address: {
        street: 'police Line',
        city: 'Barishal',
        country: 'Bangladesh'
    },
    products: ['book', 'pen', 'khata', 'pencil'],
    income: 45000,
    isOpen: true,
    isNew: false,
}


console.log(shop);

//*convert an object file to json string
const shopjson = JSON.stringify(shop);
console.log(shopjson);
//*convert an json string file to normal object
const shopObj = JSON.parse(shopjson);
console.log(shopObj); 