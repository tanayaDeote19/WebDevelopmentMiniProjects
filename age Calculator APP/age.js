let date= document.getElementById("date");
date.max= new Date().toISOString.split("T")[0];
let result= document.getElementById("result");

function calculateAge(){
    let birthdate=new Date(date.value);
    let d1= new birthdate.getDate();
    let m1= new birthdate.getMonth() +1;
    let y1= new birthdate.getFullYear();

    let today=new Date();
    let d2= new today.getDate();
    let m2= new today.getMonth() +1;
    let y2= new today.getFullYear();

    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y--;
        m3=12+m2-m1;
    }

    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3= getDaysInMonths(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    result.innerHTML='You are ${y3} years ${m3} months ${d3} days old';
}
function getDaysInMonths(year,month){
    return new Date(year,month, 0).getDate();
}