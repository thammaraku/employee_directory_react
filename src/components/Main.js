import React, { Component } from "react";
import Employee_list from "./Employee_list";

const users = [
  {
    id: 1,
    image:
      "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
    name: "John",
    phone: "512-123-4567",
    email: "john@gmail.com",
    dob: "01-01-2000",
  },
  {
    id: 2,
    image:
      "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
    name: "John",
    phone: "512-123-4567",
    email: "john@gmail.com",
    dob: "01-01-2000",
  },
];

function Main() {
  return (
    <div>
      <Employee_list list={users} />
    </div>
  );
}

export default Main;
