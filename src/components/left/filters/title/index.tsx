// App imports
import { FiltrosSvg } from '../../paths/filtros';

export const FiltersTitle = () => {
	return (
		<div>
			<div className="filters-title">
				<FiltrosSvg fill={"rgba(0, 0, 0, 1)"}/>
				<div>Filtros</div>
			</div>
			<div className="filters-subtitle">
				Use os filtros para descobrir terrenos com as características desejadas!
			</div>
		</div>
	)
}

FiltersTitle.displayName="FiltersTitle";