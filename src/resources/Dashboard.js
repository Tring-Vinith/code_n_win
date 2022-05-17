import React, { Component } from 'react'
import './Dashboard.css'
import icons,{images} from './imageResources/dashboard/export'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      data:{
        circumference:100,
        labels: [
          'Discovery    15  11%',
          'Opportunity  19  1%',
          'Ongoing      01  14%',
          'Parked       01  1%',
          'Ready        95  70%'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 1, 14,1,70],
          backgroundColor: [
            '#0C56EA',
            '#A84EFB',
            '#FF9F3C',
            '#FFDD20',
            '#00B8A0'
          ],
          hoverOffset: 20,
        }],
      },
      options:{
        radius:100,
        height:100,
        width:100,
        plugins: {
          legend: {
              display: true,
              labels: {
              },
              position:'right',
              borderRadius:10 ,
          },

      }
      },
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
  
  render() {
    return (
      <div>
        <h2 style={{marginLeft:'24px'}}>Dashboard</h2>
        <div className='dashboard_body'>
          <div className='project_overview '>
            <div id='project_overview_header'>
              <h3 style={{fontSize:"18px",width:'180px'}}>Projects overview</h3>
              <div style={{margin:"0px 35px 0px 253px"}}>Download report</div>
              <img src={icons.document} style={{margin:"0px 12px 0px 0px"}} alt='document' ></img>
              <img src={icons.pdf} style={{margin:"0px 24px 0px 0px"}} alt='pdf' ></img>
            </div>
            <div className='project_br'></div>
            <div id='project_overview_body' style={{'height':'400px','width':'400px'}}>
              
              <svg width="690" height="320">
                <circle id='discovery_arc' cx="160" cy="340" r="120" stroke="#0C56EA" stroke-width="40" 
                  stroke-dasharray="calc(100*((22/7)*2.4)) calc((22/7)*400)"   
                  fill="transparent" 
                  transform="rotate(90) translate(0 -500)"
                />
                <circle id='opportunity_arc' cx="160" cy="340" r="120" stroke="#A84EFB" stroke-width="40" 
                  stroke-dasharray="calc(86*((22/7)*2.4)) calc((22/7)*400)"   fill="transparent" 
                  transform="rotate(90) translate(0 -500)"
                />
                <circle id='ongoing_arc' cx="160" cy="340" r="120" stroke="#FF9F3C" stroke-width="40" 
                  stroke-dasharray="calc(85*((22/7)*2.4)) calc((22/7)*400)" 
                  fill="transparent" 
                  transform="rotate(90) translate(0 -500)"
                />
                <circle id='parked_arc' cx="160" cy="340" r="120" stroke="#FFDD20" stroke-width="40" 
                  stroke-dasharray="calc(71*((22/7)*2.4)) calc((22/7)*400)" 
                  fill="transparent" 
                  transform="rotate(90) translate(0 -500)"
                />
                <circle id='ready_arc' cx="160" cy="340" r="120" stroke="#00B8A0" stroke-width="40" 
                  stroke-dasharray="calc(70*((22/7)*2.4)) calc((22/7)*400)" 
                  fill="transparent" 
                  transform="rotate(90) translate(0 -500)"
                />
                <text x="140" y="170">hello</text>
              </svg>
            </div>
          </div>
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
                return(<img src={img} alt={'img'+index} className='image_source'></img>)
              })}
              
            </div>
            <div id='project_gallery_footer'>

              <div id='index' >
                <img src={icons.left_arrrow} alt='left'onClick={()=>{this.changeIndex(false)}}/>
                {this.state.imageGalleryIndex.currentIndex +
                '/'+this.state.imageGalleryIndex.totalIndex}
                <img src={icons.right_arrrow} alt='right'onClick={()=>{this.changeIndex(true)}}/>
              </div>
              <div id='addscreens'>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
