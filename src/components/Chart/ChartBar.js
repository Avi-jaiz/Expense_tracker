import '../../styles/chartBar.css';

function ChartBar(props)
{
  let barFillHeight = "0%";
  

  if(props.maxValue>0)
  {
    //  barFillHeight = Math.floor((props.value/props.MaxValue)*100) +"%";

    barFillHeight = Math.floor((props.value/props.maxValue)*100);
  }

  console.log(barFillHeight)

    return(
<div className="chartBar">
<div className="chartBar_inner">
    <div className="chartBar_fill" style={{'height':barFillHeight}}>
{props.value}
    </div>
    
</div>
<div className="chartBar_label">{props.label} </div>
</div>
    )
}

export default ChartBar;