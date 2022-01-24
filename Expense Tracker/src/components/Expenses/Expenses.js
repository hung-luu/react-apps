import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
            <ExpensesChart expenses={filteredExpensesArray} />
            <ExpensesList items={filteredExpensesArray} />
        </Card>
    );
}

export default Expenses;