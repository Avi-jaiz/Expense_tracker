import ChartBar from "./ChartBar";
import '../../styles/chart.css'

function Chart(props)
{
    const dataPointValues = props.dataPoints.map(datapoint=>datapoint.value)
     const totalMaximum = Math.max(...dataPointValues)

   console.log('totalMaximum'+ totalMaximum)
    return(
   <div className="chart">

{
    props.dataPoints.map((datapoint)=>
    
        <ChartBar
        key={datapoint.label}
        value={datapoint.value}
        maxValue={totalMaximum}
        label={datapoint.label}
        
        />
    )
    
   
}


   </div>
        
    )
}

export default Chart;