let qrpic=document.getElementById("qrpic");
let qrcode=document.getElementById("qrcode");
let qrinput=document.getElementById("qrinput");

function generateQR(){
    if(qrinput.value=== ''){
        qrinput.classList.add('error');
        setTimeout(()=>{
            qrinput.classList.remove('error');
        },1000)
    }
    else{
    qrpic.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrinput.value;
    qrcode.classList.add("execute");
    }
}
qrinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    if(qrinput.value === ''){
        qrinput.classList.add('error');
        setTimeout(()=>{
            qrinput.classList.remove('error');
        },1000)
    }
    else{
    qrpic.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrinput.value;
    qrcode.classList.add("execute");
    }
    }
  });