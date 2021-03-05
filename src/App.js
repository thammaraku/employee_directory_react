import React, { Component } from "react";
import EmployeeList from "./components/Employee_list";
import employees from "./employees.json";

class App extends Component {

  state = {
    list: employees
  }


  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <EmployeeList
            key={item.id}
            image={item.image}
            name={item.name}
            phone={item.phone}
            email={item.email}
            dob={item.dob}
          />
        ))}
      </div>
    );
  }
}

export default App;
