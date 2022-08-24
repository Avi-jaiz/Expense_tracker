import '../../styles/newExpenses.css';
import ExpensesForm from './ExpensesForm';

function NewExpenses(props)
{
    const saveExpenseData=(enteredExpenseData)=>
    {
            const expenseData = {
                ...enteredExpenseData,
                id:Math.random().toString()
            }
            

            props.onAddExpense(expenseData)
    }

    return(
<div className="newExpenses">
<ExpensesForm  onExpenseSaveData = {saveExpenseData}/>
</div>
    )
}

export default NewExpenses;