import React from 'react'
import { Box } from "@mui/material";
import MiniFullLengthBanner, { MiniFullLengthBannerProps } from '../MiniBanner';
import Slider, { SliderBannerProps } from '../Slider';
// import SliderWithOneCard, { SliderWithOneCardPorps } from '../SliderWithOneCard';

interface RenderComponentsProps{
  renderComponent: {
    MiniFullLengthBanner?: MiniFullLengthBannerProps,
    SliderBanner?: SliderBannerProps;
    // SliderWithOneCard?: SliderWithOneCardPorps;
  }[];
}
const RenderComponents = (props: RenderComponentsProps) => {
  const { renderComponent } = props;
  return (
    <Box>
      {renderComponent?.map((component,index) => {
        if (component?.MiniFullLengthBanner) {
          return (
            <MiniFullLengthBanner  key={index} {...component?.MiniFullLengthBanner}/>
          )
        }
        if (component?.SliderBanner) {
          return (
            <Slider key={index} {...component.SliderBanner} />
          )
        }
        // if (component?.SliderWithOneCard) {
          
        //   return <SliderWithOneCard key={index} {...component?.SliderWithOneCard} />
        // }
        return null;
      })}
    </Box>
  )
}

export default RenderComponents