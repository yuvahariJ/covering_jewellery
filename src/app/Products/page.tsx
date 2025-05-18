"use client"

import { Box,Typography,useMediaQuery } from '@mui/material'
import React from 'react'
import PRoductInfo from '../Components/ProductInfo';
import { toRem } from '../Components/Utils';


import image1 from "../../../public/Earing_1.jpg";
import image2 from "../../../public/Earing_2.jpg";
import image3 from "../../../public/Earing_3.jpg";
import image4 from "../../../public/Earing_4.jpg";
import image5 from "../../../public/Earing_5.jpg";
import image6 from "../../../public/Earing_6.jpg";
import image7 from "../../../public/Earing_7.jpg";
import image8 from "../../../public/Earing_8.jpg";

interface ProductDetailsProps{
  instock?: number;
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
  const data:ProductDetailsProps[] = [
      {
        bannerImage: image2,
        price: "80",
        originalPrice: "100",
        instock: 2,
      },
      {
        bannerImage: image1,
        price: "80",
        originalPrice: "100",
      },
      {
        bannerImage: image3,
        price: "80",
        originalPrice: "100",
        instock: 2,
      },
      {
        bannerImage: image4,
        price: "80",
        originalPrice: "100",
        instock: 2,
      },
      {
        bannerImage: image5,
        price: "80",
        originalPrice: "120",
        instock: 2,
      },
      {
        bannerImage: image6,
        price: "80",
        originalPrice: "120",
      },
      {
        bannerImage: image7,
        price: "80",
        originalPrice: "120",
      },
      {
        bannerImage: image8,
        price: "80",
        originalPrice: "120",
      },
    ]
  
  const earingProductData = data;
  // const [earingProductData, setEaringProductData] = useState<ProductDetailsProps[]>([]);
      // useEffect(() => {
      //   // if (productUid) {
      //     fetch("/api/Earing")
      //       .then((res) => res.json())
      //       .then((data) => setEaringProductData(data.data.data))
      //       .catch((err) => console.error("Fetch error:", err));
      //   // }
      // }, []);
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
          <PRoductInfo
            imageSrc={"https://yuvaharij.github.io/covering_jewellery/Earing_2.jpg"}
            key={index}
            price={earing?.price}
            actualPrice={earing?.originalPrice}
            instock={earing?.instock??1}
          />
        )
      })}
        </Box>
        </Box>
      </>
  )
}

export default ProductList