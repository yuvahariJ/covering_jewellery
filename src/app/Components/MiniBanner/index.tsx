"use client"

import { Box, Typography } from "@mui/material";
import React, {useState,useEffect} from "react";
import { Theme } from "../Theme";
import Image from "../Image";
import { toRem } from "../Utils";

export interface MiniFullLengthBannerProps {
  banner: {
    bannerImage?: string;
    title: string;
  }[];
}

const MiniFullLengthBanner = (props: MiniFullLengthBannerProps) => {
  console.log("props in MiniFullLengthBanner", props);

  const [productData, setProductData] = useState([]);
    useEffect(() => {
      // if (productUid) {
        fetch("/api/Earing")
          .then((res) => res.json())
          .then((data) => setProductData(data.data.data))
          .catch((err) => console.error("Fetch error:", err));
      // }
    }, []);
  console.log(productData,"eraning minni");
  
  return (
    <Box
      sx={{
        backgroundColor: Theme.commerce.white,
        width: "100%",
        // overflowX: "scroll",
        // display: "flex",
        display: "grid",
        gridTemplateColumns: {
          xs: "auto auto",
          sm:"auto auto auto auto",
        },
        gap: toRem(8),
        alignItems: "center",
        justifyContent: "flex-start",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome, Safari
        },
      }}
    >
      {/* {props?.banner?.map((items, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: toRem(8),
              width: toRem(150),
              height: toRem(150),
              p: toRem(8),
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={`${items?.bannerImage}?q=100`}
                alt="banner-image"
                width={100}
                height={100}
              />
            </Box>

            <Typography
              fontWeight={600}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {items?.title}
            </Typography>
          </Box>
        );
      })} */}
      {productData?.map((items, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: toRem(8),
              width: toRem(150),
              height: toRem(150),
              p: toRem(8),
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: toRem(200),
                height:toRem(65),
              }}
            >
              <Image
                src={`${items?.bannerImage?.src||items?.bannerImage}`}
                alt="banner-image"
                width={300}
                height={300}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: toRem(12),
                alignItems: "center",
                justifyContent:"center",
              }}
            >
              
            <Typography
              fontWeight={500}
              sx={{
                display: "flex",
    fontSize: toRem(16),
    color: "#212121"
              }}
            >
              Rs .{items?.price}
              </Typography>
              
              <Typography
              fontWeight={300}
              sx={{
                display: "flex",
    fontSize: toRem(12),
                color: "#212121",
                textDecoration: "line-through",
                
              }}
            >
              Rs .{items?.originalPrice}
            </Typography>
              </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default MiniFullLengthBanner;
