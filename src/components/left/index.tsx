// App  imports
import { PlaceSvg } from './paths/place';
import { TutorialSvg } from './paths/tutorial';
import { FiltrosSvg } from './paths/filtros';
import { CamadasSvg } from './paths/camadas'; 
import { ParceirosSvg } from './paths/parceiros';
import { LabSvg } from './paths/lab';
import { FeedbackSvg } from './paths/feedback';
import { SuporteSvg } from './paths/suporte';
import { Filters } from './filters';
import './styles.scss';

// Context imports
import { useSelectors } from '../context/left/selectors';

export const Left = () => {
	const { activeDraw, setActiveDraw } = useSelectors();
	
	return (
		<div className="sidebar-left">
			{activeDraw && <Filters/>}
			<PlaceSvg/>
			<div className="place-description">
				Plataforma de Desenvolvimento Urbano e Imobiliário
			</div>
			<div className="tutorial-wrapper">
				<TutorialSvg/>
				<div>Tutorial</div>
			</div>
			<div className="props-wrapper">Prospecção</div>
			<div 
				className="filtros-wrapper"
				onClick={() => setActiveDraw((prev: boolean) => !prev)}
			>
				<FiltrosSvg fill="rgba(255, 255, 255, 1)"/>
				<div>Filtros</div>
			</div>
			<div className="filtros-wrapper">
				<CamadasSvg/>
				<div>
					<div className="camadas-wrapper">
						Camadas
					</div>
				</div>
			</div>
			<div className="filtros-wrapper">
				<div></div>
				<div>Mercado</div>
			</div>
			<div className="filtros-wrapper">
				<div></div>
				<div>Urbanísticas</div>
			</div>
			<div className="ecossistema-wrapper">Ecossistema</div>
			<div className="filtros-wrapper">
				<ParceirosSvg/>
				<div>Parceiros</div>
			</div>
			<div className="filtros-wrapper">
				<LabSvg/>
				<div>Lab</div>
			</div>
			<div className="feedback-wrapper">
				<FeedbackSvg/>
				<div>Feedback</div>
			</div>
			<div className="filtros-wrapper">
				<SuporteSvg/>
				<div>Suporte</div>
			</div>
		</div>
	)
}

Left.displayName="Left";