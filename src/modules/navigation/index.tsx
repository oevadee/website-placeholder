import React from "react";
import Logo from "../../assets/logo.svg";

export const Navigation = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <li>news</li>
        <li>Shop</li>
        <li>Discover</li>
        <li>sale</li>
        <li>about</li>
      </ul>
      <h2>search</h2>
      <p>cart</p>
    </nav>
  );
};
