//Imports
import React, { Component } from 'react';
import { Grid, Paper, AppBar, Typography, Toolbar } from '@material-ui/core';
import Pumba from '../Pumba.png'
import Timon from '../Timon.png';
import Simba from '../Simba.png';



//Clase componente
class GridPersonajes extends Component {

    //Constructor y su estado
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    //Funciones

    //Render es la unica obligatoria
    render() {
        return (
            <div>
                <AppBar position="Center"  color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Personajes principales
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center" spacing="32">
                    <Grid item md>
                        <Paper>
                            <AppBar position="static" color="default"> <Toolbar className="App-Center"><Typography variant="h5" color="inherit">Simba</Typography> </Toolbar></AppBar>
                            <img src={Simba} className="App-Imagenes"/>

                            <AppBar position="static" color="default">
                                <Toolbar>
                                    <Typography variant="h8" color="inherit">Descripcion</Typography> </Toolbar></AppBar>
                            <p>
                                Es el protagonista principal de la saga, es un león, hijo del rey Mufasa y de su esposa Sarabi.
                                 Es el soberano de las Tierras del Reino. Creció bajo las sabias enseñanzas de su padre y la compañía de Nala, su mejor amiga y futura esposa.
                </p>
                        </Paper>
                    </Grid>
                    <Grid item md>
                        <Paper padding="10" marginTop="10" marginBottom="10">
                            <AppBar position="static" color="default"> <Toolbar><Typography variant="h5" color="inherit">Timon</Typography> </Toolbar></AppBar>
                            <img src={Timon} className="App-Imagenes"/>
                            <AppBar position="static" color="default"> <Toolbar><Typography variant="h8" color="inherit">Descripcion</Typography> </Toolbar></AppBar>
                            <p>Timón es un hiperactivo y simpático suricato. Su actitud y modales insolentes hicieron que abandonara a su familia y su madriguera.
                    Conoció a Pumba, un alegre jabalí que, al igual que él, fue repudiado debido a su peculiar actitud.</p>
                        </Paper>
                    </Grid>
                    <Grid item md>
                        <Paper padding="15" marginTop="10" marginBottom="10">
                            <AppBar position="static" color="default"> <Toolbar><Typography variant="h5" color="inherit">Pumba</Typography> </Toolbar></AppBar>
                            <img src={Pumba} className="App-Imagenes"/>
                            <AppBar position="static" color="default"> <Toolbar><Typography variant="h8" color="inherit">Descripcion</Typography> </Toolbar></AppBar>
                            <p>
                                Pumba es un jabalí verrugoso. Es muy noble y con un gran corazón, pero sufre un serio problema de flatulencias que hizo que fuera marginado en las Tierras del Reino.
                                Conoció a Timón, el suricato, otro marginado, con quién entabló una entrañable amistad. Juntos emigraron a la selva, donde vivieron bajo la filosofía del
                                "no preocuparse" (Hakuna Matata).
                </p>

                        </Paper>
                    </Grid>
                </Grid>


            </div>
        )
    }

}

//Al final de todo exportamos nuestro componente
export default GridPersonajes;