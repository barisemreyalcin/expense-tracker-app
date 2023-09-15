import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm"; 
import "./NewExpense.css";

function NewExpense(props) {
    const [isEnteringNewExpense, setIsEnteringNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEnteringNewExpense(false);
    }

    const startEnteringNewExpenseHandler = () => {
        setIsEnteringNewExpense(true);
    }

    const stopEnteringNewExpenseHandler = () => {
        setIsEnteringNewExpense(false);
    }

    return (
        <div className="new-expense">
            {!isEnteringNewExpense && <button className="collapse-form" onClick={startEnteringNewExpenseHandler}>Add New Expense</button>}
            {isEnteringNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelAdding={stopEnteringNewExpenseHandler}/>}
        </div>
    )
}

export default NewExpense;