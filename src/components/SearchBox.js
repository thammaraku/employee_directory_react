import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../utils/API";
import Table from "./Table";

import random from "../randomUser.json";


function SearchBox() {
  const [users, setUsers] = useState([]);
  // const [users, setUsers] = useState({
  //   users: [],
  //   order: "ascend"
  // });
  const [search, setSearch] = useState([]);
  const [users_origin, setUsersOrigin] = useState([]);



  useEffect(() => {
    API.randomUsers().then((res) => {
      console.log(res);

      // To use data from API
      setUsers(res.data.results);
      setUsersOrigin(res.data.results);

      // To use data from JSON
      // setUsers(random);
      // setUsersOrigin(random);
    });
  }, []);

  function searchUsers() {
    console.log("users under searchUsers " + users);
    console.log("search under searchUsers " + search);
    // const searchResult = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
    const searchResult = users.filter((person) => `${person.name.first.toLowerCase()}  ${person.name.last.toLowerCase()}`.includes(search.toLowerCase())
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

    // realtime search
    // searchUsers();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("users under handleFormSubmit " + users);
    console.log("search under handleFormSubmit " + search);

    searchUsers();
  }

  function sortDOB(event) {

    const sorted = users.sort(function (user1, user2) {

      if (user1.dob.date < user2.dob.date) {
        return -1;
      }
      if (user1.dob.date > user2.dob.date) {
        return 1;
      }
      return 0;

    });

    setUsers([...sorted])
  }

  function sortName(event) {

    const sorted = users.sort(function (user1, user2) {

      if (user1.name.first < user2.name.first) {
        return -1;
      }
      if (user1.name.first > user2.name.first) {
        return 1;
      }
      return 0;

    });

    setUsers([...sorted])
  }

  function sortGender(event) {

    const sorted = users.sort(function (user1, user2) {

      if (user1.gender < user2.gender) {
        return -1;
      }
      if (user1.gender > user2.gender) {
        return 1;
      }
      return 0;

    });

    setUsers([...sorted])
  }
  
  return (
    <div className='container'>

      <div className="input-group container w-50 p-3 mt-3 mb-3">
        <input
          value={search}
          onChange={handleInputChange}
          className='form-control'
          placeholder='Search Employee Name'
          type='text'
        />
        <button className='btn btn-primary' onClick={handleFormSubmit} type='submit' id='search-button'>
          <i className='fas fa-search'></i>
        </button>
        <button className='btn btn-danger' onClick={clearSearch}>
          <i className='fas fa-window-close'></i>
        </button>
      </div>

      <div className='container'>
        <Table list={users} sortDOB={sortDOB} sortName={sortName} sortGender={sortGender}/>
      </div>

    </div>
  );
}

export default SearchBox;


<div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>
