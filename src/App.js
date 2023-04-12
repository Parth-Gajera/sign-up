import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './component/Signup';
import Signin from './component/Signin';

function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>

  <Route exact path='/' element={<Signup/>}></Route>
  <Route exact path='/Signin' element={<Signin/>}></Route>

 </Routes>
 </BrowserRouter>
 
 
 </>
  );
}

export default App;
