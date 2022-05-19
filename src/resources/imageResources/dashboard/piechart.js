function Chart  (inputs) {
//Chart legend table elements
    function chart_table_body_elem ({img,title,count,percentage}){
        return(
            <div className="chart_table_body_elem flex-row" id={title+count} onClick={()=>{
                change_chart_element(title,count,percentage)}
            }
            style={{margin:'6px'}}>
            <img src={img} alt='bulletin' style={{alignItems:'center'}}></img>
            <div style={{marginLeft:'10px',width:'180px'}}>{title}</div>
            <div style={{width:'56px'}}>{count}</div>
            <div >{percentage+"%"}</div>
        </div>)
    }
    //Changing chart Element
    function change_chart_element (title,count,percentage){
        const acrElem=title.toLowerCase()+'_arc'
        for(let index=0;index<5;index++){
            document.getElementsByClassName('pieChart').item(index).setAttribute('stroke-width',40)
            document.getElementsByClassName('pieChart').item(index).setAttribute('r',120)
            document.getElementsByClassName('pieChart').item(index).setAttribute('stroke-dasharray',`calc(${inputs[index].percentage}*((22/7)*2.4)) calc((22/7)*240)`)
            document.getElementsByClassName('chart_table_body_elem').item(index).style.backgroundColor='#fff'

        }
        document.getElementById(acrElem).setAttribute('stroke-dasharray',`calc(${percentage*11/12}*((22/7)*2.4)) calc((22/7)*240)`)
        document.getElementById(acrElem).setAttribute('stroke-width',60)
        document.getElementById(acrElem).setAttribute('r',110)
        document.getElementById(title+count).style.backgroundColor='#eee'
        document.getElementById('center_text1').innerText=percentage+'%'
        document.getElementById('center_text2').innerText=title
    }
    //Circle Element
let circle=(attributes)=>{
    let totalPercentage=0
    for(let len=attributes.len;len<5;len++)
        totalPercentage+=inputs[len].percentage
    return(
    <circle
        className="pieChart"
        id={attributes.id}
        cx='160'
        cy='160'
        r='120'
        strokeWidth='40'
        stroke={attributes.stroke}
        fill="transparent"
        strokeDasharray={`calc(${attributes.percentage}*((22/7)*2.4)) calc((22/7)*240)`}
        transform={`rotate(${totalPercentage*3.6+90})`}
    ></circle>)}
  return (
    <div className="flex-row">
        {/** Pichart part */}
        <svg width="320" height="320">
        {circle({id:'discovery_arc',percentage:inputs[0].percentage,len:1,stroke:'#0C56EA'})}
        {circle({id:'opportunity_arc',percentage:inputs[1].percentage,len:2,stroke:'#A84EFB'})}
        {circle({id:'ongoing_arc',percentage:inputs[2].percentage,len:3,stroke:'#FF9F3C'})}
        {circle({id:'parked_arc',percentage:inputs[3].percentage,len:4,stroke:'#FFDD20'})}
        {circle({id:'ready_arc',percentage:inputs[4].percentage,len:5,stroke:'#00B8A0'})}
        </svg>
        {/* Pie chart center text part */}
        <div id="center_text">
            <div 
            style={{fontSize:'xx-large',fontWeight:'1000'}} 
            id='center_text1'
            >
                {inputs[0].percentage+'%'}
            </div>
            <div 
            id="center_text2"
            style={{fontSize:'x-large',color:'#aaa'}} 
            >
                {inputs[0].title}
            </div>
        </div>
        {/* Pie chart Legends part */}
        <div style={{marginLeft:'320px',marginBottom:'100px',position:'absolute'}}>
            <div className="chart_table_header flex-row">
                <div className="bold4">Project Status</div>
                <div className="bold4" style={{marginLeft:'100px'}}>136 Projects</div>
            </div>
            <div className="project_br"></div>
            <div className="chart_table_body">
                {inputs.map(elem=>{return(chart_table_body_elem(elem))})}
            </div>
            <div className="project_br" style={{marginTop:'12px'}}></div>
        </div>
    </div>
  );
};



export default Chart;
