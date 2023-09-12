import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";

function ExpenseList(props) {
    return (
        <Card className="expense-list">
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