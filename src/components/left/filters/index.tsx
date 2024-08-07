// App imports
import { FiltersTitle } from './title';
import { Slider } from './slider';
import './styles.scss';

// Context imports
import { useAreas } from '../../context/filters/areas';
import { useHeights } from '../../context/filters/heights';

export const Filters = () => {
	const { setConstructedAreaFrom, setConstructedAreaTo } = useAreas();
	const { setHeights } = useHeights();

	const onChangeMin = (e: any) => {
		const currentValue = e.target.value;
		setConstructedAreaFrom(currentValue);
	}

	const onChangeMax = (e: any) => {
		const currentValue = e.target.value;
		setConstructedAreaTo(currentValue);
	}

	const onChangeHeight = (e: any) => {
		const currentValue = e.target.value;
		setHeights(currentValue);
	}

	return (
		<div className="filters-wrapper">
			<FiltersTitle/>
			<div>
				<div>Ferramentas de desenho</div>
			</div>
			<div>
				<div>Altura permitida</div>
				<div className="filters-inputs">
					<input 
						className="filter-input"
						type="text"
						placeholder="Altura"
						onChange={onChangeHeight}
					/>
				</div>
			</div>
			<div className="slider-wrapper">
				<div>Área total do lote m²</div>
				<Slider/>
			</div>
			<div>
				<div>Área construída das edificações m²</div>
				<div className="filters-inputs">
					<input 
						className="filter-input"
						type="text"
						placeholder="Mínimo"
						onChange={onChangeMin}
					/>
					<input 
						className="filter-input"
						type="text"
						placeholder="Máximo"
						onChange={onChangeMax}
					/>
				</div>
			</div>
		</div>
	)
}

Filters.displayName="Filters";