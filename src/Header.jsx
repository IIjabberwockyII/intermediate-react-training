import React from "react";
import { SerachBar } from "./SerachBar";
import { Cart } from "./Cart";

export const Header = () => {
  return (
    <div className="Container">
      <img
        alt="aaa"
        src="https://r.r10s.jp/com/assets/app/pages/item/resources/r-symbolc163ed4ec18908fbcf24167b078ae2d5.svg"
      />
      <SerachBar />
      <Cart />
    </div>
  );
};
