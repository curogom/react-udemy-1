import React from "react";

import NewExpense from "./components/NewExpenses/NewExpense";
import Expense from "./components/Expenses/Expense";

const App = () => {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    ]

    const addExpenseHandler = (expense) => {
        console.log('in App.js');
        console.log(expense)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expense expenses={expenses}/>
        </div>
    );
}

export default App;
