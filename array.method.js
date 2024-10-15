const products =[
    {name: 'laptop', price: 32000, brand:'lenovo', color: 'silver'},
    {name: 'watch', price: 2000, brand:'casio', color: 'black'},
    {name: 'phone', price: 52000, brand:'iphone', color: 'silver'},
    {name: 'sunglass', price: 300, brand:'gorila', color: 'blue'},
    {name: 'camera', price: 12000, brand:'canon', color: 'silver'}
];

// map 

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price)
// console.log(prices);

// forEach

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))


products.forEach(product =>{

})



//3. filter 

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap)


const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName)

// find 

const special = products.find(p => p.name.includes('n'));
console.log(special)