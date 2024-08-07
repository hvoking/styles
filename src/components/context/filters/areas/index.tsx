import { useState, useContext, createContext } from 'react';

const AreasContext: React.Context<any> = createContext(null)

export const useAreas = () => {
	return (
		useContext(AreasContext)
	)
}

export const AreasProvider = ({children}: any) => {
	const [ parcelArea, setParcelArea ] = useState<any>(null);

	const [ parcelAreaMin, setParcelAreaMin ] = useState(1000);
	const [ parcelAreaMax, setParcelAreaMax ] = useState(9000);

	const [ parcelAreaFrom, setParcelAreaFrom ] = useState<any>(0);
	const [ parcelAreaTo, setParcelAreaTo ] = useState<any>(10000);

	const [ constructedAreaFrom, setConstructedAreaFrom ] = useState<any>(null);
	const [ constructedAreaTo, setConstructedAreaTo ] = useState<any>(null);

	const minBound = 0;
  	const [ maxBound, setMaxBound ] = useState(10000);

	return (
		<AreasContext.Provider value={{
			parcelArea, setParcelArea, 
			constructedAreaFrom, setConstructedAreaFrom,
			constructedAreaTo, setConstructedAreaTo,
			parcelAreaFrom, setParcelAreaFrom,
			parcelAreaTo, setParcelAreaTo,
			minBound, maxBound,
			parcelAreaMin, setParcelAreaMin,
			parcelAreaMax, setParcelAreaMax,
		}}>
			{children}
		</AreasContext.Provider>
	)
}

AreasContext.displayName = "AreasContext";