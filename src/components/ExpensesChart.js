import { type } from "@testing-library/user-event/dist/type";
import Chart from "./Chart/Chart";

function ExpensesChart(props)
{

const chartDataPoints =[
    {label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
    {label:'Sept',value:0},
    {label:'Oct',value:0},
    {label:'Nov',value:0},
    {label:'Dec',value:0},
]

for(const expense of props.expense)
{
    /* const expenseMonth = expense.date.getMonth();

    chartDataPoints[expenseMonth].value += expense.month; */
// const expenseMonth = expense;

// chartDataPoints[expenseMonth].value += expenseMonth

// console.log(chartDataPoints)

 const expenseMonth = expense.date.getMonth();

chartDataPoints[expenseMonth].value += expense.amount


console.log(chartDataPoints)
}

    return(
<Chart dataPoints = {chartDataPoints}/>
    )
}

export default ExpensesChart;