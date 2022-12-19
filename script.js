async function gitApi(){
    const url = "https://api.weatherapi.com/v1/current.json?key=aa28583001804630a7595845221512&q=amman";
const res =await fetch(url);
 const myData = await res.json();
console.log(myData.location.lat);
console.log(myData.location.lon);
console.log(myData.current.temp_c);
document.getElementById("lon").innerHTML=myData.location.lon;
document.getElementById("lat").innerHTML=myData.location.lat;
document.getElementById("temp").innerHTML=myData.current.temp_c;
}

async function openMap(){

     const map = "https://maps.locationiq.com/v3/staticmap?key=pk.dfd952641639864b9d4ddc0e0b5fd067&center=31.95,35.93";
     const res1 =await fetch(map);
     console.log(res1.url);
     
     document.getElementById("immg").src=res1.url;
}