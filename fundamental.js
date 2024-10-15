//  1. variable declare
//  how to declare a variable using let and const

const fatherName = "Mohir";
let season = "rainy";
season = "Winter";

// 2. Condition
//  6 basic condition >, < , ===, !==, <= , >=
// multiple conditions : && ||


if(fatherName === "mohir" || season === "rainy"){

}else if(fatherName === "Mohir"){

}

else{

}


// 3. array declare
//  index
//  length, push


const numbers = [23,35,1,56]
numbers[0] = 56;


// 4. for loop


for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


// 5 function 

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const results =multiply(12, 5);
console.log(results);


//  6. object
// 3 ways to access property by name

const students = {
    name: 'sakib',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}


const myVariable = 'age';

console.log(students.age) // direct by property
console.log(students['age']) // access via property name string
console.log(students[myVariable]); //access via property name in a variable