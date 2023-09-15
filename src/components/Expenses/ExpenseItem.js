import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2 className="expense-item__title">{props.title}</h2>
                    <p className="expense-item__price">{props.price}₺</p>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;