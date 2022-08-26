import * as React from 'react';
import {  Typography , Container , Grid } from '@mui/material';
import {  getProductByCategory } from '../data/data';
import { setting } from "../components/setting";
import CardGrid from './cardGrid';
import { useParams } from "react-router-dom";

export default function ImgMediaCard() {
  let params:any  = useParams();
  const Productslist = getProductByCategory(parseInt(params.id));
  console.log(Productslist); 
  return (
    <Container maxWidth="lg"sx={{ marginTop: '100px' }} >
        <Typography gutterBottom variant="h2" component="div">
            Products
        </Typography>
     <Grid container spacing={2} sx={{ margin: '20px'}}>
         {Productslist.map((products) => {
           return (
             <>
               < CardGrid   id={products.id.toString()} imgurl={products.img} title={products.title} description={products.description} price={products.price} category={products.category}  />
             </>
           )
         })}
     </Grid>
    </Container>
  );
}