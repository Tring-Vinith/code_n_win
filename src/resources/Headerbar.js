import React, { Component } from 'react'
import './Headerbar.css'
import {imageSrc} from './imageResources/headerbar/export'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProjectWindow from './components/createProjectWindow';
export default class Headerbar extends Component {
    constructor(props){
      super(props)
        this.state={
          notification:true,
          searchVal:'',
          projectWindow:false,
          createProject:''
        }
        this.clearNotification.bind(this)
        this.search.bind(this)
        this.handleClick.bind(this)
        this.handleSubmit.bind(this)
        this.handleCancel.bind(this)
    }
    search=()=>{
      console.log(this.state.searchVal)
    }
    clearNotification=()=>{
      this.setState({notification:false})
    }
    handleSubmit=()=>{
      console.log('Clicked');
      const project_name=document.getElementById('project_name_input').value,
      project_profile=document.getElementById('project_profile').value,
      scrum_master=document.getElementById('scrum_master_input').value,
      start_date=document.getElementById('start_date_input').value,
      end_date=document.getElementById('end_date_input').value,
      backlog=document.getElementById('backlog_input').value,
      backlogs=document.getElementById('backlogs_input').value,
      blocker=document.getElementById('blocker_input').value,
      completed=document.getElementById('completed_input').value,
      current_sprint=document.getElementById('current_sprint_input').value,
      dev_in_progress=document.getElementById('dev_in_progress_input').value,
      flagged=document.getElementById('flagged_input').value,
      issues=document.getElementById('issues_input').value,
      risk=document.getElementById('risk_input').value,
      scope_change=document.getElementById('scope_change_input').value,
      time_elapsed=document.getElementById('time_elapsed_input').value,
      velocity=document.getElementById('velocity_input').value,
      work_completed=document.getElementById('work_completed_input').value;
      if(project_name&&
        scrum_master&&
        start_date&&
        end_date&&
        backlog&&
        backlogs&&
        completed&&
        blocker&&
        current_sprint&&
        dev_in_progress&&
        flagged&&
        issues&&
        scope_change&&
        time_elapsed&&
        velocity&&
        work_completed)
      {let state=this.state
      state['createProject']={
        backlog: backlog,
  backlogs: backlogs,
  blocker: blocker,
  completed: completed,
  currentSprint: current_sprint,
  dev_in_progress: dev_in_progress,
  endDate: end_date,
  flagged: flagged,
  issues: issues,
  // logo: logo,
  name: project_name,
  risk: risk,
  scope_change: scope_change,
  scrum_master: scrum_master,
  startDate: start_date,
  time_elapsed: time_elapsed,
  velocity: velocity,
  work_completed: work_completed,
      }
      console.log(this.state.createProject,state);
      this.setState({state})
      console.log(this.state.createProject);
      this.handleClick()
      toast.success("Project will be added!", { className: 'toaster-css', hideProgressBar: true, });
    }
      else toast.warn('Please enter values before submit')
    }
    handleCancel=()=>{
      const project_name=document.getElementById('project_name_input').value,
      project_profile=document.getElementById('project_profile').value,
      scrum_master=document.getElementById('scrum_master_input').value,
      start_date=document.getElementById('start_date_input').value,
      end_date=document.getElementById('end_date_input').value,
      backlog=document.getElementById('backlog_input').value,
      backlogs=document.getElementById('backlogs_input').value,
      blocker=document.getElementById('blocker_input').value,
      completed=document.getElementById('completed_input').value,
      current_sprint=document.getElementById('current_sprint_input').value,
      dev_in_progress=document.getElementById('dev_in_progress_input').value,
      flagged=document.getElementById('flagged_input').value,
      issues=document.getElementById('issues_input').value,
      risk=document.getElementById('risk_input').value,
      scope_change=document.getElementById('scope_change_input').value,
      time_elapsed=document.getElementById('time_elapsed_input').value,
      velocity=document.getElementById('velocity_input').value,
      work_completed=document.getElementById('work_completed_input').value;
      if(project_name||
        scrum_master||
        start_date||
        end_date||
        backlog||
        backlogs||
        completed||
        blocker||
        current_sprint||
        dev_in_progress||
        flagged||
        issues||
        risk||
        scope_change||
        time_elapsed||
        velocity||
        work_completed||
        project_profile
        )
      {
        if(window.confirm('Are you sure want to cancel?')===true)
        {
        this.handleClick()
        }
    }
    else this.handleClick()
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
      <div style={{'overflowY':'scroll'}}>
      <CreateProjectWindow ></CreateProjectWindow>
      </div>
      <div className='flex-row' style={{'justifyContent':'space-around',marginTop:'20px'}}>
      <button className='cancel' onClick={()=>{this.handleCancel()}}>Cancel</button>
      <button className='submit' onClick={()=>{this.handleSubmit()}}>Submit</button>
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
            <ToastContainer transition={Zoom} position={toast.POSITION.TOP_CENTER} autoClose={1500}/>
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
