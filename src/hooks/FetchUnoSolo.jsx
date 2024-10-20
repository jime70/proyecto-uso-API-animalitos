import { useEffect, useState } from "react"
import { fetchOneAnimal } from "../services/apianimal"

export const useFetchOneAnimal = (animalSearched) => {
    const [ animal, setanimal ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const getanimal = async () => {
            try {
                const dataanimal = await fetchOneanimal(animalSearched)
                setanimal(dataanimal)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        getanimal()
    }, [animalSearched])

    if(error) {
        throw error
    }

    return { animal, loading }
}