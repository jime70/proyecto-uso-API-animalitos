//listado para llamar después a los animalitos
//import React from 'react';
import { TarjetaAdoptame } from './TarjetaAdoptame'; // Exportación nombrada
import { FetchAnimalitos } from '../hooks/FetchAnimalitos.jsx';

export const ListadoAdoptame = () => {
    const { animales, loading } = FetchAnimalitos();

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className='grid grid-cols-4 gap-4'> 
            {animales.map((adoptame) => (
                <TarjetaAdoptame key={adoptame.id} adoptame={adoptame} />
            ))}
            </div>
        </div>
    );
};
