import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpenseFilter";

function ExpenseList(props) {
    const [selectedYear, setSelectedYear] = useState("2023");

    const filterChangeHandler = (filteredYear) => {
        setSelectedYear(filteredYear);
        console.log(filteredYear);
    }

    const filteredExpenses = props.expenseList.filter(expenseItem => {
        return expenseItem.date.getFullYear().toString() === selectedYear;
    })

    let filteredExpenseContent = <p>No expense found.</p>;
    if(filteredExpenses.length > 0) {
        filteredExpenseContent = filteredExpenses.map(expenseItem => 
            <ExpenseItem 
                key={expenseItem.id}
                date={expenseItem.date}
                title={expenseItem.title}
                price={expenseItem.price}
            />
        )
    }

    return (
        <Card className="expense-list">
            <ExpenseFilter filtered={selectedYear} onFilterChangeHandler={filterChangeHandler}/>
            {filteredExpenseContent}
        </Card>
    )
}

export default ExpenseList;