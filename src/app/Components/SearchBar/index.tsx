import { Box } from '@mui/material'
import React from 'react'
import { Theme } from '../Theme'
import { toRem } from '../Utils'
import TextInput from '../TextInput'
import SearchIcon from '@mui/icons-material/Search';
import Button from '../Button'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


const SearchBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: Theme.commerce.blue,
        width: "100%",
        
        display: "flex",
        gap: toRem(20),
        
      }}
    >
      <Box
        sx={{
          p: `${toRem(12)} ${toRem(24)}`,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap:toRem(40),
          }}
        >
        <Box
          sx={{
            borderRadius: "50%",
            p: toRem(4),
            backgroundColor:Theme.commerce.white,
          }}
        >
          OM
          </Box>
          <TextInput
            sx={{
              minWidth: "25%"
            }}
            placeHolder="Search for Products , Brands and more"
            endIcon={<SearchIcon sx={{
              color:Theme.commerce.blue,
            }} />}
          />
          <Button label='login' variant="outlined" />
          <Button label='Become a seller' variant="text"
            hideInMobile
          />
          <Button label='More' endIcon={<ArrowDropDownSharpIcon />} variant="text" />
          <Button label='Cart' startIcon={<ShoppingCartSharpIcon/>} variant='text' hideInMobile />
        </Box>
        
      </Box>
      
    </Box>
  )
}

export default SearchBar