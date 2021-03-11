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
            <button className='filter' onClick={props.filterName}>
              <i className='fas fa-filter'></i>
            </button>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>
            DOB{" "}
            <button className='filter' onClick={props.sortDOB}>
              <i className='fas fa-sort'></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((person) => (
          <tr key={person.cell}>
            <td>
              <img alt={person.name.first} src={person.picture.thumbnail} />
            </td>
            <td>
              {person.name.first} {person.name.last}
            </td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            <td>{person.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Employee_list;
