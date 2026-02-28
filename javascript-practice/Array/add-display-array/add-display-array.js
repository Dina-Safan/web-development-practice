//^ HTML Element
const arrayInput=document.getElementById("arrayInput");
const addBtn=document.getElementById("addBtn");
const displyBtn=document.getElementById("displyBtn");
const arrayContainer=document.querySelector(".array-container");

//& Variable
let arr=JSON.parse(localStorage.getItem("arrayElement"))|| [];
displayArray();


//? Function

function addElement(element){
    arr.push(element);
}

function displayArray(){
     arrayContainer.innerHTML="";
    if(arr.length>0){
        arrayContainer.classList.replace("d-none","d-block");
        for(let i=0;i<arr.length;i++){
             
            arrayContainer.innerHTML+=`<div class=" mb-2">Element <span class="text-primary fw-bolder">${i}</span> = <span class="text-success fw-bolder">${arr[i]}</span></div>`;;
        }
    }
}




//~ Event 

addBtn.addEventListener("click",function(){
       let value = arrayInput.value;
    if (value === "") return; 
    value = isNaN(value) ? value : Number(value);
    addElement(value);
    localStorage.setItem("arrayElement",JSON.stringify(arr));
    arrayInput.value = "";
    console.log(arr);
    
});

displyBtn.addEventListener("click",displayArray)






