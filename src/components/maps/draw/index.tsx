// React imports
import { useState, useCallback } from 'react';

// App imports
import { DrawControl } from './control';
import './styles.scss';

// Context imports
import { useDrawPolygon } from '../../context/filters/draw';

export const DrawPolygon = () => {
	const [ features, setFeatures ] = useState({});
	const { setDrawPolygon } = useDrawPolygon();

	const onUpdate = useCallback((e: any) => {
		setDrawPolygon(e.features[0]);
		
		setFeatures(currFeatures => {
			const newFeatures: any = {...currFeatures};
			for (const f of e.features) {
				newFeatures[f.id] = f;
			}
		});
	}, []);

	const onDelete = useCallback((e: any) => {
		setFeatures(currFeatures => {
			const newFeatures: any = {...currFeatures};
			for (const f of e.features) {
				delete newFeatures[f.id];
			}
			return newFeatures;
		});
	}, []);

	return (
		<DrawControl
			position="bottom-right"
			displayControlsDefault={false}
			controls={{ polygon: true, trash: true }}
			defaultMode="draw_polygon"
			onCreate={onUpdate}
			onUpdate={onUpdate}
			onDelete={onDelete}
		/>
	)
}

DrawPolygon.displayName="DrawPolygon";