import React, { useState, useEffect } from "react";
import API from "../utils/API";
import EmployeeList from "./Employee_list";

import random from "../randomUser.json";

function Main() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [users_origin, setUsersOrigin] = useState([]);

  useEffect(() => {
    API.randomUsers().then((res) => {
      console.log(res);
      // setUsers(res.data.results);
      // setUsersOrigin(res.data.results);
      setUsers(random);
      setUsersOrigin(random);
    });
  }, []);

  function searchUsers() {
    console.log("users under searchUsers " + users);
    console.log("search under searchUsers " + search);
    // const searchResult = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
    const searchResult = users.filter((person) =>
      `${person.name.first.toLowerCase()}  ${person.name.last.toLowerCase()}`.includes(
        search
      )
    );
    setUsers(searchResult);
  }

  function clearSearch() {
    console.log("under clearSearch" + users);
    setSearch("");
    setUsers(users_origin);
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
    console.log(
      "event.target.value under handleInputChange " + event.target.value
    );
    console.log("search under handleInputChange = " + search);
    searchUsers();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("users under handleFormSubmit " + users);
    console.log("search under handleFormSubmit " + search);

    searchUsers();
  }

  function sortDOB(event) {
    console.log(event);

    const sorted = users.sort( function(user1, user2) {

      if (user1.dob.date < user2.dob.date) {
        return -1;
      }
      if (user1.dob.date > user2.dob.date) {
        return 1;
      }
      return 0;
      
    });

    // console.log(JSON.stringify(sorted));
    console.log(sorted);
    console.log([...sorted]);
    // Why do we need spread here
    setUsers([...sorted])
    // setUsers(sorted)


  }

  return (
    <div className='container'>
      <div>
        <input
          value={search}
          onChange={handleInputChange}
          className='form-control'
          placeholder='Search Employee Name'
          type='text'
        />
        <button className='btn btn-danger' onClick={clearSearch}>
          <i className='fas fa-window-close'></i>
        </button>
        <button
          type='submit'
          onClick={handleFormSubmit}
          className='btn btn-primary'
          id='search-button'
        >
          Search
        </button>
      </div>
      <EmployeeList list={users} sortDOB={sortDOB} />
    </div>
  );
}

export default Main;
