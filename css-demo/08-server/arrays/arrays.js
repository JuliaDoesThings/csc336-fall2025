let arr = [true, false, "cat"];
console.log(arr);
arr.push("dog");
console.log(arr);
arr.pop();
console.log(arr);
let spliced = arr.splice(1, 1);
console.log(arr);
console.log(spliced);
arr.forEach(val => {
    console.log(val);
});

for (let val of arr) 
{
    console.log(val);
}