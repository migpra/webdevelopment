const arr = [1,2,3,4,5];
// using for loop to iterate over the array
// we have following kinds of loop in java script
// for in 
// for of 
// for each 
var sum = 0
for(let i = 0; i < length.arr;i++){
    console.log(i,arr[i]);
    sum = sum + arr[i];
}
console.log(sum)
console.log(arr)
// arrays data structures
// usage and index structure

//accessing Elements
//concat
//join
//slice
//index of
//last index of

// iterating over the list
//forEach 
//forof
//simpleforloop
//some
//every
//filter

// usage of concat
const u = [1,2,3,4,,5,5,6,7,7,87]
const y = [1,2,3,43,4,5,5,6,7]
console.log(u.concat(y));// it will return a new array
console.log(u.join(' '));// string conversion
console.log(y.slice(1,4));//slicing same as python, return new array
// value to index
console.log(u.Indexof(7));
console.log(u.lastIndexof(7));
// mutating a list in java script
//pop
//push
//splice
//unshift




// use of foreach() what is it, is it function?

// apply on object, majorly on list
u.forEach((item,index)=>{
    console.log(item,index);

})
// use of for of 
for(let item of y){// here item is in lexical scope
    console.log(item);

}
// for in use for objects majorly
//  use of some
console.log(u.some(i => i === 87));// boolean operation
// use of every 
console.log(k.every(p => p === 10));// booean again
//filter 
console.log(u.filter(o => o === 5));// returns new array
//map and reduce
// use of reduce
const reducefunction = u.reduce((sum,item)=>{
    sum 

})
// use of pop 
// remove the last elemment
// and changes the original array
console.log(u.pop(87));
console.log(u);
// use of push
// returns the new length of array
console.log(v.push(7));
console.log(v);//original array will be changed
// use of reverse
console.log(v.reverse());//changes the original array and returns the new array
console.log(v);//array will be changed now
// use of sort 
console.log(v.sort());// by passing arguments or parameters it will on 
// property we give to function
//for example
list = [4,5,6,7,8,9]
console.log(list.sort(c,d) => c-d);
console.log(list);











