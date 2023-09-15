import React, { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpenseFilter";
import FilteredExpenses from "./FilteredExpenses";

function ExpenseList(props) {
    const [selectedYear, setSelectedYear] = useState("2023");

    const filterChangeHandler = (filteredYear) => {
        setSelectedYear(filteredYear);
        console.log(filteredYear);
    }

    const filteredExpenses = props.expenseList.filter(expenseItem => {
        return expenseItem.date.getFullYear().toString() === selectedYear;
    })

    return (
        <Card className="expense-list">
            <ExpenseFilter filtered={selectedYear} onFilterChangeHandler={filterChangeHandler}/>
            <FilteredExpenses filteredExpenses={filteredExpenses}/>
        </Card>
    )
}

export default ExpenseList;