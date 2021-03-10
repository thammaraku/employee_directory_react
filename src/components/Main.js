import React, { useState, useEffect } from "react";
import API from "../utils/API";
import EmployeeList from "./Employee_list";


function Main() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [users_origin, setUsersOrigin] = useState([]);


  useEffect(() => {
    API.randomUsers().then(res => {
        console.log(res);
      setUsers(res.data.results);
      setUsersOrigin(res.data.results);
    });
  }, []);


function searchUsers() {
    console.log("under searchUsers" + users);
    const searchResult = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
    setUsers(searchResult)
}

function clearSearch() {
    console.log("under clearSearch" + users);
    setSearch("")
    setUsers(users_origin);
}

function handleInputChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value)

    searchUsers()

}

function handleFormSubmit(event) {
    event.preventDefault()
    console.log("under handleFormSubmit" + users);

    searchUsers()
}

  return (
    <div className="container">
        <div>
            <input value={search} onChange={handleInputChange} className="form-control" placeholder="Search Employee Name" type="text"/>
            <button className="btn btn-danger" onClick={clearSearch}><i className="fas fa-window-close"></i></button>
            <button type="submit" onClick={handleFormSubmit} className="btn btn-primary" id="search-button">Search</button>
        </div>
      <EmployeeList list={users} />
    </div>
  );
}

export default Main;
