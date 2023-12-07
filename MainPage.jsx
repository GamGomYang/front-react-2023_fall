import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import BrandModel from './BrandButton';
import PopularModels from './MostPopular';
import MidBanner from './MidBanner';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#F6F2EE',
    },
  },
});

export default function Album() {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setContainers(data);
        }
      })
      .catch((error) => console.error('데이터 불러오기 에러:', error));


    return () => {
      isMounted = false;
      setContainers([]);
    };
  }, []);

  return (




    <ThemeProvider theme={defaultTheme}>

      <MidBanner />
      <CssBaseline />
      <AppBar position="relative" />
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>

          </Typography>
        </Container>

        <BrandModel />

        <PopularModels />



        <MidBanner />

        <Container sx={{ py: 8, display: 'flex', flexDirection: 'column', overflowX: 'auto' }} maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            나의 아이템
          </Typography>
          <Grid container spacing={4} wrap="nowrap">
            {containers.map((content, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image={content.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="h2"
                      sx={{
                        alignItems: 'center',
                        color: '#333',
                        display: 'flex',
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '-.07px',
                        lineHeight: '16px',
                        marginBottom: '2px',
                      }}
                    >
                      {content.brand} {content.name}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="h2">
                      {parseInt(content.price).toLocaleString('en-US')}원
                      <span
                        style={{
                          color: 'white',
                          backgroundColor: content.percent.includes('-')
                            ? 'rgb(239, 98, 83)'
                            : 'rgb(65, 185, 121)',
                          padding: '0.2em 0.5em',
                          borderRadius: '0.3em',
                        }}
                      >
                        {`${content.percent}%`}
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            </Grid>
          </Container>
  
        
        </Box>
      </ThemeProvider>
    );
  }