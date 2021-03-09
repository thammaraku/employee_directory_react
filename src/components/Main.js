import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../utils/API";
import Employee_list from "./Employee_list";


function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.randomUsers().then(res => {
        console.log(res);
      setUsers(res.data.results);
    });
  }, []);


  return (
    <div>
      <Employee_list list={users} />
    </div>
  );
}

export default Main;
