import { GeoProvider } from './geo';
import { AreasProvider } from './areas';
import { DrawPolygonProvider } from './draw';
import { HeightsProvider } from './heights';

export const FiltersProvider = ({children}: any) => {
  return (
    <DrawPolygonProvider>
    <GeoProvider>
    <AreasProvider>
    <HeightsProvider>
      {children}
    </HeightsProvider>
    </AreasProvider>
    </GeoProvider>
    </DrawPolygonProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";