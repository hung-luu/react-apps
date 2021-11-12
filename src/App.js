import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "iPhone 13 Pro",
      amount: 999.99,
      date: new Date(2021, 10, 7),
    },
    {
      title: "Macbook Pro",
      amount: 1999.99,
      date: new Date(2021, 10, 25),
    },
    {
      title: "Carhartt Work Pants",
      amount: 44.99,
      date: new Date(2021, 10, 20),
    },
    {
      title: "McDonald's Spicy Chicken Sandwich",
      amount: 5.99,
      date: new Date(2021, 11, 3),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
