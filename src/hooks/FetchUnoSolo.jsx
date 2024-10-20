import { useEffect, useState } from "react"
import { fetchUnoSolo } from "../services/apianimal"
import { fetchUnoSolo } from "../services/apiAdopcion"

export const useFetchUnoSolo = (animalSearched) => {
    const [ adoptame, setadoptame ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const getadoptame = async () => {
            try {
                const dataadoptame= await fetchUnoSolo(animalSearched)
                setadoptame(dataadoptame)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        getadoptame()
    }, [adoptameSearched])

    if(error) {
        throw error
    }

    return { adoptame, loading }
}