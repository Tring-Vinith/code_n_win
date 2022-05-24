import React, { Component } from 'react'
import './Headerbar.css'
import {imageSrc} from './imageResources/headerbar/export'
export default class Headerbar extends Component {
    constructor(props){
      super(props)
        this.state={
          notification:true,
          searchVal:'',
          projectWindow:false
        }
        this.clearNotification.bind(this)
        this.search.bind(this)
        this.handleClick.bind(this)
    }
    search=()=>{
      console.log(this.state.searchVal)
    }
    clearNotification=()=>{
      this.setState({notification:false})
    }
    handleClick=()=>{
      let state=this.state
      state['projectWindow']=!this.state.projectWindow
      this.setState({state})
      this.state.projectWindow?document.getElementById('add').setAttribute('src',imageSrc.icon_plus_black):
      document.getElementById('add').setAttribute('src',imageSrc.icon_plus);
    }
    projectWindow=
    (<div className='projectWindow' >
      <div className='column' style={{'padding':'10px',backgroundColor:'#def',borderRadius:'10px'}}>
      <div >Project logo</div>
      <img style={{'height':'40px',width:'40px','borderRadius':'10px',border:'solid',borderColor:'#ddd'}} alt=''></img>
      <input type={'file'}  name='project_profile' onChange={(e)=>{console.log(e.target.files[0]);e.target.previousElementSibling.setAttribute('src',URL.createObjectURL(e.target.files[0]))}}></input>
      <label>Project name:</label>
      <input type={'text'}  maxLength={25} name='project_name'></input>
      <label>Scrum master:</label>
      <input type={'text'} maxLength={25} name='scrum_master'></input>
      <div className='flex-row' style={{'justifyContent':'space-around'}}>
        <label>Start date:</label>
        <input type={'date'} maxLength={25} name='start_date'></input>
        <label>End date:</label>
        <input type={'date'} maxLength={25} name='end_date'></input>
      </div>
      </div>
      <div className='flex-row' style={{'justifyContent':'space-around',margin:'10px 0px'}}>
      <button onClick={()=>{this.handleClick(); if(window.confirm('Are you sure want to cancel?')===false)alert('Project cancelled')}} style={{'backgroundColor':'red',borderRadius:'3px','border':'none',padding:'5px 10px'}}>Cancel</button>
      <button onClick={()=>{this.handleClick(); alert('Project will be added')}} style={{'backgroundColor':'#6ae',borderRadius:'3px','border':'none',padding:'5px 10px'}}>Submit</button>
      </div>
    </div>)
  
  render() {
    return (
      <div id='Headerbar'>
          <div id='headerbar-left' >
              <img src={imageSrc.search_icon} 
                  onClick={(e)=>{
                    this.search();
                    e.target.style.backgroundColor='#ccc'
                  setInterval(()=>{
                    e.target.style.backgroundColor='#eee'
                  },100)
                  }}
                  
                  id='search_icon' 
                  style={{backgroundColor:"#eee",padding:"12px 12px",borderRadius:'5px'}} 
                  alt='icon'
                  ></img>
              <input id='search' 
              type={'text'} 
              placeholder='Search your project here' 
              maxLength={20}
              onChange={(e)=>{
                let state=this.state;
                state['searchVal']=e.target.value;
                this.setState({state})
              }}
              onKeyDown={(e)=>{
                if(e.key==='Enter')
                {
                console.log(e.target.value);
                let state=this.state;
                state['searchVal']=e.target.value;
                this.setState({state})
                }
              }}
              ></input>
          </div>
          {this.state.projectWindow && this.projectWindow}
          <div id='headerbar-right' >
            <img id='userImage' src={imageSrc.profile_pic} alt='user_image'></img>
            <div className='br'></div>
            {this.state.notification?
            (<img id='notification' src={imageSrc.notification_on} alt='notification' onClick={this.clearNotification}></img>)
            :(<img id='notification' src={imageSrc.notification_off} alt='notification'></img>)
            }
            <div className='br'></div>
            <button id='addProject' onClick={this.handleClick} className={this.state.projectWindow?'activeaddProject':'inactiveaddProject'}>
              <img id='add' src={imageSrc.icon_plus} alt='Add'></img> 
              <label id='addproject'>Add project</label>  
            </button>
          </div>
      </div>
    )
  }
}
