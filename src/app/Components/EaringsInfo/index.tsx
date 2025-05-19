import React from 'react'
import { Box, Typography } from "@mui/material";
import PRoductInfo from '../ProductInfo';
import { toRem } from "../Utils";

interface ProductDetailsProps {
  instock?: number;
  originalPrice: string;
  price: string;
  bannerImage: string;
}

const EaringInfo = () => {
  const data: ProductDetailsProps[] = [
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_2.jpg",
      price: "80",
      originalPrice: "100",
      instock: 2,
    },
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_1.jpg",
      price: "80",
      originalPrice: "100",
    },
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_3.jpg",
      price: "80",
      originalPrice: "100",
      instock: 2,
    },
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_4.jpg",
      price: "80",
      originalPrice: "100",
      instock: 2,
    },
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_5.jpg",
      price: "80",
      originalPrice: "120",
      instock: 2,
    },
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_6.jpg",
      price: "80",
      originalPrice: "120",
    },
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_7.jpg",
      price: "80",
      originalPrice: "120",
    },
    {
      bannerImage:
        "https://yuvaharij.github.io/covering_jewellery/Earing_8.jpg",
      price: "80",
      originalPrice: "120",
    },
  ];

  const earingProductData = data;
  return (
    <Box padding={toRem(12)}>
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontSize: toRem(20),
                  fontWeight: 600,
                  p: toRem(8),
                }}
              >
                Earings
              </Typography>
            </Box>
    
            {/* isdesktop */}
            <Box
              sx={{
    
                height: "100%",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "20% 20% 20% 20% 20%",
    
                gridColumnGap: toRem(8),
                gridRowGap: toRem(8),
                "@media (max-width:1110px)": {
                  gridTemplateColumns: "25% 25% 25% 25%",
                },
                "@media (max-width:650px)": {
                  gridTemplateColumns: "33.33% 33.33% 33.33%",
                },
                "@media (max-width:450px)": {
                  gridTemplateColumns: "50% 50%",
                },
    
              }}
            >
              {earingProductData?.map((earing, index) => {
                return (
                  <PRoductInfo
                    imageSrc={
                      earing?.bannerImage
                    }
                    key={index}
                    price={earing?.price}
                    actualPrice={earing?.originalPrice}
                    instock={earing?.instock ?? 1}
                  />
                );
              })}
            </Box>
          </Box>
  )
}

export default EaringInfo