//^ 1. Check Array Input Write a JavaScript function to check whether an `input` is an array or not.

/* function is_Array(input){
    if(Array.isArray(input)) return "true ,this input is array "
    else  return"false , this input is not array"

}
console.log(is_Array("guyoi"));
console.log(is_Array([1,3]));

 */

//&--------------------------------------------------------

//^ 2. Clone Array Write a JavaScript function to clone an array.

/* function array_Clone(input){
    return input.slice();
}

console.log(array_Clone([1, 2, [4, 0]]));
 */

//&--------------------------------------------------------

//^3. First Elements of Array Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

/* function test(arr , n=1){
    var result =[]
    for(var i=0 ;i< n ;i++){
        if(i+1 > arr.length) return result;
        result.push(arr[i]);
    }
    return result
}

console.log(test([1,2,3,6]));
 */

//? another soliution 
/* function first(arr , n=1){
    if(n<0) return [];
    return arr.slice(0,n);
}

console.log(first([1,2,3,4],-2)); */


//&-------------------------------------------------------

//^ 4. Last Elements of Array Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

/* function last (arr, n=1){

    let result =[];
    for(var i=arr.length-1  ; i>=0; i--){
        if(n>0){
            result.push(arr[i]);
            n--;  
        }
    }
    return result.reverse();
}
console.log(last([1,2,3],3)); */

//? another soliution 
/* function first(arr , n=1){
    return arr.slice(-n);
}

console.log(first([1,2,3,4],3)); */

//&-------------------------------------------------------------

//^ 5. Join Array Elements Write a simple JavaScript program to join all elements of the following array into a string.

/* myColor = ["Red", "Green", "White", "Black"];
 console.log(myColor.join());
 console.log(myColor.join("+")); */
 
//&--------------------------------------------------------------

//^ 6. Insert Dashes Between Evens Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

/* function dashesBetweenEvens(num){
    if (num === null || num === "" ||isNaN(num)) return "Enter a num"
    var result=[num[0]];
    for(var i=1;i<num.length;i++){
    if(num[i-1]%2===0 && num[i]%2===0){
        result.push("-",num[i]);
    }
    else{
        result.push(num[i]);
    }

    }
    return result.join("")

}

var num=window.prompt("Enter a Num")
console.log(dashesBetweenEvens(num)); */

//&--------------------------------------------------------------


//^ 7. Sort Array Write a JavaScript program to sort the items of an array.

/*  var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 arr1.sort((a,b)=>a-b);
 console.log(arr1); */

//?anothesr solution 

/* var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

 for(var i=0;i<arr1.length;i++){
   for(var j=i+1;j<arr1.length;j++){
    if(arr1[i]>arr1[j]){
          var temp=arr1[i];
        arr1[i]=arr1[j];
        arr1[j]=temp

    } 
   }  
 }
 console.log(arr1); */

 //&--------------------------------------------------
 


 
 





