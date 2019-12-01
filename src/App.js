import React from "react";
import Info from "./components/info"
import Form from "./components/Form"
import Weather from "./components/weather"
//import { async } from "q";


const API_KEY = "803453dbd3618e44832e8a41f013f26d";

class App extends React.Component { //создаём новый класс, который наследует от React.Component


state ={
  temp: undefined,
  city : undefined,
  country: undefined,
  pressure: undefined,
  sunset: undefined,
  error: undefined
  
}


gettingWeather = async(event) =>{ //event - для отслеживание событий
  event.preventDefault();//отмена перезагрузки страницы

  var city = event.target.elements.city.value; //target для работы с формой

  
  if (city){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);//await так как запрос асинхронный fetch - получение данных из url запроса
  const data = await api_url.json();
  console.log(data);

    var sunset = data.sys.sunset;
    var date = new Date();
    date.setTime(sunset);
    var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


  this.setState({
      temp: data.main.temp,
      city:data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunset_date,
      error:""

    });
  }
  else {
    this.setState({
      temp: undefined,
      city:undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error:"Введите название города"
    });
  }
}
   
  render() { //для вывода HTML - разметки
    return (
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
            <Info/>
            </div>
              <div className="col-sm-7 form">
              <Form  weatherMethod={this.gettingWeather}/>  {/* weatherMethod - то, что передаём в сам компонент */}
      <div className="weather">
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        pressure={this.state.pressure}
        sunset={this.state.sunset}
        error={this.state.error}
         />
            </div>  
            </div>
            </div>
          </div>
        </div>

       
        
      </div>
    );
  }
}

export default App; //экспорт в index.js