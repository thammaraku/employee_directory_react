import React from "react";
import "./style.css";

function Table(props) {


  return (
    <table className="container">
      <thead>
        <tr>
          <th>Image</th>
          <th>
            Name{" "}
            <button className='filter' onClick={props.sortName}>
              <i className='fas fa-sort'></i>
            </button></th>
          <th>
            Gender{" "}
            <button className='filter' onClick={props.sortGender}>
              <i className='fas fa-sort'></i>
            </button></th>
          <th>
            Age{" "}
            <button className='filter' onClick={props.sortDOB}>
              <i className='fas fa-sort'></i>
            </button>
          </th>
          <th>Phone</th>
          <th>Email</th>

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
            <td>{person.gender}</td>
            <td>{person.dob.age}</td>
            <td>{person.phone}</td>
            <td style={{wordBreak: 'break-all'}}>{person.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
