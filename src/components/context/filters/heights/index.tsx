import { useState, useContext, createContext } from 'react';

const HeightsContext: React.Context<any> = createContext(null)

export const useHeights = () => {
	return (
		useContext(HeightsContext)
	)
}

export const HeightsProvider = ({children}: any) => {
	const [ heights, setHeights ] = useState<any>(null);

	return (
		<HeightsContext.Provider value={{
			heights, setHeights,
		}}>
			{children}
		</HeightsContext.Provider>
	)
}

HeightsContext.displayName = "HeightsContext";