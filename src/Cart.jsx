import React from "react";
import "./styles.css";
import { ShoppingCartOutlined } from "@rakuten-rex/icons";

export const Cart = () => {
  return (
    <div className="Cart">
      <ShoppingCartOutlined style={{ fontSize: "24px" }} />
      <div className="text">買い物かご</div>
    </div>
  );
};
