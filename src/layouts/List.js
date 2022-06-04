import React from "react";
import ListElem from "../components/ListElem";
import "../styles/List.css";

function List(props) {
    let workers = props.workersList.map((worker, index) => {
        return (
            <ListElem
                key={index}
                lp={index + 1}
                fname={worker.firstName}
                lname={worker.lastName}
                department={worker.department}
                salaryAmount={worker.salary.amount}
                salaryCurrency={worker.salary.currency}
            />
        );
    });

    return (
        <div className="list">
            <div className="list-head">
                <p className="lp">Lp.</p>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Department</p>
                <p>Salary</p>
            </div>
            {workers}
        </div>
    );
}

export default List;
