import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      title: "iPhone 13 Pro",
      amount: 999.99,
      date: new Date(2021, 9, 7),
    },
    {
      title: "Macbook Pro",
      amount: 1999.99,
      date: new Date(2021, 9, 25),
    },
    {
      title: "Carhartt Work Pants",
      amount: 44.99,
      date: new Date(2021, 9, 27),
    },
    {
      title: "McDonald's Spicy Chicken Sandwich",
      amount: 5.99,
      date: new Date(2021, 10, 3),
    },
  ];

  // React.createElement() way of writing JSX
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses }),
  // )

  return (
    <div>
      <NewExpense />
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;