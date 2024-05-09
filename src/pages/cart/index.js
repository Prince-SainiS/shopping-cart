import React from "react";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";
import Layout from "../../components/Layout";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import { v4 as uuid } from 'uuid';

const Cart = () => {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useCart();
   

    const handleClick = async (itemCount, total) => {
        const uniqueId = uuid().slice(0,8);
        
        let response = await fetch("http://localhost:5000/", {
          method: "post",
          body: JSON.stringify({ uniqueId, itemCount, total }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      
        if (response.ok) {
          try {
            const result = await response.json();
            console.warn(result);
            if (result) {
              alert(
                "Order Placed for " +
                  itemCount +
                  " items Total amount to be paid on delivery Rs " +
                  total
              );
            }
            
          } catch (error) {
            console.error("JSON parsing error:", error);
          }
          handleCheckout();
        } else {
          const errorMessage = await response.text(); // Parse the response as plain text
          console.error(errorMessage); // Log the error message
          // Handle the error message in your application as needed
        }
      };
      
      
  return (
    <Layout title="Cart" description="This is the Cart page">
      <div>
        <div className="text-center mt-5">
          <h1>Cart</h1>
        </div>
        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div className="p-3 text-center text-muted">
                Your cart is empty
              </div>
            )}
            {checkout && (
              <div className="p-3 text-center text-success">
                <p>Checkout successfull</p>
                <Link
                  to="/"
                  className="btn btn-outline-success btn-sm"
                  onClick={clearCart}
                >
                  BUY MORE
                </Link>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <hr className="my-4" />
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={() => {
                      handleClick(itemCount, total);
                    }}
                  >
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
