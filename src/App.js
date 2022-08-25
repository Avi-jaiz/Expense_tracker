import './App.css';
import ExpenseItems from "./components/ExpenseItems";
import Card from './components/Card';
import NewExpenses from './components/NewExpenses/NewExpenses';
import ExpensesFilter from './components/ExpensesFilter';
import { useState } from 'react';


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

const filteredExpenses = expenses.filter((expenses=>
  {
      return expenses.date.getFullYear().toString()===filteredYear
  }))

  return (
    <Card className="App" >
      <NewExpenses onAddExpense ={addExpenseHandler}/>
      <ExpensesFilter  selected={filteredYear} onChangeFilter = {filterChangeHandler}/>

{filteredExpenses.length===0?<p style={{color:'white',fontSize:'2rem'}}>No record Found</p>:(
  filteredExpenses.map((item,index)=>
  {
    return (
      <ExpenseItems 
      title={item.title}
      amount={item.amount}
      date={item.date}

      />
    )
  })
)}
    
    
    </Card>
  );
}

export default App;
