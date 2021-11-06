import './Expense.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expense = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                         date={props.expenses[0].date}/>
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                         date={props.expenses[0].date}/>
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                         date={props.expenses[0].date}/>
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                         date={props.expenses[0].date}/>
        </Card>
    );

}

export default Expense;