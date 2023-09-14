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
            {props.expenseList.map(expenseItem => 
                <ExpenseItem 
                    key={expenseItem.id}
                    date={expenseItem.date}
                    title={expenseItem.title}
                    price={expenseItem.price}
                />
            )}
        </Card>
    )
}

export default ExpenseList;