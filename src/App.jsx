import React, { useState } from "react";
import Product from "./Component/Product";
import Reviews from "./Component/Review";
import Breakdown from "./Component/Breakdown";
import "./App.css";

function App() {
  return (
    <>
      <Product />
      <Breakdown />
      <Reviews />
    </>
  );
}

export default App;
