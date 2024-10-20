import axios from "axios";

const BASE_URL = 'https://huachitos.cl/api/animales/'

export const fetchApiAdopcion = async() => {
    try {
        const { data } = await axios.get(`${BASE_URL}`);
        console.log("aquí está data", data)
        if(!data) throw new Error('Se produjo un error al procesar la información')
        return data
    } catch (error) {
        throw new Error('Se produjo un error al procesar la información', error)
    }
}

export const fetchUnoSolo = async(adoptame) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/adoptame/${adoptame}`)
        if(!data) throw new Error(`Se produjo un error al procesar la información ${adoptame}`)
        return data
    } catch (error) {
        throw new Error(`Se produjo un error al procesar la información ${digimon}`, error)
    }
}


