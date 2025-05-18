"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider, { SliderBannerProps } from "../Slider";
import Image from "../Image";
import { toRem } from "../Utils";
import ProductTile from "../ProductTitle";

export interface SliderWithOneCardPorps {
  sliderBanner: SliderBannerProps;
  imageBanner: {
    image: string;
  };
  heading: string;
  productUid: string;
}
const SliderWithOneCard = (props: SliderWithOneCardPorps) => {
  console.log("SliderWithOneCard", props);
  const theme = useTheme();
  const isMeduiumScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const { sliderBanner, imageBanner, heading, productUid } = props;
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    if (productUid) {
      fetch("/api/bannerItem")
        .then((res) => res.json())
        .then((data) => setProductData(data.data.data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [productUid]);

  console.log(productData,"why it is");
  
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setInnerWidth(window.innerWidth));
    })
  return (
    <>
      {heading && (
        <Typography
          sx={{ padding: `${toRem(12)} ${toRem(0)}`, fontWeight: 600 }}
        >
          {heading}
        </Typography>
      )}
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "grid",
          },
          gridTemplateColumns: "75% 25%",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display:"flex",
          }}
        >
          {sliderBanner?.bannerImages && <Slider {...sliderBanner} />}
          {productUid && (
            <>
              {productData?.map((product,index) => {
                return <ProductTile
                  variant="imgaeTitle"
                  image={product?.bannerImage}
                  title={product.price}
                  height={sliderBanner?.height}
                key={index}
                />;
              })}
            </>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Image
            src={imageBanner?.image}
            width={
              window?.innerWidth
                ? isMeduiumScreen
                  ? innerWidth - 1000
                  : innerWidth
                : 0
            }
            alt="image"
            height={sliderBanner?.height}
          />
        </Box>
      </Box>
    </>
  );
};

export default SliderWithOneCard;
