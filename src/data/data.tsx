//import React from 'react';
import product1 from "./../assets/images/product1.jpg";
import Data from "./data.json"
//import { setting } from "../components/setting"

export interface storeProductsProps {
  id: number;
  title: string;
  img:string;
  description: string;
  price: number;
  category: string | number;
}

export const storeProducts:storeProductsProps[]=  Data.Products;

interface CategoryProps {
  id: number;
  title: string;
}

export const category:CategoryProps[]=  Data.Category;

export const getCategory = (ids:number | string) => {
  let categorys =category.filter(category1 => {
    return category1.id === ids;
  });
  return categorys[0].title;
}

export const getProductByCategory= (ids:number) => {
  //let last:string= str.substring(str.lastIndexOf("/") + 1, str.length);
  const filtered = storeProducts.filter(products => {
    return products.category ===  ids;
  });
  return filtered;
}

export const getProduct = (str:number) => { 
  const filtered = storeProducts.filter(products => {
    return products.id === str;
  });
  return filtered[0];
}

export const addToCart = (str:number):void => { 
  // const filtered = storeProducts.filter(products => {
  //   return products.id === str;
  // });
  alert(str);
}

// addToCart = (id) => {
//   let tempProducts = [...this.state.products];
//   const index = tempProducts.indexOf(this.getItem(id));
//   const product = tempProducts[index];
//   product.inCart = true;
//   product.count = 1;
//   const price = product.price;
//   product.total = price;

//   this.setState(() => {
//     return {
//       products: [...tempProducts],
//       cart: [...this.state.cart, product],
//       detailProduct: { ...product },
//     };
//   }, this.addTotals);
// };