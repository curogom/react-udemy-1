import React , {useState} from "react";

import NewExpense from "./components/NewExpenses/NewExpense";
import Expense from "./components/Expenses/Expense";

const DUMMY_EXPENSE = [
    {id: 'id1', title: 'Car Insurance', amount: 294.67, date: new Date(2019, 2, 28)},
    {id: 'id2', title: 'Test1', amount: 123.45, date: new Date(2019, 3, 1)},
    {id: 'id3', title: 'Test2', amount: 94.12, date: new Date(2020, 3, 21)},
    {id: 'id4',title: 'Test3', amount: 14.00, date: new Date(2020, 4, 7)},
    {id: 'id5',title: 'Test4', amount: 543.21, date: new Date(2021, 4, 14)},
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expense items={expenses}/>
        </div>
    );
}

export default App;
