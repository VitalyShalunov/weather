import React from "react";

class Form extends React.Component { //создаём новый класс, который наследует от React.Component
  render() { //для вывода HTML - разметки
    return (
      
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Город"/>
        <button>Получить погоду</button>
      </form>

    );
  }
}

export default Form;