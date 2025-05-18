import React from "react";
import { Box, Typography } from "@mui/material";
import { toRem } from "../Utils";
// import StarHalfIcon from '@mui/icons-material/StarHalf';

interface productInfoProps {
  imageSrc: string;
  price: string;
  actualPrice: string;
  instock: number;
}

const PRoductInfo = (props: productInfoProps) => {
  const { imageSrc,price,actualPrice,instock } = props;
  return (
    <Box
      sx={{
        // backgroundColor: "blue",
        alignItems: "center",
        display: "flex",
        gap:toRem(8),
        justifyContent: "center",
        minHeight: toRem(100),
        padding: toRem(8),
        flexDirection: "column",
        borderRadius: toRem(8),
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Box
        maxHeight="200px"
        sx={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden", // crop overflow
          width:"100%",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "orange",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={imageSrc} width="100%" height="auto"></img>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: toRem(12),
          
        }}
      >
        <Typography
          sx={{
            fontSize:toRem(14),
            fontWeight:600,
          }}
        >Rs. {price}</Typography>
        <Typography
          sx={{
            textDecoration: "line-through",
              fontSize:toRem(12),
              fontWeight:300,
          }}
        >₹{actualPrice}
        </Typography>
        
        {/* <Box component="span">
          <StarHalfIcon fontSize="small" sx={{ color: "#fbbc04" }} />
        </Box> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography sx={{
          color: "rgb(199, 0, 85)",
          fontSize:toRem(12),
          fontWeight:700,
        }}>
          {`Only ${instock||1} Left`}
        </Typography>
      <Typography
          sx={{
              color: "#388e3c",
              fontSize:toRem(12),
              fontWeight:300,
          }}
        >
          16% off
        </Typography>
        
      </Box>
    </Box>
  );
};

export default PRoductInfo;
