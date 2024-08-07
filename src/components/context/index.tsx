import { MapsProvider } from './maps';
import { FiltersProvider } from './filters';
import { PlaceApiProvider } from './api';
import { LeftProvider } from './left';
import { SizesProvider } from './sizes';

export const MainProvider = ({children}: any) => {
  return (
    <SizesProvider>
    <LeftProvider>
    <FiltersProvider>
    <PlaceApiProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </PlaceApiProvider>
    </FiltersProvider>
    </LeftProvider>
    </SizesProvider>
  )
}

MainProvider.displayName="MainProvider";