import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import api from "../AxiosConfig";
import { toast } from "react-hot-toast";
import "./styles/Cart.css";

function Cart() {
  const { state } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    async function fetchCartProducts() {
      if (state?.user?._id) {
        try {
          const response = await api.get(`/api/v1/user/cart/${state.user._id}`);
          if (response.data.success) {
            setCartProducts(response.data.cart);
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Failed to fetch cart products.");
        }
      } else {
        toast.error("Please log in to view your cart.");
      }
    }

    fetchCartProducts();
  }, [state]);

  const handleCheckout = async () => {
    try {
      const response = await api.post("/api/v1/user/checkout", { userId: state.user._id });
      if (response.data.success) {
        toast.success(response.data.message);
        setCartProducts([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Checkout failed.");
    }
  };

  if (!state?.user?._id) {
    return <div>Please log in to view your cart.</div>;
  }

  return (
    <div id="cart">
      <h1>Your Cart</h1>
      {cartProducts.length ? (
        <div>
          <div className="cart-products">
            {cartProducts.map((product) => (
              <div key={product._id} className="cart-product">
                <h2>{product.name}</h2>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}/-</p>
                <p>Quantity: {product.quantity}</p>
                <p>Tags: {product.tags.join(", ")}</p>
              </div>
            ))}
          </div>
          <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
        </div>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
}

export default Cart;
