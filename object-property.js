const students = [
    {Id: 21, name:"omar sunny"},
    {Id: 31, name:"jasim"},
    {Id: 41, name:"manna"},
    {Id: 51, name:"riyej"},
    {Id: 71, name:"kabir"},
];
// const result = [];
// for (let i = 0; i < students.length; i++){
//     const element = students[i];
//     const result = element;
//     console.log(result);
// }

const names = students.map(x => x.name);
const ids = students.map(x => x.Id);
const bigger = students.filter(x => x.Id > 40);
const bigger2 = students.filter(x => x.Id < 40);
const finds = students.find(x => x.Id > 41);
console.log(finds);


