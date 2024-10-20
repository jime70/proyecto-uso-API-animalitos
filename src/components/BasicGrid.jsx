import React from "react";

const BasicGrid = () => {
    return (
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-200 p-4">Columna 1</div>
            <div className="bg-green-200 p-4">Columna 2</div>
            <div className="bg-red-200 p-4">Columna 3</div>
            <div className="bg-yellow-200 p-4">Columna 4</div>
            <div className="bg-blue-200 p-4">Columna 1</div>
            <div className="bg-green-200 p-4">Columna 2</div>
            <div className="bg-red-200 p-4">Columna 3</div>
            
        </div>
        </div>
    );
};

export default BasicGrid;
