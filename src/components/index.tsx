// App imports
import { Left } from './left';
import { Maps } from './maps';
import { Right } from './right';
import './styles.scss';

export const Main = () => {
	return (
		<div className="main">
			<Left/>
			<Maps/>
			<Right/>
		</div>
	)
}

Main.displayName="Main";