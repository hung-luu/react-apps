import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2021, 10, 7);
    const expenseTitle = "iPhone 13 Pro";
    const expenseAmount = 999.99;

    return (
        <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
        </div>
        <div className="expense-item__price">${expenseAmount}</div>
        </div>
    );
}

export default ExpenseItem;
