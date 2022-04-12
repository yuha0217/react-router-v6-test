import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import React from "react";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2DetailA } from "./Page2DetailA";
import { Page404 } from "./Page404";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">HOME</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="page1" element={<Page1 />} />
          <Route path="page1/detailA" element={<Page1DetailA />} />
          <Route path="page1/detailB" element={<Page1DetailB />} />
          <Route path="page2" element={<Page2 />}></Route>
          <Route path="page2/:id" element={<Page2DetailA />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
