import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart(props) {
    const chartDataPoints = [
        {monthLabel: "Jan", value: 0},
        {monthLabel: "Feb", value: 0},
        {monthLabel: "Mar", value: 0},
        {monthLabel: "Apr", value: 0},
        {monthLabel: "May", value: 0},
        {monthLabel: "Jun", value: 0},
        {monthLabel: "Jul", value: 0},
        {monthLabel: "Aug", value: 0},
        {monthLabel: "Sep", value: 0},
        {monthLabel: "Oct", value: 0},
        {monthLabel: "Nov", value: 0},
        {monthLabel: "Dec", value: 0},
    ];

    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //0: Jan, 1: Feb...
        chartDataPoints[expenseMonth].value += expense.price;
    }
    return (
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpenseChart;