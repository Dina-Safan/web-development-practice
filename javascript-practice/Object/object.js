
//^ 1. List Object Properties Write a JavaScript program to list the properties of a JavaScript object. 
/* var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; 
 
for(let x in student){
   console.log(x);
}
 */

//&----------------------------------------------------

//^2. Delete Property Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

/*  var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; 

console.log("Before Delete ");
console.log(student);

delete student.rollno;

console.log("After Delete ");
console.log(student); */

//&--------------------------------------------------------

//^ 3. Object Length Write a JavaScript program to get the length of a JavaScript object.

/* var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 ,
age:23};

console.log(Object.entries(student).length); */

//&-----------------------------------------------------------

//^ 4. Display Reading Status Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

/* var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }]; 

   for(var i=0;i<library.length;i++){
    if(library[i].readingStatus===true)
        console.log(` Already Read '${library[i].author}' by ${library[i].title}\n`);  
    
    else 
        console.log(` You still need to read '${library[i].title}'\n`)
   } */

//&----------------------------------------------------------------