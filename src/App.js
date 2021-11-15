import React from "react";

import NewExpense from "./components/NewExpenses/NewExpense";
import Expense from "./components/Expenses/Expense";

const App = () => {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Test1', amount: 123.45, date: new Date(2021, 3, 1)},
        {title: 'Test2', amount: 94.12, date: new Date(2021, 3, 21)},
        {title: 'Test3', amount: 14.00, date: new Date(2021, 4, 7)},
        {title: 'Test4', amount: 543.21, date: new Date(2021, 4, 14)},
    ]

    const addExpenseHandler = (expense) => {
        console.log('in App.js');
        console.log(expense)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expense items={expenses}/>
        </div>
    );
}

export default App;
