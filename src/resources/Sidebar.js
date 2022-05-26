import React, { Component } from 'react';
import './Sidebar.css';
import {active as active_icons} from './imageResources/sidebar/active_icons/export';
import {inactive as inactive_icons} from './imageResources/sidebar/inactive_icons/export';
export default class Sidebar extends Component {
    constructor (props){
      super(props)
      this.state={
        is_active:{DASHBOARD:true}
      }
      this.changeColour=this.changeColour.bind(this)

    }
    changeColour(e){
      let element={DASHBOARD:false}
      try{
        if(e.target.childNodes[2]){
          console.log(e.target.childNodes[2]);
          element[e.target.childNodes[2].innerText]=true
          this.setState({is_active:element})
        }
        else{
          element[e.target.parentElement.childNodes[2].innerText]=true
          this.setState({is_active:element})
        }
      }
      catch(err){}
    }
    elem=(field)=>{
      let sb_element_bg_default='#04162C',
        sb_element_bg_active='#34465C';      
      return(
        this.state.is_active[field]?
        (
        <div  className='sidebarElems' onClick={(e)=>{this.changeColour(e);}}
          style={{'backgroundColor':sb_element_bg_active}}>
          <div style={{"backgroundColor":"#0f0", 'padding':'25px 1.5px', color:"#0f0"}}></div>
          <img src={active_icons[field]} alt='icon' className='sidebarIcons'/>
          <label className='sidebarFields' style={{"color":'#fff'}}>{field}</label>
        </div>):

        <div  className='sidebarElems' onClick={(e)=>{this.changeColour(e);}}
          style={{'backgroundColor':sb_element_bg_default}}>
            <div ></div>
          <img src={inactive_icons[field]} alt='icon' className='sidebarIcons' style={{opacity:"0.5"}}/>
          <label className='sidebarFields' >{field}</label>
        </div>
      )
    }
  render() {
    return (
        <div className='sidebar' style={{"backgroundColor":"#04162C"}}>
            <div className='flex-row' style={{'margin':'34px',cursor:'context-menu'}}>
                <h1 style={{"color":"#fff", "margin":"0px"}}>tring</h1><h1 style={{"color":"#5bbc2e", "margin":"0px"}}>hub</h1>
            </div>
            <div className='sidebarList'>
              {this.elem('DASHBOARD')}
              {this.elem('MEMBERS')}
              {this.elem('PROJECTS')}
              {this.elem('CLIENTS')}
              {this.elem('WORKPLAN')}
              {this.elem('MESSAGES')}
            </div>
        </div>
    )
  }
}
