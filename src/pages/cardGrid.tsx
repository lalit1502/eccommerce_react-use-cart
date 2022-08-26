import * as React from 'react';
import { Card , CardActions , CardContent , CardMedia , Button , Typography , Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { getCategory , addToCart } from '../data/data';
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";

interface ImgMediaCardProps { 
    id:string;
    imgurl?: string;
    title: string;
    description: string;
    price: number;
    category: string | number;
  }

export default function ImgMediaCard(props:ImgMediaCardProps) {
  const { addItem } = useCart();
  const showAlert = () => {
    Swal.fire({
      text: "Product Added To Cart Successfully",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      addItem(props)
    });
  }
  return (
    <Grid item xs={6} md={4}>
    <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={require('../assets/images/'+props.imgurl)}
        />
        <CardContent>
            <Link to={`/single/${props.id}`} >
            <Typography gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
            </Link>
            <Typography gutterBottom variant="body2" component="div">
              Category: <Link to={`/category/${props.category}`} >{getCategory(props.category)}</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.description.substring(0, 90)+"..."}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
            Price :  {props.price} $
            </Typography>
        </CardContent>
        <CardActions className='addtocarddiv'>
            {/* <Button size="small" onClick={()=> addToCart(5) }>Add To Cart</Button> */}
            <Button variant="contained" color="secondary" onClick={() => showAlert()} >Add to Cart</Button>  
        </CardActions>
    </Card>
    </Grid>
  );
}