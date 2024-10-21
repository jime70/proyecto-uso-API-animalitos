import React from 'react';

export const TarjetaAdoptame = ({ adoptame }) => {
    const { imagen, nombre, id, tipo, edad, genero, comuna, vacunas } = adoptame;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={imagen} alt={nombre} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{nombre}</div>
            <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">ID:</span> {id}
            </p>
            <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Tipo:</span> {tipo}
            </p>
            <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Edad:</span> {edad}
            </p>
            <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Género:</span> {genero}
            </p>
            <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Comuna:</span> {comuna}
            </p>
            <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Vacunas:</span> {vacunas ? 'Sí' : 'No'}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            onClick={() => alert(`¡Gracias por querer adoptar a ${nombre}!`)}
            >
            Adoptar
            </button>
        </div>
        </div>
    );
};

//export default TarjetaAdoptame;