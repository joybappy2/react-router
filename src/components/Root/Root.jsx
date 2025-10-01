import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css"

const Root = () => {
  return (
    <div>
      <div className="container">
        <Sidebar></Sidebar>
        <Header></Header>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
