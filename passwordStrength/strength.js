let password = document.getElementById("Password");
let message = document.getElementById("message");
let disp = document.getElementById("disp");

password.addEventListener('input',()=>{
    if(password.value.length>0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
    if(password.value.length<4){
        disp.innerHTML="weak";
        password.style.borderColor="red";
        message.style.color="red"
    }
    else if(password.value.length>=4 && password.value.length<8){
        disp.innerHTML="medium";
        password.style.borderColor="yellow";
        message.style.color="yellow"
    }
    else if(password.value.length>8){
        disp.innerHTML="strong";
        password.style.borderColor="green";
        message.style.color="green"
    }
})