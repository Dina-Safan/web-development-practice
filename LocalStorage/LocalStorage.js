//^ Html Element
const userName=document.getElementById("userName");
const userNameInput=document.getElementById("userNameInput");
const saveNameBtn=document.getElementById("saveName");
const deleteNameBtn=document.getElementById("deleteName");

//&Variable

let user=localStorage.getItem("user")||userName.innerHTML;
userName.innerHTML=user;
if(user !=="User")userNameInput.value=user


//?Function
function saveNameFun(){
    userName.innerHTML=userNameInput.value;
    localStorage.setItem("user",userNameInput.value);
   
}

function deleteNameFun(){
    localStorage.removeItem("user");
    userName.innerHTML="User";
    userNameInput.value="";
    
}


//~ Events

saveNameBtn.addEventListener("click",saveNameFun);
deleteNameBtn.addEventListener("click",deleteNameFun);