import '../styles/expensesFilter.css';
function ExpensesFilter(props) 
{

const dropDownChangeHandler =(event)=>
{
   props.onChangeFilter(event.target.value)
}

    return(
<div className='expesesFilter'>
    <select className='dropDown' onChange={dropDownChangeHandler}>
        <option>
            2020
        </option>
        <option>
            2021
        </option>
        <option>
            2022
        </option>
        <option>
            2023
        </option>
        <option>
            2024
        </option>
       
    </select>

</div>
    )
}

export default ExpensesFilter;
