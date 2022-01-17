import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021")
    const filteredExpensesArray = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const saveFilterDataHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        // console.log(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onSaveFilterData={saveFilterDataHandler}
            />
            {filteredExpensesArray.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;