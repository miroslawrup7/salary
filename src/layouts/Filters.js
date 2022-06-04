import React from "react";
import "../styles/Filters.css";

function Filters(props) {
    return (
        <div className="filters">
            <p className="title">Worker Name</p>
            <input
                type="text"
                name="filterfName"
                placeholder="First Name"
                onChange={props.handlefNameFiltrChange}
                value={props.fName}
            />
            <input
                type="text"
                name="filterlName"
                placeholder="Last Name"
                onChange={props.handlelNameFiltrChange}
                value={props.lName}
            />
            <div className="checkboxes">
                <p className="title">Department</p>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="it"
                        name="it"
                        value="IT"
                        checked={props.itDept}
                        onChange={props.handleItDeptFiltrChange}
                    />
                    <label htmlFor="it">IT</label>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="sales"
                        name="sales"
                        value="Sales"
                        checked={props.salesDept}
                        onChange={props.handleSalesDeptFiltrChange}
                    />
                    <label htmlFor="sales">Sales</label>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="administration"
                        name="administration"
                        value="Administration"
                        checked={props.adminDept}
                        onChange={props.handleAdminDeptFiltrChange}
                    />
                    <label htmlFor="administration">Administration</label>
                </div>
            </div>
            <p className="title">Salary Amount</p>
            <input
                type="text"
                name="filterSalaryFrom"
                placeholder="From"
                onChange={props.handleSlrFromFiltrChange}
                value={props.slrFrom}
            />
            <input
                type="text"
                name="filterSalaryTo"
                placeholder="To"
                onChange={props.handleSlrToFiltrChange}
                value={props.slrTo}
            />
            <div className="buttons">
                <div className="button" onClick={props.handleRemoveFilters}>
                    Remove filters
                </div>
            </div>
        </div>
    );
}

export default Filters;
