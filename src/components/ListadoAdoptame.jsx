//listado para llamar después a los animalitos
import React from 'react';
import { TarjetaAdoptame } from './TarjetaAdoptame'; // Exportación nombrada
import { fetchAnimalitos } from '../hooks/fetchAnimalitos';

export const ListadoAdoptame = () => {
    const { animales, loading } = fetchAnimalitos();

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="listado-adoptame">
            {animales.map((adoptame) => (
                <TarjetaAdoptame key={adoptame.id} adoptame={adoptame} />
            ))}
        </div>
    );
};
