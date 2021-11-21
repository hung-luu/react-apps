import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;