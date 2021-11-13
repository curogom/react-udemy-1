import React, {useState} from "react";

import './Expense.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandeler = (selectedYear) => {
        console.log('Expense.js')
        console.log(selectedYear)
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandeler} selected={filteredYear}/>
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                             date={props.expenses[0].date}/>
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                             date={props.expenses[0].date}/>
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                             date={props.expenses[0].date}/>
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                             date={props.expenses[0].date}/>
            </Card>
        </div>
    );

}

export default Expense;