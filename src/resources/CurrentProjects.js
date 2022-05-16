import React, { Component } from 'react'
import project_footer_thumbs,{ chatIcon } from './imageResources/currentProjects/export';
import './CurrentProject.css'
class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
            logo:props.props.logo,
            project_name:props.props.name,
            duration:props.props.duration,
            risk:props.props.risk,
            current_sprint:props.props.currentSprint,
            start_date:props.start_date,
            end_date:props.props.endDate,
            issues:props.props.issues,
            backlogs:props.props.backlogs,
            velocity:props.props.velocity,
            overall_sprint_prog:props.props.overall_sprint_prog,
            scrum_master:props.props.scrum_master
        }
    }
    
    

//},

    sprint_details1=(prop1,prop2)=>{
        return(
            <div style={{"display":"flex", "flexDirection":"column","margin":"10px"}}>
                <h3>{prop1}</h3>
                <p style={{color:"#939598"}}>{prop2}</p>
            </div>
        )
    }
    sprint_details2=(prop1,prop2)=>{
        return(
            <div style={{"display":"flex", "flexDirection":"column","margin":"10px"}}>
                <h4 style={{color:"#232323"}}>{prop1}</h4>
                <p style={{color:"#939598"}}>{prop2}</p>
            </div>
        )
    }
    render(){
        return(<div className='projects'>
            <div className='project_header'>
                <img className='project_logo' src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='project logo'></img>
                <div>
                    <h3> {this.state.project_name}</h3>
                    <p className='project_duration'>{this.state.duration}</p>
                </div>
            </div>
            <div className='sprint_details1' style={{"display":"flex", "flexDirection":"row"}}>
                {this.sprint_details1(this.state.current_sprint, "Current sprint")}
                {this.sprint_details1(this.state.end_date, "End date")}
                {this.sprint_details1(this.state.issues, "Issues")}
                {this.sprint_details1(this.state.backlogs, "Backlogs")}
                {this.sprint_details1(this.state.velocity, "Velocity")}

            </div>
            <div className='overall_progress'>
                <h3>Overall sprint progress(Story points)</h3>

            </div>
            <div className='sprint_details2' style={{"display":"flex", "flexDirection":"row"}}>
                {this.sprint_details1(this.state.overall_sprint_prog.time_elapsed, "time elapsed")}
                {this.sprint_details1(this.state.overall_sprint_prog.work_completed, "work_completed")}
                {this.sprint_details1(this.state.overall_sprint_prog.scope_change, "Scope change")}
                {this.sprint_details1(this.state.overall_sprint_prog.blocker, "Blocker")}
                {this.sprint_details1(this.state.overall_sprint_prog.flagged, "Flagged")}
            </div>
            <div className='project_br'></div>
            <div className='project_footer' style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                <div id='imageThumbs' style={{marginLeft:'24px'}}>
                <img src={project_footer_thumbs[0]} alt={'thumb'+0} style={{marginLeft:"0px",position:'absolute'}}></img>
                <img src={project_footer_thumbs[1]} alt={'thumb'+1} style={{marginLeft:"16px",position:'absolute'}}></img>
                <img src={project_footer_thumbs[2]} alt={'thumb'+2} style={{marginLeft:"32px",position:'absolute'}}></img>
                <svg width="32" height="32" style={{marginLeft:"48px",position:'absolute'}}>
                    <circle cx="16" cy="16" r="15" stroke="#fff" stroke-width="2" fill="#000">+12 </circle>
                    <text x='5' y='20' fill='#fff' fontSize={12}>+{'12'}</text>
                </svg> 
                </div>
                <div style={{display:'flex',flexDirection:'row',height:'45px',width:'188px',marginLeft:'238px'}}>
                    <div style={{display:'flex',flexDirection:'column' ,alignItems:'end'}}>
                        <h3 style={{margin:0}}>{this.state.scrum_master}</h3>
                        <p4 style={{margin:0,color:"#939598",fontWeight:'small'}}>{"Scrum master"}</p4>
                    </div>
                    <img src={chatIcon} style={{marginLeft:"16px"}}alt='thumbs'></img>
                </div>
                
            </div>
        </div>)
    }
}

