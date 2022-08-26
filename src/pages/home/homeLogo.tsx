import * as React from 'react';
//import { Card , CardActions , CardContent , CardMedia , Button  } from '@mui/material';
import { Typography , Container , Grid  } from '@mui/material';

export default function ImgMediaCard() {
  return (
    <Container maxWidth="lg"sx={{ marginTop: '100px' }} >
       <Typography gutterBottom variant="h2" component="div">
            Brands
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={2} >
                <img src={require('../../assets/images/brands.png')}  alt="Logo" style={{ width:'100%'}} />
            </Grid>
            <Grid item xs={2}>
               <img src={require('../../assets/images/brands1.png')}  alt="Logo" style={{ width:'100%'}} />
            </Grid>
            <Grid item xs={2}>
              <img src={require('../../assets/images/brands2.png')}  alt="Logo" style={{ width:'100%'}} />
            </Grid>
            <Grid item xs={2}>
              <img src={require('../../assets/images/brands3.png')}  alt="Logo" style={{ width:'100%'}}/>
            </Grid>
            <Grid item xs={2}>
              <img src={require('../../assets/images/brands1.png')}  alt="Logo" style={{ width:'100%'}} />
            </Grid>
            <Grid item xs={2}>
              <img src={require('../../assets/images/brands2.png')}  alt="Logo" style={{ width:'100%'}} />
            </Grid>
        </Grid>
    </Container>
    
  );
}