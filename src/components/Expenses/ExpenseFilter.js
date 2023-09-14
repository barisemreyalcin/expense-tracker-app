import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {

    const filterHandler = (event) => {
        props.onFilterChangeHandler(event.target.value);
    }

    return (
        <div className="expense-filter">
            <div className="expense-filter-control">
                <label>Filter by year</label>
                <select value={props.filtered} onChange={filterHandler}>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;