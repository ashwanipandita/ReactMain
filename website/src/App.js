import Register from "./components/register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/counter";
import Welcome from "./components/welcome";
import EffectOne from "./components/effect1";
import EffectTwo from "./components/effect2";
import EffectThree from "./components/effect3";
import EffectFour from "./components/effect4";
import Application from "./components/application";
import UseReducer from './components/UseReducer';
import PropsDrilling from "./components/propsDrilling";
import Navbar2 from "./components/Navbar2";
import { useState } from 'react';
import ProviderCounterContext from "./components/context/CounterContext";
import Home from "./components/Home";
import Login from "./components/Login";
import { AuthContext } from "./components/context/AuthContext";
import Todo from "./components/Todo";
import { ThemeProvider } from './components/context/ThemeContext';
import CurrencyConverter from "./components/CurrencyConverter";
import CounterRedux from "./components/CounterRedux";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import ThemeRedux from "./components/ThemeRedux";
import AddProduct from "./components/09-05/AddProduct";
import AllProducts from "./components/AllProducts"
import Buyer from "./components/Project/Buyer";
import Seller from "./components/Project/Seller";
import YourProduct from "./components/Project/YourProduct";
import Cart from "./components/Cart";








function App() {
 
  //   console.log(allProducts, "allProducts");

  const [search, setSearch] = useState(""); // shose
  

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);

    let userword = event.target.value.toLowerCase();

    

   

  }

  const [students, setStudents] = useState(["a", "b", "c", "d"]);
  const [counter, setCounter] = useState(1234);
  const [products, setProducts] = useState([
    {
      name: "Tshirt",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Jeans",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: " cap",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Tshirt",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Jeans",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: " cap",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Tshirt",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Jeans",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: " cap",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
  ]);
  return(

    <div>

<ThemeProvider>
<Navbar2 search={search} handleChange={handleChange} />
        <Routes>
         
         
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>
          <Route path="/effect1" element={<EffectOne/>}></Route>
          <Route path="/effect2" element={<EffectTwo/>}></Route>
          <Route path="/effect3" element={<EffectThree/>}></Route>
          <Route path="/effect4" element={<EffectFour/>}></Route>
          <Route path="/application" element={<Application/>}></Route>
          <Route path="/useReducer" element={<UseReducer/>}></Route>
          <Route path='/propsdrilling' element={<PropsDrilling counter={counter} students={students} />} />
          <Route path="/CounterContext" element={<ProviderCounterContext/>}></Route>
         
     
          <Route path="/AuthContext" element={<AuthContext/>}></Route>
          <Route path="/Todo" element={<Todo/>}></Route>
          <Route path='/CurrencyConverter' element={<CurrencyConverter />} />
          <Route path='/CounterRedux' element={<CounterRedux />} />
          <Route path='/UseMemo' element={<UseMemo/>} />
          <Route path='/UseCallback' element={<UseCallback/>} />
         <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path='/ThemeRedux' element={<ThemeRedux/>} />
         
        
        
        



         <Route path="/Home" element={<Home/>}></Route>
         {/* <Route path="/buyer" element={<Buyer/>}></Route> */}
         <Route path="/seller" element={<Seller/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path='/AllProducts' element = {<AllProducts  awdiz={products}/>}/>
         <Route path='/add-product' element = {<AddProduct/>}/>
         <Route path='/your-product' element = {<YourProduct/>}/>
         <Route path='/Cart' element = {<Cart/>}/>

        </Routes>
     </ThemeProvider>
    </div>

  )
}
export default App;

