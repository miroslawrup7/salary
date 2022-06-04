import React from "react";
import "../styles/Add.css";

function Add(props) {
    return (
        <div className="add">
            <input
                type="text"
                name="fName"
                onChange={props.handlefNameChange}
                value={props.fNameContent}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lName"
                onChange={props.handlelNameChange}
                value={props.lNameContent}
                placeholder="Last Name"
            />
            <select
                name="fName"
                onChange={props.handleDepartmentChange}
                value={props.departmentContent}
            >
                <option value="IT">IT</option>
                <option value="Sales">Sales</option>
                <option value="Administration">Administration</option>
            </select>
            <input
                type="text"
                name="salaryAmount"
                onChange={props.handleSalaryAmountChange}
                value={props.salaryAmountContent}
                placeholder="Salary Amount"
            />
            <select
                name="salaryCurrent"
                onChange={props.handleSalaryCurrentChange}
                value={props.salaryCurrentContent}
            >
                <option value="usd">USD</option>
            </select>
            <div className="button" onClick={props.handleAdd}>
                Add
            </div>
        </div>
    );
}

export default Add;
