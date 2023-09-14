import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Changed!");
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{title}</h2>
                <p className="expense-item__price">{props.price}₺</p>
                <button onClick={clickHandler}>Edit Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;