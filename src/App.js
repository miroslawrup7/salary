import React, { useEffect, useState } from "react";
import Add from "./layouts/Add";
import Filters from "./layouts/Filters";
import List from "./layouts/List";
import Summary from "./layouts/Summary";
import "./App.css";

function App() {
    const [workersList, setWorkersList] = useState([
        {
            firstName: "John",
            lastName: "Smith",
            department: "IT",
            salary: { amount: 3000, currency: "USD" },
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            department: "IT",
            salary: { amount: 3000.5, currency: "USD" },
        },
        {
            firstName: "Bob",
            lastName: "Colman",
            department: "Sales",
            salary: { amount: 9000, currency: "USD" },
        },
        {
            firstName: "Barbara",
            lastName: "O'Connor",
            department: "Sales",
            salary: { amount: 4000, currency: "USD" },
        },
        {
            firstName: "Adam",
            lastName: "Murphy",
            department: "Administration",
            salary: { amount: 2000, currency: "USD" },
        },
    ]);

    const [fNameContent, setfNameContent] = useState("");
    const [lNameContent, setlNameContent] = useState("");
    const [departmentContent, setDepartmentContent] = useState("IT");
    const [salaryAmountContent, setSalaryAmountContent] = useState("");
    const [salaryCurrentContent, setSalaryCurrentContent] = useState("USD");
    const [filteredWorkerList, setFilteredWorkerList] = useState([]);

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [itDept, setItDept] = useState(false);
    const [salesDept, setSalesDept] = useState(false);
    const [adminDept, setAdminDept] = useState(false);
    const [slrFrom, setSlrFrom] = useState("");
    const [slrTo, setSlrTo] = useState("");

    const [itDeptAll, setItDeptAll] = useState(0);
    const [salesDeptAll, setSalesDeptAll] = useState(0);
    const [adminDeptAll, setAdminDeptAll] = useState(0);
    const [summaryAll, setSummaryAll] = useState(0);

    useEffect(() => {
        setFilteredWorkerList(workersList);
    }, [workersList]);

    useEffect(() => {
        calcSummAll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredWorkerList]);

    useEffect(() => {
        handleApplyFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itDept, salesDept, adminDept, fName, lName, slrFrom, slrTo]);

    const handlefNameChange = (e) => {
        setfNameContent(e.target.value);
    };

    const handlelNameChange = (e) => {
        setlNameContent(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartmentContent(e.target.value);
    };

    const handleSalaryAmountChange = (e) => {
        setSalaryAmountContent(Number(e.target.value));
    };

    const handleSalaryCurrentChange = (e) => {
        setSalaryCurrentContent(e.target.value);
    };

    const handleAdd = () => {
        setWorkersList((prevValue) =>
            prevValue.concat({
                firstName: fNameContent,
                lastName: lNameContent,
                department: departmentContent,
                salary: {
                    amount: salaryAmountContent,
                    currency: salaryCurrentContent,
                },
            })
        );
        setfNameContent("");
        setlNameContent("");
        setDepartmentContent("IT");
        setSalaryAmountContent("");
        setSalaryCurrentContent("USD");
    };

    const handlefNameFiltrChange = (e) => {
        setfName(e.target.value);
    };

    const handlelNameFiltrChange = (e) => {
        setlName(e.target.value);
    };

    const handleItDeptFiltrChange = () => {
        setItDept(!itDept);
    };

    const handleSalesDeptFiltrChange = () => {
        setSalesDept(!salesDept);
    };

    const handleAdminDeptFiltrChange = () => {
        setAdminDept(!adminDept);
    };

    const handleSlrFromFiltrChange = (e) => {
        setSlrFrom(e.target.value);
    };

    const handleSlrToFiltrChange = (e) => {
        setSlrTo(e.target.value);
    };

    const handleApplyFilters = () => {
        setFilteredWorkerList(
            workersList.filter((elem) => {
                if (
                    elem.firstName.toLowerCase() !== fName.toLowerCase() &&
                    fName !== ""
                ) {
                    return false;
                }

                if (
                    elem.lastName.toLowerCase() !== lName.toLowerCase() &&
                    lName !== ""
                ) {
                    return false;
                }

                if (
                    itDept === true ||
                    salesDept === true ||
                    adminDept === true
                ) {
                    if (
                        (elem.department === "IT" && itDept === false) ||
                        (elem.department === "Sales" && salesDept === false) ||
                        (elem.department === "Administration" &&
                            adminDept === false)
                    ) {
                        return false;
                    }
                }

                if (elem.salary.amount < slrFrom && slrFrom !== "") {
                    return false;
                }

                if (elem.salary.amount > slrTo && slrTo !== "") {
                    return false;
                }

                return true;
            })
        );
    };

    const handleRemoveFilters = () => {
        setfName("");
        setlName("");
        setItDept(false);
        setSalesDept(false);
        setAdminDept(false);
        setSlrFrom("");
        setSlrTo("");
    };

    const calcSummAll = () => {
        setSummaryAll(0);
        setItDeptAll(0);
        setSalesDeptAll(0);
        setAdminDeptAll(0);
        filteredWorkerList.forEach(function (elem) {
            setSummaryAll((prevValue) => prevValue + elem.salary.amount);
            elem.department === "IT" &&
                setItDeptAll((prevValue) => prevValue + elem.salary.amount);
            elem.department === "Sales" &&
                setSalesDeptAll((prevValue) => prevValue + elem.salary.amount);
            elem.department === "Administration" &&
                setAdminDeptAll((prevValue) => prevValue + elem.salary.amount);
        });
    };

    return (
        <div className="app">
            <header></header>
            <main>
                <Add
                    handleAdd={handleAdd}
                    handlefNameChange={handlefNameChange}
                    handlelNameChange={handlelNameChange}
                    handleDepartmentChange={handleDepartmentChange}
                    handleSalaryAmountChange={handleSalaryAmountChange}
                    handleSalaryCurrentChange={handleSalaryCurrentChange}
                    fNameContent={fNameContent}
                    lNameContent={lNameContent}
                    departmentContent={departmentContent}
                    salaryAmountContent={salaryAmountContent}
                    salaryCurrentContent={salaryCurrentContent}
                />
                <div className="wrapper_1">
                    <Filters
                        handlefNameFiltrChange={handlefNameFiltrChange}
                        handlelNameFiltrChange={handlelNameFiltrChange}
                        handleItDeptFiltrChange={handleItDeptFiltrChange}
                        handleSalesDeptFiltrChange={handleSalesDeptFiltrChange}
                        handleAdminDeptFiltrChange={handleAdminDeptFiltrChange}
                        handleSlrFromFiltrChange={handleSlrFromFiltrChange}
                        handleSlrToFiltrChange={handleSlrToFiltrChange}
                        fName={fName}
                        lName={lName}
                        itDept={itDept}
                        salesDept={salesDept}
                        adminDept={adminDept}
                        slrFrom={slrFrom}
                        slrTo={slrTo}
                        handleApplyFilters={handleApplyFilters}
                        handleRemoveFilters={handleRemoveFilters}
                    />
                    <div className="wrapper_2">
                        <List workersList={filteredWorkerList} />
                        <Summary
                            summaryAll={summaryAll}
                            itDeptAll={itDeptAll}
                            salesDeptAll={salesDeptAll}
                            adminDeptAll={adminDeptAll}
                        />
                    </div>
                </div>
            </main>
            <footer>&copy; TEKK7</footer>
        </div>
    );
}

export default App;
