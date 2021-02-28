import React from "react";
import Button from "@material-ui/core/Button";

const Categories = ({ categories, filterItems }) => {
  //array of unique categories
  return (
    <div className="btn-container">
      {categories.map((btn, i) => {
        //unique buttons
        // console.log(btn);

        return (
          <button
            type="button"
            className="filter-btn"
            key={i}
            onClick={() => filterItems(btn)}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
