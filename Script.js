let restcountries = async () => {
    try {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      console.log(data);
      data.forEach((ele) => { 
        // console.log(ele.name.common)
        // let card=document.createElement("div");
        document.body.innerHTML += `
          <div class="card card-header card-body  t-img container">
          <h5 class="card-title class="card1">${ele.name.common}</h5>
    <div class="t-img"><img src="${ele.flags.png}" class="card-img-top"></div>
    <div class="card-body">
      <p class="card-text">
      <div>Capital: ${ele.capital}</div>
      <div>Region: ${ele.region}</div>
      <div>Country Code: ${ele.cca3}</div>
      </p>
      
      <button class="btn btn-primary" target="_blank" value="${ele.name.common}">Click for weather</button>
      </div>
  </div>`;
  
 
  let btn =document.querySelectorAll(".btn");
  btn.forEach((elem)=>{
    elem.addEventListener("click",()=>{
      let value=elem.value
      console.log(value)
      let weather = async () => {
        let response1 = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${elem.value}&APPID=f6d5d552eecbaa6920d83da0804e5a44`
        );
        let data1 = await response1.json();
        console.log(data1);
        // console.log(data1.weather[0].main);
  
        elem.innerHTML =`weather: ${data1.weather[0].description}<br>Temp: ${data1.main.temp}<br>Pressure: ${data1.main.pressure}`
        console.log(data1.weather[0].description,data1.main.temp,data1.main.pressure)
     
     
      };
  
      weather();
    });
  });
  });
  }
  catch (error) {
    console.log(error);
  }
  }
  restcountries();  
