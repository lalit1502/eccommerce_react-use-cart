import * as React from 'react';
import { Card , Typography , Container , Grid , CardMedia , Button , Box  } from '@mui/material';
import { getCategory , getProduct } from '../data/data';
import { Link } from 'react-router-dom';
import { setting } from "../components/setting"
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
interface ProductsProps {
  id: string;
  title: string;
  imgurl:string;
  description: string;
  price: number;
  category: string | number;
}

export default function ImgMediaCard() {
  let params:any  = useParams();
  const products = getProduct(parseInt(params.id));
  const { addItem } = useCart();
  //console.log(products.id);
  const product1:ProductsProps = {
      id:products.id.toString(),
      imgurl:products.img,
      title:products.title,
      description:products.description,
      price:products.price,
      category:products.category
    }

    const showAlert = () => {
      Swal.fire({
        text: "Product Added To Cart Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        addItem(product1)
      });
    }

  
  return (
    <>
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
           <Grid item xs={12} md={6}>
              <Card>
                <CardMedia 
                  component="img"
                  alt="green iguana"
                  image={require('../assets/images/'+products.img)}            
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography color="primary" variant="h3" component="span">{products.title}</Typography>
                    {/*<Typography variant="h3" component="span">Title2</Typography>*/}
                  </Typography>
                  <Typography variant="h6" component="h3" gutterBottom={true} sx={{textAlign:"left"}}>
                     Category : <Link to={`/category/${products.category}`} > {getCategory(products.category)} </Link>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" paragraph={true} sx={{textAlign:"left"}} >{products.description}</Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"left"}} >
                      Price : {products.price + setting.unit}
                  </Typography>
                  <Box mt={3} sx={{textAlign:"left"}} > 
                  <Button variant="contained" color="secondary" onClick={() => showAlert()} >Add to Cart</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
    </>
  );
}