import React from "react";

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
    <div>
      <ul>{renderListOfUserNames(userNames)}</ul>
    </div>
  );
}

export default Dates;
