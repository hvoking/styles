import { useState, useContext, createContext } from 'react';

const SelectorsContext: React.Context<any> = createContext(null);

export const useSelectors = () => {
	return (
		useContext(SelectorsContext)
	)
}

export const SelectorsProvider = ({children}: any) => {
	const [ activeDraw, setActiveDraw ] = useState(false);
	
	return (
		<SelectorsContext.Provider value={{
			activeDraw, setActiveDraw, 
		}}>
			{children}
		</SelectorsContext.Provider>
	)
}

SelectorsContext.displayName = "SelectorsContext";