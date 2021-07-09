// in this we will start java script from scratch 
//first we will discuss data types in java script 
//number, string , object,null , undefined 
console.log(typeof 45.0);
console.log(typeof [1,2,3,4,5,6,7,8,9]);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof "Pratham")
console.log(typeof True)
// variable doesnot have any type, the type of value assigned to variable becomes the type of it 
// for example 
var x = "hello";
console.log(typeof x)// here type will be string
x = 30// here type will be number 
// now we will brief coercion 
// converting one data type into other is called coercion
//suppose we have variable string we want to convert into number:
var y = "10";
var z = 20;
console.log(typeof (y))// this will give return number
// if we use '+' on two varaible strings it will conacatinated 
// methods to convert string  to number 
// parseint,unary, using number
//use of parseInt
console.log(parseInt(y)+z)
// use of unary
console.log(typeof +y)
// now we have types of scopes 
// global scope 
// lexical scope 
// block scope
//1)global scope any variable declared in global scope can be accessed any 
// where in the whole code

const arr = [1,2,3,4,5,6,7,7,8,9]
var p = 6;
var sum = 0;
function fun() {
    {
        // block scope: 'let'  declared in this scope cannot be accessed
        // outside this block similarly 'var' declared in this scope cannot
        // be accessed outside 
        let p = 3;
        p = p+3;
        console.log(p)
    }
    //var p  = 8;
    //sum = sum+p;
    //console.log(sum)

}
fun();
function fn(){
    {
        
        
    }
    console.log(p);
}
fn();
// truthy and falsy value 
// 0,undefined,NaN values are falsy values in java script
// 0 is falsy
//
// lets check now 
const k = -1;
console.log(Boolean(p));
console.log(Boolean(k));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
////
console.log(p===k);
console.log(p==k);
// for Each(function)
// for of 
// for in 
// for loop
// if else statements
var s = 4;
if(s>=4){
    console.log("number is greater than 4")
}
else{
    console.log("number is less than 4")
}
if (10){
    console.log("false")
}
else{
    console.log("True")
}
// how to use for loop in java script
const m = [1,2,3,4,5,56,6,7,8,9,9];
var sum = 0;
for (let i = 0; i<length.arr; i++){
    var sum = 0;
    sum = sum + arr[i];
    console.log(sum)
    console.log(arr[i],i)
}
console.log(sum)
const l = [2,3,4,5,6,7,7,8]
console.log(pop(l))







