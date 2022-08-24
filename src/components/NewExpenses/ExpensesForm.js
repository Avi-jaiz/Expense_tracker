import '../../styles/expensesForm.css';
import {useState} from 'react';


function ExpensesForm(props)
{
    const [userInput,setUserInput] = useState({
        title: "",
        amount:"",
        date:"",
    })

 const handleTitle =(event)=>
 {
      setUserInput((prevState)=>
      {
        return{...prevState,title:event.target.value}
      })
 } 

 const handleAmount =(event)=>
 {
  setUserInput((prevState)=>
  {
    return {...prevState,amount:event.target.value}
  })
 }

 const handleDate =(event)=>
 {
    
    setUserInput((prevState)=>
    {
        return {...prevState,date:event.target.value}
    })
  
 }
const handleSubmit = (event)=>
{
    event.preventDefault()
if(userInput.title && userInput.amount && userInput.date!=="")
{
    
    const expenseData =
    {
        title:userInput.title,
        amount:userInput.amount,
        date: new Date(userInput.date)
    }
    props.onExpenseSaveData(expenseData)
    setUserInput({
        title:"",
        amount:"",
        date:"",
    })

 }
 else 
 {
    alert('Please fill all the fields.')
 }
}

    return(
<form className='expenseForm' onSubmit={handleSubmit}>
    <div className='formHead'>
        <label className="title">Title</label>
        <div>
        <input type ='text' className='formInput' value={userInput.title} onChange={handleTitle}/>

        </div>
        

    </div>

    <div className='formAmount'>
        <label className='amount'>Amount</label>
       <div>
       <input type ='number' value={userInput.amount} className='formInput'
       onChange={handleAmount}
       />
       </div>

    </div>

    <div className='formDate'>
        <label className='inputDate-1'>Date</label>
       <div className='inputDate'>
       <input type ='date' min="2020-01-01" max="2024-09-31"  value={userInput.date} className='formInputDate'
       onChange={handleDate}
       />
       </div>

    </div>

    <div className='formSubmit'>
<button className="button" >Submit</button>
    </div>
</form>
    )
}

export default ExpensesForm;