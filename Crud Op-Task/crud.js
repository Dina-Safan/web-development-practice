//^ Html Element

const showAddedModalBtn=document.getElementById("showAddedModalBtn");
const seacrhInput=document.getElementById("seacrhInput");
const model=document.querySelector(".model");
const addHeading=document.getElementById("hAdd");
const updateHeading=document.getElementById("hUpdate");
const productNameInput=document.getElementById("productNameInput");
const productPriceInput=document.getElementById("productPriceInput");
const productCategoryInput=document.getElementById("productCategoryInput");
const productSizeInput=document.getElementById("productSizeInput");
const productScentInput=document.getElementById("productScentInput");
const updateBtn=document.getElementById("updateBtn");
const AddBtn=document.getElementById("AddBtn");


//?varaibles

var nameRegx=/^[A-Za-z\s]{3,}$/;
var priceRegx = /^([5-9][0-9]|[0-9][0-9][0-9]|1000)$/;
var categoryRegx = /^[A-Za-z\s]{3,}$/;
var sizeRegx = /^(50|[5-9][0-9]|[1-9][0-9][0-9]+)$/;
var scentRegx=/^[A-Za-z\s]{3,}$/;


//& Function


//~Events>