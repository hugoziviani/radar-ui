import React from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

class CarFormComponent extends React.Component {
  constructor(param){
    super(param);
    
    this.state = {
      plateVehicle : '',
      modelVehicle :  '',
      conductorVehicle: '',
    }
    
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})

  }
  submitHandler = e => {
    e.preventDefault();
    const message = JSON.stringify(this.state);
      console.table(message)
      // (async () => {
      //   const rawResponse = await fetch('http://localhost:3001/garcom', {
      //     method: 'POST',
      //     headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     body: message
      //   });
      //   // const content = await rawResponse.json();
      
      //     console.log(rawResponse);
      // })();
  }

  render() {
    const {plateVehicle: plateVehicle, modelVehicle: modelVehicle, conductorVehicle: conductorVehicle } = this.state;
    return (
      <div>

        <form onSubmit={this.submitHandler}>
        <FormControl>
            <InputLabel>Placa</InputLabel>
            <Input
              type="text"
              value={plateVehicle}
              onChange={this.changeHandler}
              name="plateVehicle"
              id="plateVehicle"
              aria-describedby="helper-plateVehicle"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Modelo</InputLabel>
            <Input
              type="text"
              value={modelVehicle}
              onChange={this.changeHandler}
              name="modelVehicle"
              id="modelVehicle"
              aria-describedby="helper-modelVehicle"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Condutor</InputLabel>
            <Input              
              type="text"
              value={conductorVehicle}
              onChange={this.changeHandler}
              name="conductorVehicle"
              id="conductorVehicle"
              aria-describedby="helper-conductorVehicle"
            />
          </FormControl>
            

          <br></br>
          <br></br>

          <Button type="submit" variant="contained" >
            Enviar
          </Button>
        </form>
      </div>
    );
  }
}

export default CarFormComponent;