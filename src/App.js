import React from "react";

import ExpenseList from "./components/ExpenseList";

function App() {
  const expenseList = [
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

  return (
    <div className="App">
      <ExpenseList expenseList={expenseList}/>
    </div>
  );
}

export default App;
