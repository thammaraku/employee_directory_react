import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>
            Name
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

export default Table;