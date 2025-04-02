import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Vans from "./components/Vans/Vans";
import VanDetail from "./components/VanDetail/VanDetail";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Host/Dashboard/Dashboard";
import Income from "./components/Host/Income/Income";
import Reviews from "./components/Host/Reviews/Reviews";
import HostLayout from "./components/Host/HostLayout/HostLayout";
import HostVans from "./components/Host/HostVans/HostVans";
import HostVanDetail from "./components/Host/HostVanDetail/HostVanDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* relative path does not start with / in routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          {/* index route or path="" works fine */}
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetail />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
