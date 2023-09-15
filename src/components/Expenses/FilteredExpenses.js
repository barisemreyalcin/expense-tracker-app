import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./FilteredExpenses.css";

function FilteredExpenses(props) {
    if(props.filteredExpenses.length === 0) {
        return (<h3>No expenses found.</h3>)
    }

    return (
        <ul>
            {
                props.filteredExpenses.map(expenseItem => 
                    <ExpenseItem 
                    key={expenseItem.id}
                    date={expenseItem.date}
                    title={expenseItem.title}
                    price={expenseItem.price}
                    />)
            }
        </ul>
    )
}

export default FilteredExpenses;