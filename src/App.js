import Expense from "./components/Expenses/Expense";

const App = () => {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    ]

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expense expenses={expenses}/>
        </div>
    );
}

export default App;
