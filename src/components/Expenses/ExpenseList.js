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

    return (
        <Card className="expense-list">
            <ExpenseFilter filtered={selectedYear} onFilterChangeHandler={filterChangeHandler}/>
            <ExpenseItem 
                date={props.expenseList[0].date}
                title={props.expenseList[0].title}
                price={props.expenseList[0].price}
            />
            <ExpenseItem 
                date={props.expenseList[1].date}
                title={props.expenseList[1].title}
                price={props.expenseList[1].price}
            />
            <ExpenseItem 
                date={props.expenseList[2].date}
                title={props.expenseList[2].title}
                price={props.expenseList[2].price}
            />
        </Card>
    )
}

export default ExpenseList;