import { useState } from 'react';
import { Header } from './Header'; 
import { DetalleAdoptame } from '../components/DetalleAdoptame';
import { ListadoAdoptame } from '../components/ListadoAdoptame';
import { InputAnimal } from '../components/InputAnimal'; 

export const Home = () => {
    const [searchAnimal, setSearchAnimal] = useState('');

    const handleSearchChange = (event) => {
        setSearchAnimal(event.target.value);
    }

    return (
        <>
            <Header title="Centro de Adopción de Mascotas de Santiago" 
            subtitle="Juntos, construyamos una gran familia."/>
            
            <section>
                <h2>Encuentra a tu compañero ideal</h2>
                <InputAnimal animal={searchAnimal} handleOnChange={handleSearchChange} />
                <div>
                {searchAnimal.length > 0 ? <DetalleAdoptame adoptame={searchAnimal} /> : null}
                </div>
            </section>

            <section>
                {/* <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}> */}
                    <ListadoAdoptame/>
                {/* </ErrorBoundary> */}
            </section>
        </>
    )
}
