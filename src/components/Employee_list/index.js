import React from "react";
import "./style.css";

function Employee_list(props) {
  return (
      <tr>
        <td><img alt={props.name} src={props.image}/></td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>


    // <table>
    // {/* <tr>
    //   <th>Image</th>
    //   <th>Name</th>
    //   <th>Phone</th>
    //   <th>Email</th>
    //   <th>DOB</th>
    // </tr> */}
    // <tr>
    //   <td><img alt={props.name} src={props.image}/></td>
    //   <td>{props.name}</td>
    //   <td>{props.phone}</td>
    //   <td>{props.email}</td>
    //   <td>{props.dob}</td>
    // </tr>
    // </table>

  );
}

export default Employee_list;
