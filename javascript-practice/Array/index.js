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
