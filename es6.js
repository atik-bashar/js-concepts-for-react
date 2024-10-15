const numbers = [23,35,1,56]

const students = {
    name: 'sakib',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

// template string

const about = ` My name is ${students.name} age of ${students.age} has number ${numbers[2]} also liked movies${students.movies[0]}`;
console.log(about)



// arrow function 

const getFiftyFive = () => 56;
const add = num => num + 65;
const isEven = x => x%2 == 0;
const add1 = (x,y,z) => x + y +z;
const doMath = (num1, num2) =>{

    const sum = num1 + num2
    return sum
}


// spread operator

const newNumber = [...numbers];

numbers.push(99);
numbers.push(99);
numbers.push(99);


//create a new array from an older and add an element

const currentNumber = [...numbers, 55];


console.log(numbers)
console.log(newNumber)
console.log(currentNumber)
