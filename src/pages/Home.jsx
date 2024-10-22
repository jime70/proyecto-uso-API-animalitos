import { useState } from 'react';
import { Header } from './Header'; 
import ErrorBoundary from '../components/ErrorBoundaries';
import { ListadoAdoptame } from '../components/ListadoAdoptame';
//import { InputAnimal } from '../components/InputAnimal'; 

export const Home = () => {
    const [searchAnimal, setSearchAnimal] = useState('');

    const handleSearchChange = (event) => {
        setSearchAnimal(event.target.value);
    }

    return (
        <>
        <ErrorBoundary>
            <Header title="Centro de Adopción de Mascotas de Santiago" 
            subtitle="Juntos, construyamos una gran familia."/>
            
        

            <section>
                    <ListadoAdoptame/>
            </section>
            </ErrorBoundary>
        </>
    )
}
