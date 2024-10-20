// import  {fetchApiAdopcion} from '../services/apiAdopcion';
// import { useState, useEffect } from "react";

// export const FetchAnimalitos = () => {
//     const [ adoptame, setAdoptame ] = useState([]);
//     const [ loading, setLoading ] = useState(true);
//     const [ error, setError ] = useState(null);

//     useEffect(() => {
//         const getData = async() => {
//             try {
//                 const data = await fetchApiAdopcion(); // Llama API de adopción
//                 console.log("Bienvenidos a nuestra gran familia de adopción de animalitos", data)
//                 setAdoptame(data);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         getData();
//     }, []);

//     if (error) {
//         throw error;
//     }

//     return { adoptame, loading };
// };


import { fetchApiAdopcion } from '../services/apiAdopcion';
import { useState, useEffect } from "react";

export const FetchAnimalitos = () => {
    const [ animales, setAnimales ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const getData = async() => {
            try {
                const dataAnimales = await fetchApiAdopcion(); // Llama API de adopción
                
                setAnimales(dataAnimales.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    if (error) {
        throw error;
    }

    return { animales, loading };
};