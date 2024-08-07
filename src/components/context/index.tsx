import { MapsProvider } from './maps';
import { FiltersProvider } from './filters';
import { PlaceApiProvider } from './api';
import { LeftProvider } from './left';

export const MainProvider = ({children}: any) => {
  return (
    <LeftProvider>
    <FiltersProvider>
    <PlaceApiProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </PlaceApiProvider>
    </FiltersProvider>
    </LeftProvider>
  )
}

MainProvider.displayName="MainProvider";