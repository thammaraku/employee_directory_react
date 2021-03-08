import React from "react";
import "./style.css";

function Employee_list(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>
            Name{" "}
            <button className='filter' onClick={props.sortPhone}>
              <i className='fas fa-filter'></i>
            </button>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>
            DOB{" "}
            <button className='filter' onClick={props.sortEmail}>
              <i className='fas fa-sort'></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((person) => (
          <tr>
            <td>
              <img alt={person.name} src={person.image} />
            </td>
            <td>{person.name}</td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            <td>{person.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Employee_list;
