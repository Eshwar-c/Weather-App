document.addEventListener("DOMContentLoaded",()=>{
  const input = document.getElementById("input");
  const loca = document.getElementById("location");
  const date = document.getElementById("date");
  const cel = document.getElementById("celsius");
  const haze = document.getElementById("haze");
  const five = document.getElementById("five");
  
  const apiKey = "BCH9WP6VUNSC2GFQAEDR7UTYJ";
  const baseurl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
   async function fetchWeather(input){
    try{
    const url = `${baseurl}${input}?unitGroup=metric&key=${apiKey}`;
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("failed to fetch weather data");

    }
    const weatherData = await response.json();
    loca.textContent= weatherData.resolvedAddress;
    date.textContent = new Date(weatherData.days[0].datetime).toDateString();
    cel.textContent = `${weatherData.days[0].temp}  C`;
    haze.textContent = weatherData.days[0].conditions;
} catch(error){
   alert(error.message);
}
}
input.addEventListener("keydown" , (event)=>{
  if(event.key == "Enter"){
    const location = input.value.trim();
    if(location){
      fetchWeather(location);
    }
    else{
      alert("please enter a valid location")
    }
  }
});
});