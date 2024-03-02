import React from 'react';
import { Box, Fade, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CompanyLogo from '../assets/mediTaskProLogo.png';

const Logo = styled('img')({
  width: 500,
  height: 500,
});

const SplashScreen = ({ logoVisible }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#25243E',
    }}
  >
    <Fade in={logoVisible} timeout={1000}>
      <Box>
        <Logo src={CompanyLogo} alt="Logo" />
        {/* <Typography sx={{ color: 'white', mt: 2, fontSize: 15 }}>
          Your tagline goes here
        </Typography> */}
      </Box>
    </Fade>
  </Box>
);

export default SplashScreen;
