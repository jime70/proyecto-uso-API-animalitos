
import React from 'react'

const Informacion = (adoptame) => {
    return (
        <>
        <div>Informacion</div>
            <Card style={{ width: '18rem' }}>
            {console.log("quiero ver", adoptame.image)}
                <Card.Img variant="top" src={adoptame.imagen} alt={`foto de ${adoptame.nombre}`} />
                <Card.Body>
                <Card.Title>{adoptame.nombre}</Card.Title>
                    <Card.Text>
                    {adoptame.desc_personalidad}
                    <br />
                    Edad: {adoptame.edad} - {adoptame.genero}
                    </Card.Text>
                    <Button variant="primary">Adoptar</Button>
                    </Card.Body>
                </Card>
                </>
                );
            };
            

export default Informacion