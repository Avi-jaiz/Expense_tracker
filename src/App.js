import './App.css';
import ExpenseItems from "./components/ExpenseItems";
import Card from './components/Card';
import NewExpenses from './components/NewExpenses/NewExpenses';
import ExpensesFilter from './components/ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './components/ExpensesChart'

const initialData = [
  {id:1,title:'Udhar', amount:150,date: new Date(2022,8,21)},

]

function App() {
 
const [filteredYear,setFilteredYear] =useState('2020');
const [expenses,setExpenses]  = useState(initialData)



const addExpenseHandler =(expenses)=>
{
      const addedExpense = {
        ...expenses,
        
      }
     
      setExpenses((prevState)=>{
        return [addedExpense,...prevState]
      })
}

const filterChangeHandler = (selectedYear)=>
{
  setFilteredYear(selectedYear)
}

const filteredExpenses = expenses.filter((expenses=>{
  return expenses.date.getFullYear().toString()===filteredYear
  
  }))


const dummy = filteredExpenses.map((getMapped)=>
{
   return getMapped
})



 

  // const mappedItems = expenses.map((expenses,index)=>
  // {
  //    return(
  //     <ExpenseItems 
  //     title={expenses.title}
  //     amount ={expenses.amount}
  //     date={expenses.date}
  //     />
  //    )
  // })


  return (
    <Card className="App" >
      <NewExpenses onAddExpense ={addExpenseHandler}/>
      <ExpensesFilter  selected={filteredYear} onChangeFilter = {filterChangeHandler}/>

    
      <ExpensesChart 
      expense={dummy}
      />
{filteredExpenses.length!==0? (filteredExpenses.map((items,index)=>
{
  return(
    <ExpenseItems 
    key ={items.id}
    title={items.title}
    amount={items.amount}
    date={items.date}
    />
  )
})):<p style={{color:"blue",fontSize:'2rem'}}>No Record Found</p>}
  
    
    </Card>
  );
}

export default App;
