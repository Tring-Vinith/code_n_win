import React, { Component } from 'react'
import './Dashboard.css'
import icons,{images,ovals} from './imageResources/dashboard/export'
import DonutChart from 'react-donut-chart'
import Chart from './imageResources/dashboard/Chart'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      chartInput:[{
        img:ovals[0],
        title:"Discovery",
        count:'15',
        percentage:11
      },{
        img:ovals[1],
        title:"Opportunity",
        count:'19',
        percentage:2.5
      },{
        img:ovals[2],
        title:"Ongoing",
        count:'01',
        percentage:14
      },{
        img:ovals[3],
        title:"Parked",
        count:'01',
        percentage:2.5
      },{
        img:ovals[4],
        title:"Ready",
        count:'95',
        percentage:70
      }],
      data:[
        {
          label:"Discovery",
          value:11
        },{
          label:"Opportunity",
          value:2.5
        },{
          label:"Ongoing",
          value:14
        },{
          label:"Parked",
          value:2.5
        },{
          label:"Ready",
          value:70
        }
      ],
      dropdownOptions:['Pland-App','Reuters-Emerald','Reuters-RCOM','SRMG-Manga ph3'],
      defaultOption:'Pland-App',
      imageGalleryIndex:{
        totalIndex:15,
        currentIndex:6
      },
    
    }
   this.changeIndex.bind(this)
  }

  changeIndex(increment){
    if(!increment){
      if(this.state.imageGalleryIndex.currentIndex===1){
        return
      }else{
        let state=this.state
        state.imageGalleryIndex.currentIndex=state.imageGalleryIndex.currentIndex-1
        this.setState({state})
      }
    }
    else{
      if(this.state.imageGalleryIndex.currentIndex===this.state.imageGalleryIndex.totalIndex){
        return
      }else{
        let state=this.state
        state.imageGalleryIndex.currentIndex=state.imageGalleryIndex.currentIndex+1
        this.setState({state})
      }
    }
  }
componentDidMount(){
  document.getElementById('discovery_arc').setAttribute('stroke-width',60)
  document.getElementById('discovery_arc').setAttribute('r',110)
  document.getElementById('discovery_arc').setAttribute('stroke-dasharray',`calc(${this.state.chartInput[0].percentage*11/12}*((22/7)*2.4)) calc((22/7)*240)`)
  document.getElementById(this.state.chartInput[0].title+this.state.chartInput[0].count).style.backgroundColor='#eee'
  // document.getElementsByClassName("donutchart-innertext-label")[0].setAttribute("y","55%")
  // document.getElementsByClassName("donutchart-innertext-label")[0].setAttribute("fill","#aaa")
  // document.getElementsByClassName("donutchart-innertext-label")[0].setAttribute("font","30px")
  // document.getElementsByClassName("donutchart-innertext-value")[0].setAttribute("y","45%")
}
  render() {
    return (
      <div>
        <h2 style={{marginLeft:'24px'}}>Dashboard</h2>
        <div className='dashboard_body'>
          <div className='project_overview '>
            <div id='project_overview_header'>
              <h3 style={{fontSize:"18px",width:'180px'}}>Projects overview</h3>
              <div style={{margin:"0px 35px 0px 253px",fontWeight:'bold',fontSize:'small',width:'120px'}}>Download report</div>
              <img src={icons.document} style={{margin:"0px 12px 0px 0px"}} alt='document' ></img>
              <img src={icons.pdf} style={{margin:"0px 24px 0px 0px"}} alt='pdf' ></img>
            </div>
            <div className='project_br'></div>
            <div id='project_overview_body' >
              {Chart(this.state.chartInput)}
              
            </div>
            {/* <DonutChart className='donutchart' data={this.state.data} legend='true' colors={['#0C56EA','#A84EFB','#FF9F3C','#FFDD20','#00B8A0']} strokeColor="none" innerRadius={0.9} outerRadius={0.6} selectedOffset={-0.1} /> */}
            
          </div>

      {/**Project Gallery */}
          <div className='project_gallery'>
            <div id='project_gallery_header'>
              <h3 style={{margin:'0px 0px 0px 24px'}}>Project Gallery</h3>              
              <select name="dropdown" id="dropdown">
                <option value='Pland-App'>Pland-App</option>
                <option value='Reuters-Emerald'>Reuters-Emerald</option>
                <option value="Reuters-RCOM">Reuters-RCOM</option>
                <option value="SRMG-Manga ph3">SRMG-Manga ph3</option>
              </select>
            </div>
            <div className='project_br'></div>
            <div id='project_gallery_body'>
            <div id='image_gallery'>
              {images.map((img,index)=>{
                return(<img key={index} src={img} alt={'img'+index} className='image_source' />)
              })}
              
            </div>
            <div className='flex-row'  style={{marginTop:'10px',alignItems:'end'}}>
              <div id='index' >
                <img src={icons.left_arrrow} alt='left'onClick={()=>{this.changeIndex(false)}}/>
                {this.state.imageGalleryIndex.currentIndex +
                '/'+this.state.imageGalleryIndex.totalIndex}
                <img src={icons.right_arrrow} alt='right'onClick={()=>{this.changeIndex(true)}}/>
              </div>
              <div id='addscreens' className='flex-row' style={{marginLeft:'176px'}}>
                <img src={icons.add_new} alt='add' onClick={(e)=>{e.target.src=icons.add_new_active}}></img>
                <div style={{marginLeft:'5px'}}>Add screens</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
