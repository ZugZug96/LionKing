import React, { Component } from 'react';
import './App.css';
import GridPersonajes from './Componentes/GridPersonajes.js'
import LionKing from './LionKing.jpg'
import FormContacto from './Componentes/FormContacto.js'
import { Divider } from '@material-ui/core'






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.setState = this.setState.bind(this);

  }





  render() {

    return (
      <div
       
      >
      
  <img src={LionKing} className="App-Imagenes" />
  <Divider />
 
  <GridPersonajes></GridPersonajes>
  <Divider />

 <FormContacto></FormContacto>


      </div > 






    );
  }
}

export default App;

