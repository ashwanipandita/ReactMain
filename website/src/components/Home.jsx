
// import React, { useContext } from "react";
// import { ThemeContext } from "./context/ThemeContext";
// import { MyCounterContext } from "./context/CounterContext";

// function Home() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { counter, Increment, Decrement, Reset } = useContext(MyCounterContext);

//   const handleLightTheme = () => {
//     toggleTheme();
//   };

//   const handleDarkTheme = () => {
//     toggleTheme();
//   };

//   return (
//     <div style={{ background: theme === "light" ? "white" : "grey" }}>
//       <h1>Home Page</h1>
//       <h2>Counter: {counter}</h2>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Decrement}>Decrement</button>
//       <button onClick={Reset}>Reset</button>
//       <button onClick={handleLightTheme}>Switch to Light Theme</button>
//       <button onClick={handleDarkTheme}>Switch to Dark Theme</button>
//     </div>
//   );
// }

// export default Home;



import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { MyCounterContext } from "./context/CounterContext";
import api from "../AxiosConfig";
import { AuthContext } from "./context/AuthContext";
import "./styles/Home.css";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts,"allProducts");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/api/v1/product/get-all-products");
        if (response?.data?.success) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  const { counter, Increment } = useContext(MyCounterContext);
  const { state } = useContext(AuthContext);
  // const { theme } = useContext(ThemeContext)
  console.log(state, "state");

async function AddToCart(productId){
  if (state?.user?._id === undefined) {
    toast.error("Please login to add products into cart.");
    router("/login");
  }
try{
const response = await api.post("/api/v1/user/add-to-cart",{userId : state?.user?._id, productId: productId,});
if (response.data.success){
  toast.success(response.data.message);
}
}catch (error) {
        console.log(error);
      }
}


async function AddToWishlist(productId){
  if (state?.user?._id === undefined) {
    toast.error("Please login to add products into Wishlist.");
    router("/login");
  }
try{
const response = await api.post("/api/v1/user/add-to-Wishlist",{userId : state?.user?._id, productId: productId,});
if (response.data.success){
  toast.success(response.data.message);
}
}catch (error) {
        console.log(error);
      }
}


  return (
    <div id="body">
      <div id="body-nav">

    <Link to="/cart"><button>Go to Cart</button></Link>
     <Link to="/add-product"><button>Add Product</button></Link>
      
        <div>
          <p>
            Home / Clothing / <b>Men T-Shirts</b>
          </p>
        </div>
        <div>
          <p>
            {" "}
            <b>Men T-Shirts</b> - 127113 items
          </p>
        </div>
        <div class="d-flex  jc-between">
          <div class="w-10">
            <p>
              <b>FILTERS</b>
            </p>
          </div>
          <div class="d-flex w-60 pl-20">
            <div class="px-10 d-flex ai-center">
              <p>
                Bundles
                <i class="fa-solid fa-angle-down"></i>
              </p>
            </div>
            <div class="px-10">
              <p>
                Country
                <i class="fa-solid fa-angle-down"></i>
              </p>
            </div>
            <div class="px-10">
              <p>
                Size
                <i class="fa-solid fa-angle-down"></i>
              </p>
            </div>
          </div>
          <div class="b-black w-20 d-flex jc-between px-10 ">
            <div>
              <p>Sort by : Recommended</p>
            </div>
            <div class="d-flex jc-between ai-center">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>

<div className="homeimg1">
  <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/em_in_cricket_t20_jersey_updated_asset_d_4673cc2b9b.jpg" alt="" />
  <video src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/originals_ss24_duo_global_launch_hp_masthead_d_207a98312e.mp4"></video>
</div>

<div className="adistart"><h2> <b> Be Summer Ready With Adidas Products  </b>  </h2></div>

      <div id="body-body">
        {/* <div id="body-body-filters" class="w-100">
          <div class="b-black w-100 p-30">
            <p>CATEGORIES</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
          <div class="b-black w-100 p-30">
            <p>BRAND</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
          <div class="b-black w-100 p-30">
            <p>PRICE</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
          <div class="b-black w-100 p-30">
            <p>COLOR</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
        </div> */}
        <div id="body-body-products" class="pl-20">
          <h1>All Products</h1>
          {allProducts.length ? (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
              {allProducts.map((productObj) => (
                <div style={{ width: "20%", border: "2px solid black", height: "300px" }}>
                  <h1>Name : {productObj.name}</h1>
                  <p>Category : {productObj.category}</p>
                  <p>Price : {productObj.price}/-</p>
                  <p>Total Quantities : {productObj.quantity}</p>
                  <p>{productObj.tags}</p>
                  <button onClick={() => AddToCart (productObj?._id)}>Add To Cart</button>
                  
                  
                  <button onClick={() => AddToWishlist (productObj?._id)}>Add To Wishlist</button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Loading..</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
