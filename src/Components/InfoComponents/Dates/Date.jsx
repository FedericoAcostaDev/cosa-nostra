import React from "react";

const userNames = ["Jesse", "Tom", "11/03 Colonia"];
function Dates() {
  const renderListOfUserNames = (names) => {
    return names.map((name) => <li>{name}</li>);
  };

  return (
    <div>
      <ul>{renderListOfUserNames(userNames)}</ul>
    </div>
  );
}

export default Dates;
