// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const MapboxContext: React.Context<any> = createContext(null);

export const useMapboxProperties = () => {
  return (
    useContext(MapboxContext)
  )
}

export const MapboxProvider = ({children}: any) => {
  const [ viewport, setViewport ] = useState(Locations.barcelona);
  
  return (
    <MapboxContext.Provider value={{ 
      viewport, setViewport, Locations,
    }}>
      {children}
    </MapboxContext.Provider>
  )
}

MapboxContext.displayName="MapboxContext";