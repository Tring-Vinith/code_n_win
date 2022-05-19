import React, { Component } from 'react'
import './Headerbar.css'
import {imageSrc} from './imageResources/headerbar/export'
export default class Headerbar extends Component {
    constructor(props){
      super(props)
        this.state={notification:true}
        this.clearNotification.bind(this)
        this.search.bind(this)
        this.handleClick.bind(this)
    }
    search=()=>{
      let searchVal=document.getElementById('search').value
      console.log(searchVal)
    }
    clearNotification=()=>{
      this.setState({notification:false})
    }
    handleClick=()=>{
      let addProject=document.getElementById("addProject");
      addProject.style.backgroundColor="#3B9C0E"
      addProject.style.boxShadow='0px 10px 40px rgba(0, 0, 0, 0.3)'
      addProject.style.backgroundColor='#fff'
      addProject.style.color='#000'
      document.getElementById('add').setAttribute('src',imageSrc.icon_plus_black)
    }
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
                  alt='icon'></img>
              <input id='search' type={'text'} placeholder='Search your project here' maxLength={20}></input>
          </div>
          <div id='headerbar-right' >
            <img id='userImage' src={imageSrc.profile_pic} alt='user_image'></img>
            <div className='br'></div>
            {this.state.notification?
            (<img id='notification' src={imageSrc.notification_on} alt='notification' onClick={this.clearNotification}></img>)
            :(<img id='notification' src={imageSrc.notification_off} alt='notification'></img>)
            }
            <div className='br'></div>
            <button id='addProject' onClick={this.handleClick}>
              <img id='add' src={imageSrc.icon_plus} alt='Add'></img> 
              <label id='addproject' >Add project</label>  
            </button>
          </div>
      </div>
    )
  }
}
