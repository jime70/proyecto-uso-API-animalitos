export const InputAnimal = ({ animal, handleOnChange }) => {
    return (
        <div className="input-animal">
            <input 
            type="text" 
            placeholder="Juntos, construyamos una gran familia."
            value={ animal }
            onChange={handleOnChange}/>
        </div>
    )
}
