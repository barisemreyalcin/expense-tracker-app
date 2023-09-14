import React, { useState } from "react";

import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const EXISTING_EXPENSES = [
    {
      id: 1,
      date: new Date(2023, 0, 1),
      title: "Car Insurance",
      price: 3000
    },
    {
      id: 2,
      date: new Date(2023, 0, 21),
      title: "New Shoes",
      price: 1300
    },
    {
      id: 3,
      date: new Date(2023, 1, 16),
      title: "Some Books",
      price: 600
    }
  ]

  const [expenseList, setExpenseList] = useState(EXISTING_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenseList(prevExpenseList => [expenseData, ...prevExpenseList]);

  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenseList={expenseList}/>
    </div>
  );
}

export default App;
