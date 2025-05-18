"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import Image from "../Image";
import { toRem } from "../Utils";
import { Theme } from "../Theme";
import Button from "../Button";
import { ArrowBackIosOutlined, ArrowForwardIos } from "@mui/icons-material";

export interface SliderBannerProps {
  height: number;
  bannerImages: {
    image: string;
  }[];
  autoPlay?: boolean;
  heading?: string;
}
const Slider = (props: SliderBannerProps) => {
  const { height, bannerImages, autoPlay = true, heading } = props;
  console.log(props);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (autoPlay) {
      const timmer = setInterval(() => {
        setActive((pre) => {
          const nextSlide = (pre + 1) % bannerImages?.length;

          if (boxRef?.current) {
            boxRef.current.style.transform = `translateX(-${nextSlide * 100}%)`;
          }
          return nextSlide;
        });
      }, 5000);
      return () => clearInterval(timmer);
    }
  }, [bannerImages?.length]);

  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const handleNextClick = () => {
    setActive((pre) => {
      let nextSlide = pre + 1;
      if (nextSlide >= (bannerImages?.length)) {
        nextSlide = 0;
      }
      if (boxRef?.current) {
        boxRef.current.style.transform = `translateX(-${nextSlide * 100}%)`;
      }
      return nextSlide;
    });
  };
  const handlePreviousClick = () => {
    setActive((pre) => {
      let nextSlide = pre - 1;
      if (nextSlide < 0) {
        nextSlide = bannerImages?.length-1;
      }
      if (boxRef?.current) {
        boxRef.current.style.transform = `translateX(-${nextSlide * 100}%)`;
      }
      return nextSlide;
    });
  };

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
          width: "100%",
          height: toRem(height + 40),
          gap: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {!autoPlay && (
          <Button
            label=""
            sx={{
              position: "absolute",
              zIndex: 4,
              top: "35%",
              minWidth: toRem(40),
            }}
            startIcon={<ArrowBackIosOutlined />}
            onClick={() => handleNextClick()}
          />
        )}
        <Box
          sx={{
            display: "flex",
            width: `${bannerImages?.length * 100}%`,
            transition: "transform 0.5s ease-in-out",
          }}
          ref={boxRef}
        >
          {bannerImages?.map((banner, index) => {
            return (
              <Box
                sx={{
                  minWidth: "100%",
                }}
                key={index}
              >
                <Image
                  src={banner?.image}
                  width={windowWidth ?? 0}
                  height={height ?? 0}
                  key={index}
                  alt="main-banner"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            );
          })}
        </Box>
        {!autoPlay && (
          <Button
            onClick={() => handlePreviousClick()}
            label=""
            sx={{
              position: "absolute",
              zIndex: 4,
              top: "35%",
              minWidth: toRem(40),
              right: 0,
            }}
            endIcon={<ArrowForwardIos />}
          />
        )}
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          {Array.from({ length: bannerImages?.length }).map((_, index) => (
            <CircleSharpIcon
              key={index}
              sx={{
                color:
                  active === index
                    ? Theme?.commerce?.blue
                    : Theme?.commerce?.grey,
                width: toRem(12),
                height: toRem(12),
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Slider;
