import '../styles/expenseItems.css';
import ExpenseDate from '../components/ExpenseDate';
import Card from './Card';
import { useState } from 'react';

function ExpenseItems(props)
{
    const [title,setTitle] = useState(props.title);
    const handleClick = ()=>
    {
        //  setTitle('washing')
         console.log(title)
    }

   
    return (
        <Card className='expense-item'>
            <div className='date'>
            <ExpenseDate date={props.date}/>
            
           </div>
           <div className='expense-item__title'>
                <h2>{title} </h2>
                 </div>
            
                 <div className='expense-item__price'>₹{props.amount}</div>

                
<button onClick={handleClick} className='buttonDelete'>Delete</button>


        </Card>
    )
}

export default ExpenseItems;