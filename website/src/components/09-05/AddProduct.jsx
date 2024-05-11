import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthDirection from "../redirections/AuthDirection";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../../AxiosConfig";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    tags: "",
  });

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const { state } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await api.post("/add-product", {
        productData,
        userId: "663b7b83f846063c228fe63f",
      });
      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form fields
        setProductData({
          name: "",
          category: "",
          price: "",
          quantity: "",
          tags: "",
        });
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div>
      <h1>AddProduct</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <br />
        <input required name="name" value={productData.name} onChange={handleChange} />
        <br />
        <label>Product category</label>
        <br />
        <input required name="category" value={productData.category} onChange={handleChange} />
        <br />
        <label>Product price</label>
        <br />
        <input required name="price" value={productData.price} onChange={handleChange} />
        <br />
        <label>Product quantity</label>
        <br />
        <input required name="quantity" value={productData.quantity} onChange={handleChange} />
        <br />
        <label>Product Tags</label>
        <br />
        <input required name="tags" value={productData.tags} onChange={handleChange} />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default AddProduct;
