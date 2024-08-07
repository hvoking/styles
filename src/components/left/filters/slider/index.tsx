// React imports
import { useEffect } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Foreground } from './foreground';
import { Marker } from './marker';
import './styles.scss';

// Context imports
import { useAreas } from '../../../context/filters/areas';
import { useSliderSizes } from '../../../context/sizes/slider';

import * as d3 from 'd3';

export const Slider = () => {
  const { innerWidth, innerHeight } = useSliderSizes();
  const { 
    minBound, maxBound, 
    setParcelAreaMin, setParcelAreaMax, 
    parcelAreaFrom, setParcelAreaFrom, 
    parcelAreaTo, setParcelAreaTo 
  } = useAreas();

  const xScale: any = d3.scaleLinear()
    .domain([minBound, maxBound])
    .range([0, innerWidth]);

  useEffect(() => {
    maxBound < parcelAreaTo && setParcelAreaTo(maxBound);
    maxBound < parcelAreaFrom && setParcelAreaFrom(maxBound);
  }, [ maxBound ]);

  useEffect(() => {
    setParcelAreaMax(parcelAreaTo)
  }, [parcelAreaTo]);

  useEffect(() => {
    setParcelAreaMin(parcelAreaFrom)
  }, [parcelAreaFrom]);

  return (
    <SVGWrapper>
      <Marker 
        xScale={xScale} 
        innerWidth={innerWidth}
        innerHeight={innerHeight}
        leftPosition={parcelAreaFrom}
        setLeftPosition={setParcelAreaFrom}
        setRightPosition={setParcelAreaTo}
        rightPosition={parcelAreaTo}
        minBound={minBound}
        maxBound={maxBound}
      />
      <Foreground
        xScale={xScale}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
        leftPosition={parcelAreaFrom}
        rightPosition={parcelAreaTo}
        setLeftPosition={setParcelAreaFrom}
        setRightPosition={setParcelAreaTo}
        minBound={minBound}
        maxBound={maxBound}
      />
    </SVGWrapper>
  )
}

Slider.displayName="Slider";