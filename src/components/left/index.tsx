// App  imports
import './styles.scss';

// Context imports
import { useSelectors } from '../context/left/selectors';

export const Left = () => {
	const { activeDraw, setActiveDraw } = useSelectors();
	
	return (
		<div className="sidebar-left">
			<img 
				src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
				alt="logo" 
				height="20px"
			/>
			<div style={{display: "grid", width: "100%", justifyItems: "center"}}>
			<img 
				src={process.env.PUBLIC_URL + "/static/watermark/data.svg"} 
				alt="watermark-data"
				width="80%"
			/>
			</div>
		</div>
	)
}

Left.displayName="Left";