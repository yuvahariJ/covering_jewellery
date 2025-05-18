// "use client"

import { Box, Typography } from "@mui/material";
import React from "react";
import PRoductInfo from "../Components/ProductInfo";
import { toRem } from "../Components/Utils";
import "./index.css";

interface ProductDetailsProps {
  instock?: number;
  originalPrice: string;
  price: string;
  bannerImage: string;
}
const ProductList = () => {
  // const isMobileSmall = useMediaQuery('(max-width:450px)');
  // const isMobileMedium = useMediaQuery('(max-width:650px)');
  // const isTabletMedium = useMediaQuery('(max-width:1100px)');
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
  // const [earingProductData, setEaringProductData] = useState<ProductDetailsProps[]>([]);
  // useEffect(() => {
  //   // if (productUid) {
  //     fetch("/api/Earing")
  //       .then((res) => res.json())
  //       .then((data) => setEaringProductData(data.data.data))
  //       .catch((err) => console.error("Fetch error:", err));
  //   // }
  // }, []);
  return (
    <>
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
          className="is-desktop"
          sx={{
            // background: "green",

            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "20% 20% 20% 20% 20%",

            // isMobileSmall?"50% 50%":isMobileMedium?"33.33% 33.33% 33.33%":isTabletMedium?"25% 25% 25% 26%":"20% 20% 20% 20% 20%",
            gridColumnGap: toRem(8),
            gridRowGap: toRem(8),
            // margin:toRem(4),
          }}
        >
          {earingProductData?.map((earing, index) => {
            return (
              <PRoductInfo
                imageSrc={
                  "https://yuvaharij.github.io/covering_jewellery/Earing_2.jpg"
                }
                key={index}
                price={earing?.price}
                actualPrice={earing?.originalPrice}
                instock={earing?.instock ?? 1}
              />
            );
          })}
        </Box>

        {/* isTabletMedium */}
        <Box
          className="is-tablet-medium"
          sx={{
            // background: "green",

            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",

            // isMobileSmall?"50% 50%":isMobileMedium?"33.33% 33.33% 33.33%":isTabletMedium?"25% 25% 25% 26%":"20% 20% 20% 20% 20%",
            gridColumnGap: toRem(8),
            gridRowGap: toRem(8),
            // margin:toRem(4),
          }}
        >
          {earingProductData?.map((earing, index) => {
            return (
              <PRoductInfo
                imageSrc={
                  "https://yuvaharij.github.io/covering_jewellery/Earing_2.jpg"
                }
                key={index}
                price={earing?.price}
                actualPrice={earing?.originalPrice}
                instock={earing?.instock ?? 1}
              />
            );
          })}
        </Box>

        {/* isMobileMedium */}
        <Box
          className="is-mobile-medium"
          sx={{
            // background: "green",

            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "33.33% 33.33% 33.33%",

            // isMobileSmall?"50% 50%":isMobileMedium?"33.33% 33.33% 33.33%":isTabletMedium?"25% 25% 25% 26%":"20% 20% 20% 20% 20%",
            gridColumnGap: toRem(8),
            gridRowGap: toRem(8),
            // margin:toRem(4),
          }}
        >
          {earingProductData?.map((earing, index) => {
            return (
              <PRoductInfo
                imageSrc={
                  "https://yuvaharij.github.io/covering_jewellery/Earing_2.jpg"
                }
                key={index}
                price={earing?.price}
                actualPrice={earing?.originalPrice}
                instock={earing?.instock ?? 1}
              />
            );
          })}
        </Box>
        {/* isMobileSmall */}
        <Box
          className="is-mobile-small"
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "50% 50%",
            gridColumnGap: toRem(8),
            gridRowGap: toRem(8),
          }}
        >
          {earingProductData?.map((earing, index) => {
            return (
              <PRoductInfo
                imageSrc={
                  "https://yuvaharij.github.io/covering_jewellery/Earing_2.jpg"
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
    </>
  );
};

export default ProductList;
