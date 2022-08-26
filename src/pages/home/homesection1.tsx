import * as React from 'react';
//import { Card , CardActions , CardContent , CardMedia , Button  } from '@mui/material';
import { Typography , Container , Grid ,Box  } from '@mui/material';
import CardGrid from '../cardGrid';
import { storeProducts } from '../../data/data';
import { setting } from "../../components/setting"

export default function ImgMediaCard() {
  //console.log(storeProducts)
  return (
    <Container maxWidth="lg"sx={{ marginTop: '100px' }} >
       <Typography gutterBottom variant="h2" component="div">
            Products
        </Typography>
        {/*<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
  </Box>*/}
        <Grid container spacing={2} sx={{ margin: '20px'}}>
            {storeProducts.map((products) => {
              return (
                <>
                  < CardGrid   id={products.id.toString()} imgurl={products.img} title={products.title} description={products.description} price={products.price } category={products.category}  />
                </>
              )
            })}
        </Grid>
    </Container>
    
  );
}
