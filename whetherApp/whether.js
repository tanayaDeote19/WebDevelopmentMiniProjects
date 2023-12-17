const apiKey="3265874a2c77ae4a04bb96236a642d2f";
//const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metrics';
const searchInput= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
let city=searchInput.value;
const checkWeather=async(city)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics';
    
    const response= await fetch(url);
    console.log(response);
    //let data= await response.json();
    //console.log(data);
    
}
