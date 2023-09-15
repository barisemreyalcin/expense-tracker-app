import React, {useState} from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredPrice("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='5' step='5' value={enteredPrice} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button className="cancel" type="button" onClick={props.onCancelAdding}>Cancel</button>
                <button className="add-expense" type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;