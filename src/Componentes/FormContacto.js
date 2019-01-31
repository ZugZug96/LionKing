import React, { Component } from 'react';
import '../App.css';

import {TextField, Radio, RadioGroup, FormControlLabel, FormControl,FormLabel, 
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider} from '@material-ui/core';



class FormContacto extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        nombre: "",
        apellido: "",
        telefono: "",
        comentarios: "",
        genero: "",
      };
      this.setState = this.setState.bind(this);
  
    }
  
  
    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    handleOnChange = event => {
      switch (event.target.id) {
        case "Name":
          this.setState({ nombre: event.target.value });
          break;
        case "LastName":
          this.setState({ apellido: event.target.value });
          break;
  
        case "Telefono":
          this.setState({ telefono: event.target.value });
          break;
  
        case "Comentarios":
          this.setState({ comentarios: event.target.value });
          break;
  
        default:
          if (event.target.name = "Genero") {
            this.setState({genero: event.target.value});
          }
          else{
          console.log("error");
          console.log(event.target.value)
          console.log(event.target.name)
          console.log(event.target.id)
        }
          break;
      }
  
      
  
    };
  
    
    
  
    render() {
  
      return (
  
  
  
        <div className="inner">
          <form>
            <h1>Informacion de contacto</h1>
            <TextField
              id="Name"
              label="Nombre"
              placeholder="Nombre"
              margin="normal"
              variant="filled"
              defaultValue={this.props.nombre}
              onChange={this.handleOnChange}
              className="TextField"
  
            />
            <TextField
              id="LastName"
              label="Apellidos"
              placeholder="Apellidos"
              onChange={this.handleOnChange}
              margin="normal"
              className="TextField"
              variant="filled"
            />
            <TextField
              id="Telefono"
              label="Telefono"
              placeholder="Telefono"
              onChange={this.handleOnChange}
              className="TextField"
              margin="normal"
              variant="filled"
            />
  
  
            <TextField
              id="Comentarios"
              label="Comentarios"
              multiline
              rows="4"
              defaultValue=""
              className="TextField"
              margin="normal"
              onChange={this.handleOnChange}
              variant="filled"
            />
  
  
            <FormControl component="fieldset" className="RadioGroup">
              <FormLabel component="legend">Genero</FormLabel>
              <RadioGroup  onChange={this.handleOnChange} name="Genero" >
                <FormControlLabel value="Femenino"  control={<Radio />} label="Femenino" />
                <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
              </RadioGroup>
            </FormControl>
  
  
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen} className="Button">
              Enviar informacion
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
  
              aria-labelledby="draggable-dialog-title"
            >
              <DialogTitle id="draggable-dialog-title">Informacion de contacto enviada</DialogTitle>
              <DialogContent>
                <DialogContentText>
  
  
  
                  Su nombre: {this.state.nombre}
                  <Divider />
                  Su apellido: {this.state.apellido}
                  <Divider />
                  Su telefono: {this.state.telefono}
                  <Divider />
                  Sus comentarios: {this.state.comentarios}
                  <Divider />
                  Su genero: {this.state.genero}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Aceptar
              </Button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
  
  
  
  
      );
    }
  }
  
  export default FormContacto;
  