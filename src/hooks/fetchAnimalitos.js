import { fetchApiAdopcion } from '../services/apiAdopcion';

export const fetchAnimalitos = () => {
    const [ animales, setAnimales ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const getData = async() => {
            try {
                const dataAnimales = await fetchApiAdopcion(); // Llama API de adopción
                setAnimales(dataAnimales.content);
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
