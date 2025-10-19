import { useEffect, useState } from "react";
import { DataArtists } from "../../../types/types";
import { homeServices } from "../services/HomeServices";

export const useContent = () => {
  const [artists, setArtists] = useState<Array<DataArtists>>([]);
  
    useEffect(() => {
      const fetchs = async () => {
        try {
          const res = await homeServices.getArtists();
  
          res.error ? console.error('Ha habido un problema en la solicitud de los artistas: ', res.message) : setArtists(res.data);
        } catch (e) {
          console.error('Error en la solicitud: ', e)
        }
      }
      fetchs();
    }, [])

    return {artists}
}