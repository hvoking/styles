// React imports
import { useRef, useEffect } from 'react';

// App imports
import { MapControllers } from './controllers';
import { CityDropdown } from './dropdown/city';
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
import { DeckProps } from '@deck.gl/core/typed';
import { MapboxOverlay } from '@deck.gl/mapbox/typed';
import { useControl } from 'react-map-gl';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const Maps = () => {
	const mapRef = useRef<any>();
	const { viewport } = useMapboxProperties();
	const { activeSatelite, currentBaseMap } = useBaseMaps();
	const { activeDraw } = useSelectors();

	const onContextMenu = (e: React.MouseEvent) => {e.preventDefault()};

	useEffect(() => {
		mapRef.current?.flyTo({
			center: [viewport.longitude, viewport.latitude],
			zoom: parseInt(viewport.zoom),
			pitch: parseInt(viewport.pitch),
			bearing: parseInt(viewport.bearing),
			duration: 4000, 
			essential: true,
		});
	}, [viewport])

	return (
		<div className="maps" onContextMenu={onContextMenu}>
			<div className="map-container-wrapper">
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
			</div>
		</div>
	)
}