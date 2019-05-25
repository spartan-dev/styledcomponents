import React from 'react';
import Header from './Nav';
import Wraper from './Wraper';
import Wraper2 from './Wraper2'
import Button from './Button';
function Home() {
    return (
        <div>
            <Header>Este podria ser un Nav</Header>
            <Wraper>
                <h1>malo2</h1>
                <Button>
                    Boton primario
                </Button>
            </Wraper>
            <Wraper2>
                <h2>Un nuevo contenedor</h2>
            <Button secondary>
                Boton secundario
            </Button>
            </Wraper2>
            
        </div>
    )
}

export default Home
