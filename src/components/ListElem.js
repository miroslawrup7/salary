import React from "react";
import "../styles/ListElem.css";

function ListElem(props) {
    return (
        <div className="list-elem">
            <p className="lp">{props.lp}</p>
            <p>{props.fname}</p>
            <p>{props.lname}</p>
            <p>{props.department}</p>
            <p>
                {props.salaryAmount} {props.salaryCurrency}
            </p>
        </div>
    );
}

export default ListElem;
