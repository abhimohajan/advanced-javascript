// map

const numbers = [3, 6, 8, 9];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    
}console.log(output);

function square (element){
    return element * element;
}

numbers.map(function square (element, index, array){
   console.log(element, index, array);
});


const result = numbers.map(function square (element){
    return element * element;
    
 });
 console.log(result);

const square = element => element * element;
const square = x => x * x;
const result = numbers.map(x => x * x) ;

 console.log(result);

// filter 

const bigger = numbers.filter(x => x > 5);

// find 

const isThere = numbers.find(x => x >5);
console.log(isThere);

