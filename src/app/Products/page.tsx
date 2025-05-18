"use client"

import { Box,Typography,useMediaQuery } from '@mui/material'
import React,{useState,useEffect} from 'react'
import PRoductInfo from '../Components/ProductInfo';
import { toRem } from '../Components/Utils';


interface ProductDetailsProps{
  instock: number;
  originalPrice: string;
  price: string;
  bannerImage: {
    src: string;
  }
}
const ProductList = () => {
  
    
    const isMobileSmall = useMediaQuery('(max-width:450px)');
  const isMobileMedium = useMediaQuery('(max-width:650px)');
  const isTabletMedium = useMediaQuery('(max-width:1100px)');
  const [earingProductData, setEaringProductData] = useState<ProductDetailsProps[]>([]);
      useEffect(() => {
        // if (productUid) {
          fetch("/api/Earing")
            .then((res) => res.json())
            .then((data) => setEaringProductData(data.data.data))
            .catch((err) => console.error("Fetch error:", err));
        // }
      }, []);
    console.log(earingProductData,"eraning minni");
  return (
    <>
      <Box
      padding={toRem(12)}
      >
      <Box>
        <Typography component="h2"
          sx={{
            fontSize: toRem(20),
            fontWeight: 600,
            p:toRem(8)
          }}
        >
          Earings
        </Typography>
      </Box>
    <Box
      sx={{
        // background: "green",
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns:
        
          isMobileSmall?"50% 50%":isMobileMedium?"33.33% 33.33% 33.33%":isTabletMedium?"25% 25% 25% 26%":"20% 20% 20% 20% 20%",
        gridColumnGap: toRem(8),
        gridRowGap:toRem(8),
        // margin:toRem(4),
      }}
    >
      {earingProductData?.map((earing,index) => {
        return (
          <><PRoductInfo
            imageSrc={earing?.bannerImage?.src}
            key={index}
            price={earing?.price}
            actualPrice={earing?.originalPrice}
            instock={earing?.instock}
          /></>
        )
      })}
        </Box>
        </Box>
      </>
  )
}

export default ProductList