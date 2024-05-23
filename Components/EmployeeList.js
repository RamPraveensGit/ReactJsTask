import React from "react";
import '../App.css';
import withAuthentication from "../HOC/withAuthentication";
function EmployeeList(){

    const Employees = [
        { id: 1, name: 'Alice Johnson', department: 'Engineering' },
        { id: 2, name: 'Bob Smith', department: 'Human Resources' },
        { id: 3, name: 'Charlie Brown', department: 'Marketing' },
        { id: 4, name: 'David Wilson', department: 'Sales' },
        { id: 5, name: 'Emma Davis', department: 'Finance' },
        { id: 6, name: 'Franklin Wright', department: 'Legal' },
        { id: 7, name: 'Grace Lee', department: 'Engineering' },
        { id: 8, name: 'Hannah Martin', department: 'Product Management' },
        { id: 9, name: 'Ian Clark', department: 'Customer Support' },
        { id: 10, name: 'Julia Scott', department: 'Design' }
      ];
    
    
    return (
        <div className="emplist">
            <div className="inemplist">
            <h2>The Employee list with unique keys</h2>
          <ol>
                {
                    Employees.map((emp,index) =>(
                        <li key={index}>
                            {<p>{emp.name} is working in {emp.department}</p>}
                        </li>
                    ))
                }
            </ol>
            </div>
         
        </div>
  
    );
    
}

export default withAuthentication(EmployeeList);
