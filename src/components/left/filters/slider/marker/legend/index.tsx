// App imports
import './styles.scss';

export const Legend = ({ xScale, currentPosition }: any) => {
	const legendWidth = 
		currentPosition > 99999 ? 25 : 
		currentPosition > 9999 ? 22 : 
		currentPosition > 999 ? 17 : 
		14;

	return (
		<>
		<polygon 
			points={`
				${xScale(currentPosition)} 19, 
				${xScale(currentPosition) - 6} 24, 
				${xScale(currentPosition) + 6} 24
			`}
			fill="rgba(126, 126, 132, 1)"
		/>
		<rect
			x={xScale(currentPosition) - legendWidth}
			y={24}
			rx={2}
			ry={2}
			width={legendWidth * 2}
			height={18}
			fill="rgba(23, 23, 32, 1)"
			strokeWidth={2}
			stroke="rgba(126, 126, 132, 1)"
		>
		</rect>
		<text 
			x={xScale(currentPosition)} 
			y={37} 
			fill="rgba(255, 255, 255, 1)" 
			textAnchor="middle"
			fontSize="0.8em"
		>
			{Math.round(currentPosition)}
		</text>
		</>
	)
}

Legend.displayName="Legend";