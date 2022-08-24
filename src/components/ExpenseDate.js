import '../styles/expenseDate.css';


function ExpenseDate(props)
{
    const year = props.date.getFullYear(); 
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.getDate();



    return(
        <>
        <div><h3>{year}</h3></div>
            <div><h4>{month}</h4></div>
            <div><h2>{day}</h2></div>
        
        </>

    )
}

export default ExpenseDate;