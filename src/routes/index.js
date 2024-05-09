import React from "react";
import {
  BrowserRouter as Router,Routes,
  Route,
} from "react-router-dom";

import Store from '../pages/store/index';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart/index";

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Store />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default AppRoutes;