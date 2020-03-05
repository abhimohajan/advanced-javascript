function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
    
}
for(let i = 0; i < add.length; i++){
    const element = add[i];
    const result= element + arguments;
}
const result = add(3, 5, 2, 7);
console.log(result);