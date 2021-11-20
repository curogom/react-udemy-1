import React, {useState} from "react";

import './Expense.css';
import './ExpensesList';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

    };

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );

}

export default Expense;