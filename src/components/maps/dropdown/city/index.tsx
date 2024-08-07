// React imports
import { useState } from 'react';

// App imports
import { Suggestions } from './Suggestions';
import './styles.scss';

// Variable imports
import { cities, data } from './cities';

// Context imports
import { useMapboxProperties } from '../../../context/maps/mapbox';
import { useGeo } from '../../../context/filters/geo'

export const CityDropdown = () => {
	const { Locations, viewport, setViewport } = useMapboxProperties();
	const { cityName, setCityName, setCityId } = useGeo();

	const [ suggestions, setSuggestions ] = useState(['Blumenau', 'Itajaí']);
	const [ suggestionIndex, setSuggestionIndex ] = useState(0);
	const [ suggestionsActive, setSuggestionsActive ]= useState(false);

	const handleClick = (e: any) => {
		const cityValue = e.target.innerText.toLowerCase();

		setCityName(cities[cityValue]);
		setCityId(data[cities[cityValue]]);
		setViewport({...viewport, ...Locations[cities[cityValue]]});
		setSuggestionsActive((false))
	};

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div 
			className="autocomplete" 
			onClick={() => setSuggestionsActive((prev: boolean) => !prev)}
		>
			<div className="maps-input">{capitalizeFirstLetter(cityName)}</div>
			<div className="drop-button-img">
				<svg height="20">
					<path 
						fill="rgba(255, 255, 255, 1)"
						d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
					/>
				</svg>
			</div>
			{suggestionsActive && 
				<Suggestions 
					suggestions={suggestions} 
					suggestionIndex={suggestionIndex} 
					handleClick={handleClick}
				/>
			}
		</div>
	)
}

CityDropdown.displayName="CityDropdown";