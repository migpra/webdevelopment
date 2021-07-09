function is_array(input){
    console.log(Array.isArray(input));
}
is_array([1,2,34,,5,5,56])

function array_clone(input){
   const x = input.slice(0);
    return x;
}
 const y = array_clone([1,2,3,4,5]);
 console.log(y);
 // cloning is basically creating copy of the object and storing it somewhere
 // we can create clone of an array using for loop 
 // we have to initialise where to store the copy of that array
 const brr = [3,3,4,5,6]
 var vrr = []//it will be the copy of brr
 function a_clone(){
     for(var i = 0; i<brr.length;i++){
         vrr[i]=brr[i];


     }
     return vrr;
 }
 a_clone();
 const h = a_clone();
 console.log(h);


//  cloning using forof method

var cl = []
function clone(input){
    for(let item of input ){
        cl.push(item);
        }
    console.log(cl);
    }
clone([4,5,6,7,8,9]);
// java script function to get first element of array 
// passing a parameter 'n' will return first n elements of the array
function first(Array,n){
    let x = Array.slice(0,n);
    return x;

}
console.log(first([7,9,0,-2],-2));
// array to string
 const mycolor = ["red","green","white","black"];
 console.log(mycolor.join('+'));

 // most frequent item of an array without using object

var parr = ['b','n','d','j','b','k','l']



 var mf = 1;
 var m = 0;
 function mostfrequent(){
 for (let i = 0; i < parr.length;i++){
     for(let j  = i+1; j < parr.length; j++){
         if (parr[i] == parr[j]){
             m++}
    
         if (mf < m){
             mf = m - (parr.length)
             elements = parr[i]}
            
        


         }





     }





 }








