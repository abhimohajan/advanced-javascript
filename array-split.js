const nums = [1,2,3,4,5,6,7,8];

// const part = nums.slice(2, 5);
const removed = nums.splice(2, 5, 77, 55);
// console.log(nums);
// console.log(removed);

const joint = nums.join(",");
console.log(joint);