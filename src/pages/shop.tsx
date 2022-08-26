import  React, { useState } from 'react';
import {  Typography , Container , Grid , TextField , Box , FormControl , InputLabel , Select ,MenuItem , OutlinedInput  } from '@mui/material';
import {  storeProducts , storeProductsProps , getCategory, category } from '../data/data';
import { setting } from "../components/setting";
import CardGrid from './cardGrid';
import Slider from './home/homeSlider';
import MultiRangeSlider from "../components/multiRange";

interface inputProps {
   All?:string|undefined;
   minPrice?: number|undefined;
   maxPrice?: number|undefined;
   category?: number|undefined;

}

function filterRows(rows:storeProductsProps[], input:inputProps) {
    if (Object.keys(input).length === 0) return rows
    return rows.filter(row => {
      if(input.All != "" && input.All != undefined ){
        if ( row.title.toLowerCase().includes(input.All.toLowerCase()) || getCategory(row.category).toLowerCase().includes(input.All.toLowerCase()) ) {
           return  true
        }
      }
      if( input.category   &&  input.category != undefined ){
        if ( input.category == row.category ) {
           return  true;
        }
      }
      /*if( input.minPrice   &&  input.minPrice != undefined ){
        if ( row.price > input.minPrice   ) {
          console.log("minprice1")
          return  true
        }
      }
      if( input.maxPrice   &&  input.maxPrice != undefined ){
        if ( row.price < input.maxPrice   ) {
          console.log("maxprice1")
          return  true
        }
      }*/
        return false
    })
}


export default function ImgMediaCard() {
  //const [input, setInput] = useState({All: "555", })
  const [input, setInput] = useState < inputProps >({ All:"",
    minPrice: 0,
    maxPrice: 100,
 })
  

  function handleChange(evt:any) {
    const value = evt.target.value;
    setInput({ ...input, [evt.target.name]: value });
  }

  const handleSearch1 = (minPrice1:number, maxPrice1:number) => {
    if (minPrice1) {
        setInput(input => ({
        ...input,
        ["minPrice"]: minPrice1,
      }))
    } else {
        setInput(prevFilters => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters["minPrice"]
        return updatedFilters
        })
    }
    if (maxPrice1) {
        setInput(prevFilters => ({
        ...prevFilters,
        ["maxPrice"]: maxPrice1,
      }))
    } else {
        setInput(prevFilters => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters["maxPrice"]
        return updatedFilters
        })
    }
  }

  const filteredRows = filterRows(storeProducts, input ).length?filterRows(storeProducts, input ):storeProducts;
  const max = Math.max.apply(Math, filteredRows.map(function(o) { return o.price; }));
  const min = Math.min.apply(Math, filteredRows.map(function(o) { return o.price; }));
  return (
    <>
    <Slider />
    <Container maxWidth="lg"sx={{ marginTop: '30px' }} >
        <Typography gutterBottom variant="h2" component="div">
            Products
        </Typography>

        <Grid container spacing={2} sx={{ margin: '20px'}} >
            <Grid item  xs={3}> 
            <Box sx={{ width: "100%", height:"auto" }} >
                <Typography variant="h5" component="div">
                    Filter
                </Typography>
                <TextField  
                    key={`all-search`} 
                    type="search" 
                    name="All"
                    value={input.All} 
                    //onChange={event => handleChange(event.target.value)}
                    onChange={handleChange}
                    label="Search" 
                    variant="outlined" 
                />
                <br></br>
                <Typography variant="h5" component="div">
                    Category
                </Typography>
                <FormControl sx={{ m: 1, width: "80%" }}>
                  <InputLabel id="demo-multiple-name-label">Category</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name="category"
                    onChange={handleChange}
                    input={<OutlinedInput label="category" />}
                  >
                    <MenuItem
                      value=""
                      >
                       All
                      </MenuItem>
                    {category.map((category1) => (
                      <MenuItem
                      value={category1.id === -1 ? '' : category1.id}
                      >
                       {category1.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <br></br>
                <Typography variant="h5" component="div">
                    Price
                </Typography>
                <MultiRangeSlider
                    min={min}
                    max={max}
                    onChange={({ min, max })  => handleSearch1(min,max ) }
                />
            </Box>
            </Grid>
            <Grid container  xs={9}>
                {filteredRows.map((products) => {
                    return (
                        <>
                        < CardGrid   
                              id={products.id.toString()} 
                              imgurl={products.img} 
                              title={products.title} 
                              description={products.description} 
                              //price={products.price + setting.unit } 
                              price={products.price } 
                              category={products.category}  /> 
                        </>
                    )
                })}
            </Grid>
        </Grid>
    </Container>
    </>
  );
}
