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






const App =() =>{
  const [students ] = useState(["a", 'b', 'c', 'd'])
  const [counter] = useState(1234)
  return(

    <div>

<ThemeProvider>

        <Routes>
          <Route path="/register" element={<Register/>}></Route>
         
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
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/AuthContext" element={<AuthContext/>}></Route>
          <Route path="/Todo" element={<Todo/>}></Route>
          <Route path='/CurrencyConverter' element={<CurrencyConverter />} />
          <Route path='/CounterRedux' element={<CounterRedux />} />
          <Route path='/UseMemo' element={<UseMemo/>} />
          <Route path='/UseCallback' element={<UseCallback/>} />
         <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path='/ThemeRedux' element={<ThemeRedux/>} />
         <Route path='/add-product' element = {<AddProduct/>}/>
        </Routes>
     </ThemeProvider>
    </div>

  )
}
export default App;

