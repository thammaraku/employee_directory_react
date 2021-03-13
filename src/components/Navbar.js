// import React, { Component } from 'react'
import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="bg-success text-white">
      <h1 className="text-center p-3">Employee Directory</h1>
      <p className="text-center p-3">use search box to search employee name or click sort icon to sort by field</p>
    </nav>
  );
}

export default Navbar;
