import React from "react";


const Weather = (props) => {
  return (
    <div>
      {props.city &&

        <div>
          <p>Местоположение: {props.city},{props.country} </p>
          <p>Температура: {props.temp}</p>
          <p>Давление: {props.pressure}</p>
          <p>Заход солнца: {props.sunset}</p>
        </div>
      }
      <p>{props.error}</p>
    </div>
  );

}

// class Weather extends React.Component { //создаём новый класс, который наследует от React.Component
//   render() { //для вывода HTML - разметки
//     return (
//       <div>
//         { this.props.city  &&

//         <div>
//         <p>Местоположение: {this.props.city},{this.props.country} </p>
//         <p>Температура: {this.props.temp}</p>
//         <p>Давление: {this.props.pressure}</p>
//         <p>Заход солнца: {this.props.sunset}</p>
//         </div>
//         }
//       <p>{this.props.error}</p>
//       </div>
//     );
//   }
// }

export default Weather;