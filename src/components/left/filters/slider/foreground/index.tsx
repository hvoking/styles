// React imports
import { useRef, useCallback } from 'react';

// Third-party imports
import * as d3 from 'd3';

export const Foreground = ({ 
    xScale, 
    minBound, maxBound,
    innerWidth, innerHeight, 
    leftPosition, setLeftPosition, 
    rightPosition, setRightPosition,
}: any) => {
    const currentDragRef = useRef<any>(null);

    const onDragStart = (event: any) => {
        const x = xScale.invert(event.x);

        const activateRight = Math.abs(rightPosition - x);
        const activateLeft = Math.abs(leftPosition - x);
        
        if (activateRight < activateLeft) {
            currentDragRef.current = 'right';
        } else {
            currentDragRef.current = 'left';
        }
        const boundedLeft = 
            x < minBound ? minBound : 
            x > rightPosition ? rightPosition : 
            x;
        const boundedRight = 
            x > maxBound ? maxBound : 
            x < leftPosition ? leftPosition : 
            x;
        if (currentDragRef.current === 'left') {
            setLeftPosition(+boundedLeft);
        } else {
            setRightPosition(+boundedRight);
        }
    }

    const onDrag = (event: any) => {
        const x = xScale.invert(event.x);
        const boundedLeft = 
            x < minBound ? minBound : 
            x > rightPosition ? rightPosition : 
            x;
        const boundedRight = 
            x > maxBound ? maxBound : 
            x < leftPosition ? leftPosition : 
            x;
        if (currentDragRef.current === 'left') {
            setLeftPosition(+boundedLeft);
        } else {
            setRightPosition(+boundedRight);
        }
    }

    const barsRef = useCallback((node: any) => {
        const drag = d3.drag()
            .on('start', onDragStart)
            .on('drag', onDrag);
        d3.select(node).call(drag);
    }, [ rightPosition, leftPosition ]);

	return (
        <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            ref={barsRef}
            style={{cursor: "ew-resize"}}
        />
	)
}

Foreground.displayName="Foreground"