import "./styles.css";
import React from "react";
import { Search } from "@rakuten-rex/icons";

export const SerachBar = () => {
  return (
    <div className="Spacer">
      <form className="Container">
        <input className="SearchBar" />
        <button className="SearchButton">
          <Search color="#FFF" style={{ fontSize: "24px", padding: "8px" }} />
        </button>
      </form>
    </div>
  );
};
