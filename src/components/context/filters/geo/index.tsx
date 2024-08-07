import { useState, useContext, createContext } from 'react';

const GeoContext: React.Context<any> = createContext(null);

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const [ cityName, setCityName ] = useState<any>("blumenau");
	const [ cityId, setCityId ] = useState<any>(37);
	const [ neighbourId, setNeighbourId ] = useState<number>(26);
	const [ parcelId, setParcelId ] = useState([ 31688 ]);
	
	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			cityId, setCityId, 
			neighbourId, setNeighbourId,
			parcelId, setParcelId,
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";