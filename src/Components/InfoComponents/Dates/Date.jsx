import React from "react";
import "./Dates.css";

//soon this will be fetched from api google sheets
const userNames = ["20/2 Jesse", "Tom", "11/03 Colonia"];
function Dates() {
  const renderListOfUserNames = (names) => {
    return names.map((name) => (
      <li>
        <a href="./">{name}</a>
      </li>
    ));
  };

  return (
    <div className="table-dates">
      <ul className="dates">{renderListOfUserNames(userNames)}</ul>
    </div>
  );
}

export default Dates;
