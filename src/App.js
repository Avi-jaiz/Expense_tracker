import './App.css';
import ExpenseItems from "./components/ExpenseItems";
import Card from './components/Card';
import NewExpenses from './components/NewExpenses/NewExpenses';
import ExpensesFilter from './components/ExpensesFilter';
import { useState } from 'react';

function App() {
 
const [filteredYear,setFilteredYear] =useState('2020')

  const expenseData = [
    {id:1,title:'Insurance', amount:1200,date: new Date(2022,8,21)},
    
    {id:2,title:'Home Loan', amount:15000,date: new Date(2022,8,15)},
    {id:3,title:'Groceries', amount:7500,date: new Date(2022,8,2)},
    {id:4,title:'Medicines', amount:9000,date: new Date(2022,8,5)},


]

const addExpenseHandler =(expenses)=>
{
      const addedExpense = {
        ...expenses,
        
      }
      console.log(addedExpense)
      console.log('from App.js')
}

const filterChangeHandler = (selectedYear)=>
{
  setFilteredYear(selectedYear)
}
console.log(filteredYear)

  return (
    <Card className="App" >
      <NewExpenses onAddExpense ={addExpenseHandler}/>
      <ExpensesFilter  selected={filteredYear} onChangeFilter = {filterChangeHandler}/>

<ExpenseItems 
title = {expenseData[0].title}
amount = {expenseData[0].amount}

date ={expenseData[0].date}



/>
 <ExpenseItems
 title = {expenseData[1].title}
 amount = {expenseData[1].amount}
 year = {expenseData[1].date}
 month = {expenseData[1].date}
 date ={expenseData[1].date}
 />   
 <ExpenseItems 
 title = {expenseData[2].title}
 amount = {expenseData[2].amount}
 year = {expenseData[2].date}
 month = {expenseData[2].date}
 date ={expenseData[2].date}
 />
 <ExpenseItems 
 title = {expenseData[3].title}
 amount = {expenseData[3].amount}
 year = {expenseData[3].date}
 month = {expenseData[3].date}
 date ={expenseData[3].date}
 />    



    
    
    </Card>
  );
}

export default App;
