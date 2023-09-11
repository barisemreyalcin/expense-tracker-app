import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem 
        date={expenseList[0].date}
        title={expenseList[0].title}
        price={expenseList[0].price}
      ></ExpenseItem>
            <ExpenseItem 
        date={expenseList[1].date}
        title={expenseList[1].title}
        price={expenseList[1].price}
      ></ExpenseItem>
            <ExpenseItem 
        date={expenseList[2].date}
        title={expenseList[2].title}
        price={expenseList[2].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
