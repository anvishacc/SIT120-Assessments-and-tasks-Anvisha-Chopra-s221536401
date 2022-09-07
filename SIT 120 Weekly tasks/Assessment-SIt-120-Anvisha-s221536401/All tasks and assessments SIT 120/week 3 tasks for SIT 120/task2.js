let fruits=['Banana','Orange','Apple',,'Mango'];
console.log(fruits);

//find method
console.log(fruits.find((fruit)=>fruit==='Apple'));
console.log(fruits.find((fruit)=>fruit==='Apple1'));

//findindex method
console.log(fruits.findindex((fruit)=>fruit==='Apple'));
console.log(firstindex=fruits.findindex((fruit)=>fruit==='Apple1'));

//push method
console.log(fruits.push('Kiwi'));
console.log(fruits);

//pop method
console.log(fruits.pop());
console.log(fruits);

//for sorting
let numbers= [3,2,4,5,6]
console.log(numbers.sort());

//slice method
console.log(fruits.slice[1,3]);
console.log(fruits.slice[1]);
console.log(fruits.slice[-1]);

//using foreach for iteration
fruits.forEach((fruit)=>console.log(fruit));