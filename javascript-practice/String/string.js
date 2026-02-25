//^ 1. Check String Input Write a JavaScript function to check whether an 'input' is a string or not

/* function is_string(input){
    if(typeof input =="string") return true;
    return false;
}
console.log(is_string([1, 2, 4, 0])); */

//&----------------------------------------------

//^2. Check Blank String Write a JavaScript function to check whether a string is blank or not.

/* function is_Blank(input){
    if(input.length ===0) return true
    return false;
}

console.log(is_Blank("")); */

//&-----------------------------------------------

//^3. String to Array of Words Write a JavaScript function to split a string and convert it into an array of words.

/* function string_to_array(input){
    return input.trim().split(" ") 
}

console.log(string_to_array("Robin Singh"));
 */

//&----------------------------------------------------

//^4. Extract Characters Write a JavaScript function to extract a specified number of characters from a string.

/* function truncate_string(input,n){
    if(typeof input ==="string" && typeof n ==="number" && n>0 ) return input.slice(0,n);

    return "";
}

console.log(truncate_string("Robin Singh",3)); */

//&------------------------------------------------