import React from "react";
import { useCart } from "react-use-cart";
import { Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper , Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const buy = () => {
    alert("Buy Successfully");
  };
  if (isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;
  return (
    <section className="container1" >
      <div className="row jistufy-content-center">
        <div className="col-12">
          <h5>
            {" "}
            Cart ({totalUniqueItems}) total Item :({totalItems})
          </h5>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {items.map((item, index) => {
                return (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell  scope="row">
                    <img src={require('../assets/images/'+item.imgurl)} style={{ height: "6rem" }} />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                        <IconButton aria-label="minus"  onClick={() =>{
                                    if( typeof item.quantity == "number"){
                                        updateItemQuantity(item.id, item.quantity - 1)
                                    }
                                }
                                }  >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton aria-label="Add"  onClick={() =>{
                                if( typeof item.quantity == "number"){
                                    updateItemQuantity(item.id, item.quantity + 1)
                                }
                            }
                            }  >
                            <AddIcon />
                        </IconButton>
                        <IconButton aria-label="delete"  onClick={() => removeItem(item.id)}  >
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                  </TableRow>
                );
               })}
                </TableBody>
            </Table>
            </TableContainer>

          <div className="col-auto ms-auto">
            <h2> total price: {cartTotal} $</h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <button onClick={() => emptyCart()} className="btn btn-danger ms-2">
            Clear Cart
          </button>
          <button onClick={buy} className="btn btn-primary ms-2">
            Buy Now{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
