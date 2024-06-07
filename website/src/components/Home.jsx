
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
import logoImage from './Adidas-Pictures/men-image/1.png';

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
      
        {/* <div>
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
        </div> */}



<div class="header">
                <div class="hd1">
                    <div>
                        <p> FREE DELIVERY, RETURN & EXCHANGE</p>
                    </div>
                    <div class="icon-down">
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="hd2">
                    <p>help</p>
                    <p>orders and returns</p>
                    <p>sign up</p>
                    <a href="login.html">
                        <p>log in</p>
                    </a>
                </div>
                <div class="hd3">
                    <div class="logo">
                    <a href="Adidas.html">
                    <img src={logoImage} alt="Adidas Logo" />
                      </a>

                    </div>
                    <div class="categories ">
                        <div class="cts">
                          
                                <p> <b>MEN </b></p>
                            
                        </div>
                        <div class="cts">
                           
                                <p> <b>WOMEN </b></p>
                           
                        </div>
                        <div class="cts">
                            
                                <p> <b>KIDS </b></p>
                           
                        </div>
                        <div class="cts">
                            <p>SPORTS</p>
                        </div>
                        <div class="cts">
                            <p>BR/ANDS</p>
                        </div>
                        <div class="cts">
                            <p>LIFESTYLE</p>
                        </div>
                        <div class="cts red-clr">
                            <p>OUTLETS</p>
                        </div>
                    </div>
                    <div class="search-box">
                        <input type="text" class="search-bar" placeholder="Search " />
                        <button class="btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div class="options-3">
                        <div class="profile">
                            <a href="profile.html"> <i class="fa-regular fa-user"></i> </a>
                        </div>
                        <div class="heart">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="cart">
                            <a href="Cart.html"> <i class="fa-solid fa-bag-shopping"></i> </a>
                        </div>
                    </div>
                </div>
                <div class="hd4">
                    <div class="hd4-text">
                        <p>ADIDAS: THE BR/AND WITH THE 3-STRIPES</p>
                    </div>
                    <div class="hd4-icon">
                        <i class="fa-solid fa-xmark"></i>
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

      <div>
      <div className="section-9">
  <div className="sec9-left">
    <p>
      <b>STORIES, STYLES AND SPORTSWEAR AT <br />
      ADIDAS, SINCE 1949 </b> <br /> <br />
      Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have <br />
      the power to change lives. Whether it is through stories of inspiring athletes. <br />
      Helping you to get up and get moving. Sportswear featuring the latest <br />
      technologies, to up your performance. Beat your PB. adidas offers home to the <br />
      runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend <br />
      hiker that loves to escape the city. The yoga teacher that spreads the moves. <br />
      The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing <br />
      keeps you focused before that whistle blows. During the race. And at the finish <br />
      lines. We’re here to support creators. Improve their game. Their lives. And change <br />
      the world. <br /><br />

      adidas is about more than sportswear and workout clothes. We partner with the <br />
      best in the industry to co-create. This way we offer our fans the sports apparel <br />
      and style that match their athletic needs, while keeping sustainability in mind. <br />
      We’re here to support creators. Improve their game. Create change. And we think <br />
      about the impact we have on our world.
    </p>
  </div>
  <div className="sec9-right">
    <p>
      <b> WORKOUT CLOTHES, FOR ANY SPORT </b> <br /> <br />
      adidas designs for and with athletes of all kinds. Creators, who love to change the <br />
      game. Challenge conventions. Break the rules and define new ones. Then break <br />
      them again. We supply teams and individuals with athletic clothing pre-match. To <br />
      stay focused. We design sports apparel that get you to the finish line. To win the <br />
      match. We support women, with bras and tights made for purpose. From low to <br />
      high support. Maximum comfort. We design, innovate and iterate. Testing new <br />
      technologies in action. On the pitch, the tracks, the court, the pool. Retro workout <br />
      clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird <br />
      tracksuits. Classic sports models are brought back to life. Like Stan Smith. And <br />
      Superstar. Now seen on the streets and the stages. <br /><br />

      Through our collections we blur the borders between high fashion and high <br />
      performance. Like our adidas by Stella McCartney athletic clothing collection – <br />
      designed to look the part inside and outside of the gym. Or some of our adidas <br />
      Originals lifestyle pieces, that can be worn as sportswear too. Our lives are <br />
      constantly changing. Becoming more and more versatile. And adidas designs with that in mind.
    </p>
  </div>
</div>
<div className="section-10">
  <div className="sec10-left">
    <p> JOIN ADIDAS AND GET 15% OFF </p>
  </div>
  <div className="sec10-right">
    <button className="sec10-btn">
      SIGN UP FOR FREE <i className="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</div>
<div className="section-11">
  <div className="products">
    <p> <b>PRODUCTS </b></p> <br />
    <p>Footwear</p>
    <p>Accessories</p>
    <p>Outlet – Sale</p>
    <p>New Arrivals</p>
    <p>Special Offer</p>
    <p>Flat 50% Off!</p>
  </div>

<div class="products">
                        <p> <b>SPORTS</b></p> <br />
                        <p>Cricket</p>
                        <p>Running</p>
                        <p>Football</p>
                        <p>Gym/Training</p>
                        <p>Tennis</p>
                        <p>Outdoor</p>
                        <p>Basketball</p>
                        <p>Swimming</p>
                        <p>Skateboarding</p>
                    </div>
                    <div class="products">
                        <p> <b>COLLECTIONS </b></p> <br />
                        <p>Ultraboost</p>
                        <p>Superstar</p>
                        <p>NMD</p>
                        <p>Stan Smith</p>
                        <p>Sustainability</p>
                        <p>Predator</p>
                        <p>Parley</p>
                        <p>adicolor</p>
                    </div>
                    <div class="products">
                        <p><b>SUPPORT</b></p> <br />
                        <p>Help</p>
                        <p>Customer Services</p>
                        <p>Returns & Exchanges</p>
                        <p>Shipping</p>
                        <p>Order Tracker</p>
                        <p>Store Locator</p>
                        <p>Br/a Fit Guide</p>
                        <p>Terms and conditions</p>
                    </div>
                    <div class="products">
                        <p> <b>COMPANY INFO </b></p> <br />
                        <p>About Us</p>
                        <p>adidas stories</p>
                        <p>adidas Apps</p>
                        <p>Entity Details</p>
                        <p>Press</p>
                        <p>Careers</p>
                    </div>

  {/* Add other product-related content here */}
</div>
<div className="footer">
  <div className="footer-1">
    <p>Privacy Policy | Terms and Conditions | Cookies</p>
  </div>
  <div className="footer-2">
    <p>©2021 adidas India Marketing Pvt. Ltd</p>
  </div>
</div>

      </div>
    </div>
  );
}



export default Home;
