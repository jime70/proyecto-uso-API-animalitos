import React from 'react'

export const Contacto = () => {
    return (
        <>
        <div>Contacto</div>
        <div className="col"> 
            <div className="card_custom">
                <div className="card_custom_header">
                    <h3 className="card_custom_title">Déjanos saber qué tipo de mascota buscas y te enviaremos más información</h3>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Escribe aquí tu mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                    <p>Ayúdanos a buscar familia a nuestros huachitos.</p>
                </div>
            </div>
            </div>
            </>
    )
}

export default Contacto