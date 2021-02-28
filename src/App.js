import React, { useState } from "react";
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

//getting unique buttons
const allCategories = menu.map((item) => item.category); //returns category property
const uniqueCategories = new Set(allCategories); //getting only unique values
const finalCategories = ["all", ...uniqueCategories]; //converting abject into an array

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  // console.log(useState(menu));
  const [btncategories, setBtnCategories] = useState(finalCategories);

  // filter items on click
  const filterItems = (id) => {
    if (id === "all") {
      setMenuItems(menu);
      return;
    }
    const filtered = menu.filter((item) => item.category === id);
    setMenuItems(filtered);
  };

  return (
    <section className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={btncategories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
};

export default App;
