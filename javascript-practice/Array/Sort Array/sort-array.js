
//^ 7. Sort Array Write a JavaScript program to sort the items of an array.

//?using sort Function

 var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 arr1.sort((a,b)=>a-b);
//  console.log(arr1); 

//?anothesr solution( bubble sort)

 var arr2 = [ 5,4,10,1,6,2 ];

 //& loop for pass   pass= n-1
 for(var i=0;i<arr2.length-1;i++){
    //& loop for comparision    comparision =n-1
    for(var j=0;j<arr2.length-1;j++){
        if(arr2[j] >arr2[j+1]){
            //& swap so that the largest element is at the end of the array 
            let temp=arr2[j];
            arr2[j]=arr2[j+1];
            arr2[j+1]=temp;
        }
    }
 }
 console.log(arr2);
 




//  console.log(arr2); 

//?another solution ( insertion sort)

 let arr3=[5,4,10,1,6,2];
let temp;

//& unsorted array
for(let i=1;i<arr3.length;i++){
    //& store first element in unsorted array
    temp=arr3[i];
    //& sorted array
    for(var j=i-1;j>=0;j--){
        //& compare temp with sorted array and shift for element in sorted array
        //&  if temp less than this element 
        if(arr3[j]>temp) arr3[j+1]=arr3[j];
        else break;
    }

    //& but temp in correct place in array 
    arr3[j+1]=temp;

}

// console.log(arr3); 

//? another solution (selection sort)
var arr4=[5,4,10,1,6,2];
var min;

//& unsorted list in first 
for(var i=0;i<arr4.length-1;i++){
    //& store first index in unsorted list 
    min=i;
    for(var j=i+1;j<arr4.length;j++){
        //&compare first element in unsortd list with reset elemet in array to reach smallest element
        if(arr4[min]>arr4[j]) min=j;
    }

    //& swap fisrt element in unsoreted list with the smallest element in array 
    let temp= arr4[i];
    arr4[i]=arr4[min];
    arr4[min]=temp;
}

// console.log(arr4);

