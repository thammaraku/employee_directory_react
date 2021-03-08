import React from "react";
import "./style.css";

function Employee_list(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>
            Phone{" "}
            <button className='filter' onClick={props.sortPhone}>
              <i className='fas fa-filter'></i>
            </button>
          </th>
          <th>
            Email{" "}
            <button className='filter' onClick={props.sortEmail}>
              <i>className="fas fa=filter"</i>
            </button>
          </th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((person) => (
          <tr>
            <td>
              <img alt={props.name} src={props.image} />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Employee_list;
