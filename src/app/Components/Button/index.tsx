import React from "react";
import { Button as MuiButton,ButtonProps } from "@mui/material";
import { toRem } from "../Utils";
import { Theme } from "../Theme";

interface MuiButtonProps extends ButtonProps  {
    label: string;
    hideInMobile?: boolean;
};

const Button = (props: MuiButtonProps) => {
    const { label, variant = "contained",hideInMobile, ...rootProps } = props;
    const getBgColor = () => {
        switch (variant) {
            case "text": return null;
            case "outlined": return Theme.commerce.white;
            default: return null;
        }
    }
    const getColor = () => {
        switch (variant) {
            case "outlined": return Theme.commerce.blue;
            default: return Theme.commerce.white;
        }
    }
  return (
    <MuiButton
          sx={{
              p: toRem(2),
              minWidth: toRem(100),
              backgroundColor: getBgColor(),
              fontWeight: 600,
              borderRadius: 0,
              color: getColor(),
              ...(hideInMobile && {
                  display: {
                      xs: 'none',   // hidden on extra-small (mobile)
                      md: 'inline-flex', // visible on small screens and up (≥600px)
                  }
              })
          }}
          
        
          variant={variant}
          {...rootProps}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
