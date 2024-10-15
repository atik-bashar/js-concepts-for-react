// JSON stringfy , parse

const student = {
    name: 'sakib',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
};


const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


//keys, values

const keys = Object.keys(student);
const values = Object.values(student)

//  for 

const numbers = [ 1,2,3,5,7];
numbers.forEach(num => console.log(num));
numbers.map(num => num*2);

// for of on array like object
// loop on an object using for in

// add or remove of an array

const products =[
    {name: 'laptop', price: 32000, brand:'lenovo', color: 'silver'},
    {name: 'watch', price: 2000, brand:'casio', color: 'black'},
    {name: 'phone', price: 52000, brand:'iphone', color: 'silver'},
    {name: 'sunglass', price: 300, brand:'gorila', color: 'blue'},
    {name: 'camera', price: 12000, brand:'canon', color: 'silver'}
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};

// copy products array add then  newProduct

const newProducts = [...products, newProduct];
console.log(newProducts);


// create a new array without one specific item
//  remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');
