// App imports
import { MapControllers } from './controllers';
import { CityDropdown } from './dropdown';
import { Basemaps } from './basemaps';
import { DrawPolygon } from './draw';
import { Styles } from './styles';
import './styles.scss';

// Context imports
import { useMapboxProperties } from '../context/maps/mapbox';
import { useBaseMaps } from '../context/maps/basemaps';
import { useSelectors } from '../context/left/selectors';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { mapRef, viewport } = useMapboxProperties();
	const { activeSatelite, currentBaseMap } = useBaseMaps();
	const { activeDraw } = useSelectors();

	return (
		<div className="map-container">
			<CityDropdown/>
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={!activeSatelite ? "mapbox://styles/mapbox/satellite-v9" : currentBaseMap}
			>
				<MapControllers/>
				<Styles/>
				{activeDraw && <DrawPolygon/>}
			</Map>
			<Basemaps/>
		</div>
	)
}