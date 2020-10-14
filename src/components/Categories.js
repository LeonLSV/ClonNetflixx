import React from "react";
import "./styles/Categories.css";


const Categories = ({ children, title }) => (
  <div className="categories">
    <h3 className="categories__title1">{title}</h3>
    {children}
  </div>
);

export default Categories;