export default class CurrentProjects extends Component {
    constructor(props){
        super(props)
        this.state={
            a:props.a
        }
    }
    a= [{"id":1,"logo":"imagsrc","name":"SRMG - Manga PH3","currentSprint":"Sprint #3","startDate":"2022-03-01","endDate":"2022-09-30","issues":16,    
    "backlogs":24  , 
    "scrum_master":"Scrum master" , 
    "overall_sprint_prog":{
                time_elapsed:"49%",
                work_completed:"53%",
                scope_change:"0%",
                blocker:1,
                flagged:1,
            },
    "velocity":"velocity",
    "risk":true},
    {"id":2,"name":"Reuters - RCOM","currentSprint":"Sprint #4","startDate":"2022-03-01","endDate":"2022-09-31","issues":16,"backlogs":24, 
    "scrum_master":"Scrum master" , 
    "overall_sprint_prog":{
        time_elapsed:"49%",
        work_completed:"53%",
        scope_change:"0%",
        blocker:1,
        flagged:1,
    },
    "velocity":"velocity",
    "risk":false},
    {"id":3,"logo":"imagsrc","name":"PlanetD - Mobile App","currentSprint":"Sprint #5","startDate":"2022-01-26","endDate":"2022-03-26","issues":14,"backlogs":12, 
    "scrum_master":"Scrum master" , 
    "overall_sprint_prog":{
        time_elapsed:"49%",
        work_completed:"53%",
        scope_change:"0%",
        blocker:1,
        flagged:1,
    },
    "velocity":"velocity",
    "risk":true},
    {"id":4,"logo":"imagsrc","name":"Reuters - Emerald","currentSprint":"Sprint #5","startDate":"2022-01-26","endDate":"2023-03-26","issues":16,"backlogs":24, 
    "scrum_master":"Scrum master" , 
    "overall_sprint_prog":{
        time_elapsed:"49%",
        work_completed:"53%",
        scope_change:"0%",
        blocker:1,
        flagged:1,
    },
    "velocity":"velocity",
    "risk":false}]
  render() {
    return (
      <div className='currentProjects'>CurrentProjects
        <div className='projectsContainer'>
            {this.a.map((projects)=>{
                return(<Projects props={projects}/>)
            })}
        </div>
      </div>
    )
  }
}



// let details={
//     logo:"imagsrc",
//     project_name:"Plantd1",
//     duration:"01 Nov - 01 Jul",
//     risk:true,
//     current_sprint:"Sprint 11",
//     end_date:"01 Jul",
//     issues:0,
//     backlogs:10,
//     velocity:5,
//     overall_sprint_prog:{
//         time_elapsed:"49%",
//         work_completed:"53%",
//         scope_change:"0%",
//         blocker:1,
//         flagged:1,
//     },
//     scrum_master:"Viswa"
// }
// let details2={
//     logo:"imagsrc",
//     project_name:"Plantd2",
//     duration:"01 Nov - 01 Jul",
//     risk:true,
//     current_sprint:"Sprint 11",
//     end_date:"01 Jul",
//     issues:0,
//     backlogs:10,
//     velocity:5,
//     overall_sprint_prog:{
//         time_elapsed:"49%",
//         work_completed:"53%",
//         scope_change:"0%",
//         blocker:1,
//         flagged:1,
//     },
//     scrum_master:"Viswa"
// }
// let details3={
//     logo:"imagsrc",
//     project_name:"Plantd3",
//     duration:"01 Nov - 01 Jul",
//     risk:true,
//     current_sprint:"Sprint 11",
//     end_date:"01 Jul",
//     issues:0,
//     backlogs:10,
//     velocity:5,
//     overall_sprint_prog:{
//         time_elapsed:"49%",
//         work_completed:"53%",
//         scope_change:"0%",
//         blocker:1,
//         flagged:1,
//     },
//     scrum_master:"Viswa"
// }
/*


*/