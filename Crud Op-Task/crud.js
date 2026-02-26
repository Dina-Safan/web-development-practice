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
const productImageInput=document.getElementById("productImageInput");
const updateBtn=document.getElementById("updateBtn");
const AddBtn=document.getElementById("AddBtn");
const productContainer=document.querySelector(".products-container");


//?varaibles

const nameRegx=/^[A-Za-z\s]{3,}$/;
const priceRegx = /^([5-9][0-9]|[0-9][0-9][0-9]|1000)$/;
const categoryRegx = /^[A-Za-z\s]{3,}$/;
const sizeRegx = /^(50|[5-9][0-9]|[1-9][0-9][0-9]+)$/;
const scentRegx=/^[A-Za-z\s]{3,}$/;

let updateIndex;

let productList=JSON.parse(localStorage.getItem("products"))||[];
displayAllProducts();
//& Function

function addProduct(){
    if(validate(productNameInput,nameRegx) 
        && validate(productCategoryInput,categoryRegx)
        && validate(productSizeInput,sizeRegx)
        && validate(productScentInput,scentRegx)
        && validate(productPriceInput,priceRegx)){
      const product={
        name:productNameInput.value,
        category:productCategoryInput.value,
        size:productSizeInput.value,
        scent:productScentInput.value,
        price:productPriceInput.value,
        url:productImageInput.files[0].name
    }

    productList.push(product);
    localStorage.setItem("products",JSON.stringify(productList));
    displayProduct(productList.length -1);
    clear();
    productNameInput.classList.remove("is-valid")
    productCategoryInput.classList.remove("is-valid")
    productPriceInput.classList.remove("is-valid")
    productScentInput.classList.remove("is-valid")
    productSizeInput.classList.remove("is-valid")



 }
 else{
    window.alert("Enter Correct Data")
 }

}

function displayProduct(i){
   let productHtml=`
               <div class="col-6 col-sm-6 col-md-4 col-lg-4">
                    <div class="inner p-3 ">
                        <div class="product overflow-hidden rounded bg-light text-dark ">
                            <img src="./images/${productList[i].url}" class="w-100 " alt="">
                            <div class="info p-3">
                                <h2 class="h3">${productList[i].name}</h2>
                               <div class="row g-2">
                                    <div class="col-xl-8 col-md-12 col-sm-12"><span class="fw-medium">Category :</span> ${productList[i].category}</div>
                                    <div class="col-xl-4 col-md-12 col-sm-12"><span class="fw-medium">Size :</span> ${productList[i].size}ml</div>
                                    <div class="col-xl-8 col-md-12 col-sm-12"><span class="fw-medium">Scent :</span> ${productList[i].scent}</div>
                                    <div class="col-xl-4 col-md-12 col-sm-12"><span class="fw-medium">Price :</span> ${productList[i].price}$</div>
                                    </div>
                            </div>  
                            
                            <div class="btns ps-3 pb-3">
                                <button class="btn btn-warning" onclick="getProductEdit(${i})"> Edit</button>
                             <button class="btn btn-danger">Delete</button> 
                            </div>
                        </div>
                    </div>
                </div>
    `
    productContainer.innerHTML+=productHtml;
}

function displayAllProducts(){
    for(let i=0;i<productList.length;i++){
        displayProduct(i);
    }
}

function getProductEdit(i){
    updateIndex=i;
    showModal();
    updateHeading.classList.replace("d-none","d-block");
    addHeading.classList.replace("d-block","d-none");

    updateBtn.classList.replace("d-none","d-block");
    AddBtn.classList.replace("d-block","d-none");

            productNameInput.value= productList[i].name;
            productCategoryInput.value=productList[i].category;
            productPriceInput.value=productList[i].price;
            productScentInput.value=productList[i].scent;
            productSizeInput.value=productList[i].size;
        }

function updateProduct(){

    if(validate(productNameInput,nameRegx) 
        && validate(productCategoryInput,categoryRegx)
        && validate(productSizeInput,sizeRegx)
        && validate(productScentInput,scentRegx)
        && validate(productPriceInput,priceRegx)){
            productList[updateIndex].name=productNameInput.value;
            productList[updateIndex].category=productCategoryInput.value;
            productList[updateIndex].size=productSizeInput.value;
            productList[updateIndex].price=productPriceInput.value;
            productList[updateIndex].scent=productScentInput.value;
            if(productImageInput.files.length >0){
                productList[updateIndex].url=productImageInput.files[0].name;

            }

            localStorage.setItem("products",JSON.stringify(productList));
            productContainer.innerHTML="";
            displayAllProducts();
            hideModal();


        }

}

function validate(element,regx){

   if( regx.test(element.value)){
    element.nextElementSibling.classList.replace("d-block","d-none");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
   }

    element.nextElementSibling.classList.replace("d-none","d-block");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
}

function showModal(){
    model.classList.replace("d-none","d-block");
}

function hideModal(){
    model.classList.replace("d-block","d-none");
}

function clear(){
    productNameInput.value="";
    productCategoryInput.value="";
    productSizeInput.value="";
    productScentInput.value="";
    productPriceInput.value="";
}
//~Events>
showAddedModalBtn.addEventListener("click",function(){
    showModal();
    addHeading.classList.replace("d-none","d-block");
})

AddBtn.addEventListener("click",addProduct);
updateBtn.addEventListener("click",updateProduct);
