import React, { useState } from 'react'
import './Headerbar.css'
import {imageSrc} from './imageResources/headerbar/export'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProjectWindow from './components/createProjectWindow';
import PROJECT_QUERIES from './graphql/projectQueries';
import { useMutation } from '@apollo/client';
export default function Headerbar() {
   const [notification, setNotification]=useState(true);
   const [searchVal, setSearchVal]=useState('');
   const [projectWindow, setProjectWindow]=useState(false)
    const [createProj]=useMutation(PROJECT_QUERIES.CREATE_PROJECT,{
      onCompleted: (res) => {
        console.log(res);
      },
      onError: error => {
        console.log(error)
      },
    })
   const search=()=>{
      console.log(searchVal)
    }
   const clearNotification=()=>{
     setNotification(false)
    }
   function HandleSubmit(){
      const project_name=document.getElementById('project_name_input').value,
      // project_profile=document.getElementById('project_profile').value,
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
      scope_change=document.getElementById('scope_change_input').value,
      time_elapsed=document.getElementById('time_elapsed_input').value,
      velocity=document.getElementById('velocity_input').value,
      work_completed=document.getElementById('work_completed_input').value;
      let risk=document.getElementById('risk_input').value==='true'?true:false;
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
      {
      
    createProj({variables:{
      createProjectInput:{
        name:project_name,
        scrum_master:scrum_master,
        startDate:start_date,
        endDate:end_date,
        backlog:parseInt(backlog),
        backlogs:parseInt(backlogs),
        completed:parseInt(completed),
        blocker:parseInt(blocker),
        currentSprint:current_sprint,
        dev_in_progress:parseInt(dev_in_progress),
        flagged:parseInt(flagged),
        issues:parseInt(issues),
        logo:"logo",
        risk:risk,
        scope_change:parseInt(scope_change),
        time_elapsed:parseInt(time_elapsed),
        velocity:velocity,
        work_completed:parseInt(work_completed),
      }
    }})
      handleClick()
      toast.success("Project will be added!", { className: 'toaster-css', hideProgressBar: true, });
    }
      else toast.warn('Please enter values before submit')
    }
    const handleCancel=()=>{
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
        scope_change||
        time_elapsed||
        velocity||
        work_completed||
        project_profile
        )
      {
        if(window.confirm('Are you sure want to cancel?')===true)handleClick()
      }
    else handleClick()
    }
    const handleClick=()=>{
      setProjectWindow(!projectWindow)
      !projectWindow?document.getElementById('add').setAttribute('src',imageSrc.icon_plus_black):
      document.getElementById('add').setAttribute('src',imageSrc.icon_plus);
    }
    const ProjectWindow=
    (<div className='projectWindow' >
      <div style={{'overflowY':'scroll'}}>
      <CreateProjectWindow ></CreateProjectWindow>
      </div>
      <div className='flex-row' style={{'justifyContent':'space-around',marginTop:'20px'}}>
      <button className='cancel' onClick={handleCancel}>Cancel</button>
      <button className='submit' onClick={HandleSubmit}>Submit</button>
      </div>
    </div>)
  
    return (
      <div id='Headerbar'>
          <div id='headerbar-left' >
              <img src={imageSrc.search_icon} 
                  onClick={(e)=>{
                    search();
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
                setSearchVal(e.target.value)
              }}
              onKeyDown={(e)=>{
                if(e.key==='Enter')
                {
                console.log(e.target.value);
                setSearchVal(e.target.value)
                }
              }}
              ></input>
            <ToastContainer transition={Zoom} position={toast.POSITION.TOP_CENTER} autoClose={1500}/>
          </div>
          {projectWindow && ProjectWindow}
          <div id='headerbar-right' >
            <img id='userImage' src={imageSrc.profile_pic} alt='user_image'></img>
            <div className='br'></div>
            {notification?
            (<img id='notification' src={imageSrc.notification_on} alt='notification' onClick={clearNotification}></img>)
            :(<img id='notification' src={imageSrc.notification_off} alt='notification'></img>)
            }
            <div className='br'></div>
            <button id='addProject' onClick={handleClick} className={projectWindow?'activeaddProject':'inactiveaddProject'}>
              <img id='add' src={imageSrc.icon_plus} alt='Add'></img> 
              <label id='addproject'>Add project</label>  
            </button>
          </div>
          
      </div>
    )
  
}
