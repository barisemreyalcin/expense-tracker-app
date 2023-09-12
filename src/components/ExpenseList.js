import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function Expenses(props) {
    return (
        <div className="expense-list">
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
        </div>
    )
}

export default Expenses;