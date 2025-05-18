import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Theme } from "../Theme";
import { toRem } from "../Utils";

const TextInput = (props: { sx: SxProps; placeHolder?: string,endIcon:React.ReactNode}) => {
  const { sx, placeHolder,endIcon } = props;

  return (
    <TextField
      sx={{
        background: Theme.commerce.white,
        borderRadius: toRem(3),
        "& input": {
          padding: `${toRem(2)} ${toRem(8)}`,
              },
              "& fieldset": {
            border:"none",
        },
        ...sx,
      }}
      placeholder={placeHolder}
      slotProps={{
        input: {
          endAdornment:endIcon,
        }
      }}
    />
  );
};

export default TextInput;
