// React imports
import { useCallback } from 'react';

// App imports
import { Legend } from './legend';

// Third-party imports
import * as d3 from 'd3';

export const Marker = ({ 
  xScale, 
  innerWidth, innerHeight, 
  leftPosition, setLeftPosition, 
  rightPosition, setRightPosition,
  minBound, maxBound,
}: any) => {
  const circleRadius = 8;

  const onDragLeft = (event: any) => {
      const x = xScale.invert(event.x);
      const boundedX = x > rightPosition ? rightPosition : x < minBound ? minBound : x;
      setLeftPosition(+boundedX);
  }

  const onDragRight = (event: any) => {
      const x = xScale.invert(event.x);
      const boundedX = x > maxBound ? maxBound : x < leftPosition ? leftPosition : x;
      setRightPosition(+boundedX);
  }

  const circleLeft = useCallback((node: any) => {
      const drag = d3.drag()
          .on('drag', onDragLeft)
      d3.select(node).call(drag);
  }, [ rightPosition ]);

  const circleRight = useCallback((node: any) => {
    const drag = d3.drag()
        .on('drag', onDragRight)
    d3.select(node).call(drag);
  }, [ leftPosition ]);

  return (
      <g>
        <Legend 
          xScale={xScale} 
          currentPosition={leftPosition}
        />
        <Legend 
          xScale={xScale} 
          currentPosition={rightPosition}
        />
        <rect
          rx={5}
          ry={5}
          y={circleRadius / 2}
          width={innerWidth}
          height={circleRadius}
          fill="rgba(126, 126, 132, 1)"
        />
        <rect
          x={xScale(leftPosition)}
          y={circleRadius / 2}
          width={xScale(rightPosition) - xScale(leftPosition)}
          height={circleRadius}
          fill="rgba(255, 255, 255, 1)"
        />
        <circle 
          ref={circleLeft}
          cx={xScale(leftPosition)} 
          cy={circleRadius + 1} 
          r={circleRadius} 
          fill="rgba(43, 20, 120, 1)"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth={1}
        >
          
        </circle>
        <circle 
          ref={circleRight}
          cx={xScale(rightPosition)} 
          cy={circleRadius + 1} 
          r={circleRadius} 
          fill="rgba(43, 20, 120, 1)"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth={1}
        />
      </g>
    )
}