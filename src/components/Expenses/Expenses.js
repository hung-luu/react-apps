import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
            <ExpensesList items={filteredExpensesArray} />
        </Card>
    );
}

export default Expenses;