import React from 'react';
import Img,{ImageProps} from 'next/image'


const Image = (props: ImageProps) => {
    const {src,...rootPorps}=props;
  return (
      <Img
          src={src}
          {...rootPorps}
      />
  )
}

export default Image