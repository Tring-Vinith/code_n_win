import React, { Component } from 'react'
import './Dashboard.css'
import icons,{images} from './imageResources/dashboard/export'
import { Chart,Tooltip, Title, ArcElement, Legend} from 'chart.js'
import { Doughnut} from 'react-chartjs-2'
import DonutChart,{Props} from 'react-donut-chart'
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
 Chart.register(Tooltip, Title, ArcElement, Legend)
// function DoughnutChart(){
//   const data={
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     options: {
//       plugins: {
//           legend: {
//               position:'bottom'
//               }
//           }
//       }
//     ,
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   }
//   return(
//     <div>
//       <Doughnut data={data}></Doughnut>
//     </div>
//   )
// }
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
        <h2>
        Dashboard
        </h2>
        <div className='dashboard_body'>
          <div className='project_overview '>
            <div id='project_overview_header'>
              <h3 style={{fontSize:"21px"}}>Projects overview</h3>
              <div style={{margin:"0px 35px 0px 253px"}}>Download report</div>
              <img src={icons.document} style={{margin:"0px 12px 0px 0px"}} alt='document' ></img>
              <img src={icons.pdf} style={{margin:"0px 24px 0px 0px"}} alt='pdf' ></img>
            </div>
            <div className='project_br'></div>
            <div id='project_overview_body' style={{'height':'400px','width':'400px'}}>
              {/* <Doughnut data={this.state.data} options={this.state.options} ></Doughnut> */}
              <DonutChart
              data={[
                {
                  label: 'Give you up',
                  value: 25,
                },
                {
                  label: 'Never give up',
                  value: 15,
                }, {
                  label: 'Give you up',
                  value: 15,
                },
                {
                  label: 'Never give up',
                  value: 15,
                },
              ]}
              // clickToggle={true}
              colors={['#ff0','#f0f','#0ff','#0f0']}
              // width={400}
              // height={400}
              
              ></DonutChart>
            </div>
          </div>
          <div className='project_gallery'>
            <div id='project_gallery_header'>
              <h3 style={{margin:'0px 0px 0px 24px'}}>Project Gallery</h3>
                {/* <Dropdown options={this.state.dropdownOptions} onChange={this._onSelect} value={this.state.defaultOption} placeholder="Select an option" />; */}
              
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
