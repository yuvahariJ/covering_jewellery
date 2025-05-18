import React from 'react'
import { Box, Typography } from "@mui/material";
import { toRem } from '../Utils';
import Image from '../Image';

interface ProductTileProps{
    variant: "imgaeTitle";
  image: string;
  title: string;
  height: number;
}
const ProductTile = (props: ProductTileProps) => {
  const { image, title, height } = props;
  
  return (
      <Box
          sx={{
        width: toRem(216),
        height:height?toRem(height) :toRem(432),
        background: "blue",
        display: "flex",
        flexDirection: "column",
        gap: toRem(16),
            padding:toRem(16),
      }}
      
      >
      <Image
        src={image}
        alt='productImage'
        style={{
          minHeight:toRem(120)
        }}
        width={100}
        height={100}
      />   
      <Box sx={{
        alignItems: "center",
        textAlign:"center"
      }}>
        <Typography>₹{title}</Typography>
      </Box>
    </Box>
  )
}

export default ProductTile