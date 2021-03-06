import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const TEST_EXPENSES = [
  {
    id: "e1",
    title: "iPhone 13 Pro",
    amount: 999.99,
    date: new Date(2022, 9, 7),
  },
  {
    id: "e2",
    title: "Macbook Pro",
    amount: 1999.99,
    date: new Date(2021, 9, 25),
  },
  {
    id: "e3",
    title: "Carhartt Work Pants",
    amount: 44.99,
    date: new Date(2020, 9, 27),
  },
  {
    id: "e4",
    title: "McDonald's Spicy Chicken Sandwich",
    amount: 5.99,
    date: new Date(2020, 10, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(TEST_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  // React.createElement() way of writing JSX
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses }),
  // )

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
      />
    </div>
  );
}

export default App;