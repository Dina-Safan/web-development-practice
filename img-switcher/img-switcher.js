const mainImage=document.getElementById("mainImage");
const images=document.querySelectorAll("#images img");

for(let i=0;i<images.length;i++){
    images[i].addEventListener("click",function(e){
        let clickedImage=e.target;
        let srcMainImage=mainImage.getAttribute("src");
        mainImage.setAttribute("src",clickedImage.src)
        
    })
}


