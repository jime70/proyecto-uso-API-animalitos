export const InputAnimal = ({ animal, handleOnChange, handleKeyDown }) => {
    return (
        <div className="input-animal">
            <input 
            type="text" 
            placeholder="Ingrese opción aquí"
            value={ animal }
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}/>
        </div>
    );
};
