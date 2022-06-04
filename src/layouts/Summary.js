import React from "react";
import "../styles/Summary.css";

function Summary(props) {
    return (
        <>
            <div className="list-dept">
                <div className="summary-dept">
                    <p className="lp"></p>
                    <p></p>
                    <p></p>
                    <p>IT</p>
                    <p>{props.itDeptAll} USD</p>
                </div>
            </div>
            <div className="list-dept">
                <div className="summary-dept">
                    <p className="lp"></p>
                    <p></p>
                    <p></p>
                    <p>Sales</p>
                    <p>{props.salesDeptAll} USD</p>
                </div>
            </div>
            <div className="list-dept">
                <div className="summary-dept">
                    <p className="lp"></p>
                    <p></p>
                    <p></p>
                    <p>Administration</p>
                    <p>{props.adminDeptAll} USD</p>
                </div>
            </div>
            <div className="list">
                <div className="summary">
                    <p className="lp"></p>
                    <p></p>
                    <p></p>
                    <p>Summary</p>
                    <p>{props.summaryAll} USD</p>
                </div>
            </div>
        </>
    );
}

export default Summary;
