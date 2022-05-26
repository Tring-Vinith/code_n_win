import React, { Component,useState } from "react";
import {disableExperimentalFragmentVariables, useQuery} from '@apollo/client'
import project_footer_thumbs, {
  chatIcon,
  icon_menu,
  icon_filter,
  chatIconGreen,
  icon_filter_green,
} from "./imageResources/currentProjects/export";
import "./CurrentProject.css";
import moment from "moment";
import PROJECT_QUERIES from "./graphql/projectQueries";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.id,
      logo: props.props.logo,
      project_name: props.props.name,
      duration: props.props.duration,
      risk: props.props.risk,
      current_sprint: props.props.currentSprint,
      start_date: props.startDate,
      end_date: props.props.endDate,
      issues: props.props.issues,
      backlogs: props.props.backlogs,
      velocity: props.props.velocity,
      overall_sprint_prog: {
        time_elapsed:props.props.time_elapsed,
        work_completed:props.props.work_completed,
        scope_change:props.props.scope_change,
        blocker:props.props.blocker,
        flagged:props.props.flagged,

      },
      scrum_master: props.props.scrum_master,
      stories_status: {
        backlog:props.props.backlog,
        dev_in_progress:props.props.dev_in_progress,
        completed:props.props.completed,
      }, 
      menu:false
    };
    this.openMenu.bind(this)
  }
  sprint_details1 = (prop1, prop2) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px 10px 10px 24px",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "large" }}>{prop1}</div>
        <div style={{ color: "#939598", fontSize: "smaller" }}>{prop2}</div>
      </div>
    );
  };
  sprint_details2 = (prop1, prop2) => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", margin: "0px 10px" }}
      >
        <div style={{ color: "#232323", padding: "0px", fontWeight: "bold" }}>
          {prop1}
        </div>
        <div style={{ color: "#939598", padding: "0px", fontSize: "small" }}>
          {prop2}
        </div>
      </div>
    );
  };
  openMenu(e){
    console.log(e.target.innerText);
    let state=this.state
    state['menu']=!this.state.menu
    this.setState({state});
  }
  render() {
    return (
      <div className="projects" key={this.state.id}>
        <div style={{ backgroundColor: "orange", height: "10px" }}></div>
        {/* Project header part */}
        <div className="project_header">
          <img
            className="project_logo"
            src={this.state.logo}
            alt="project logo"
          ></img>
          <div >
            <div className="bold" style={{'margin':'20px 0px 10px 0px'}}> {this.state.project_name}</div>
            <div className="project_duration light">{
            moment(this.state.start_date).format('DD')+" "+moment(this.state.start_date).format('MMM')+' - '+
            moment(this.state.end_date).format('DD')+" "+moment(this.state.end_date).format('MMM')
            }</div>
          </div>

          {/* Risk button and menu Icon */}
          <div
            className="flex-row"
            style={{
              marginLeft: "320px",
              position: "absolute",
              flexDirection: "row-reverse",
              width: "180px",
            }}
          >
            <img src={icon_menu} alt="menu" onClick={this.openMenu.bind(this)}></img>
            {this.state.menu&&(
            <div className="column menu" onClick={this.openMenu.bind(this)}>
              <div> Edit</div>
              <div>Delete</div>
            </div>
          )}
            {this.state.risk && (
              <div id="risk" className="flex-row">
                Risk
              </div>
            )}
          </div>
        </div>
        {/* Project Body part */}
        <div
          className="sprint_details1 flex-row"
          style={{marginTop: "24px"}}
        >{}
          {this.sprint_details1(this.state.current_sprint, "Current sprint")}
          {this.sprint_details1(
          moment(this.state.end_date).format('DD')+" "+moment(this.state.end_date).format('MMM')
            
          , "End date")}
          {this.sprint_details1(this.state.issues, "Issues")}
          {this.sprint_details1(this.state.backlogs, "Backlogs")}
          {this.sprint_details1(this.state.velocity, "Velocity")}
        </div>
        <div className="overall_progress" style={{ marginLeft: "24px" }}>
          <div className="flex-row">
            <h4>Overall sprint progress</h4>(Story points)
          </div>
          {/* Project Progress Bar part */}
          <div
            className="flex-row"
            style={{
              height: "36px",
              width: "506px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                height: "36px",
                width:
                  (this.state.stories_status.completed /
                    (this.state.stories_status.backlog +
                      this.state.stories_status.dev_in_progress +
                      this.state.stories_status.completed)) *
                    506 +
                  "px",
                backgroundColor: "#0084D0",
                color: "#fff",
              }}
            >
              <div style={{ marginTop: "8px" }}>
                {this.state.stories_status.completed}
              </div>
            </div>
            <div
              style={{
                height: "36px",
                width:
                  (this.state.stories_status.dev_in_progress /
                    (this.state.stories_status.backlog +
                      this.state.stories_status.dev_in_progress +
                      this.state.stories_status.completed)) *
                    506 +
                  "px",
                backgroundColor: "#00A5C6",
                color: "#fff",
              }}
            >
              <div style={{ marginTop: "8px" }}>
                {this.state.stories_status.dev_in_progress}
              </div>
            </div>
            <div
              style={{
                height: "36px",
                width:
                  (this.state.stories_status.backlog /
                    (this.state.stories_status.backlog +
                      this.state.stories_status.dev_in_progress +
                      this.state.stories_status.completed)) *
                    506 +
                  "px",
                backgroundColor: "rgba(147,149,152,0.16)",
                color: "#000",
              }}
            >
              <div style={{ marginTop: "8px" }}>
                {this.state.stories_status.backlog}
              </div>
            </div>
          </div>
        </div>
{/**Sprint Details 2 */}
        <div className="flex-row" style={{ margin: "20px 0px 24px 24px",}}>
          {this.sprint_details2(this.state.overall_sprint_prog.time_elapsed+'%',"Time elapsed")}
          {this.sprint_details2(this.state.overall_sprint_prog.work_completed+'%',"Work complete")}
          {this.sprint_details2(this.state.overall_sprint_prog.scope_change+'5',"Scope change")}
          {this.sprint_details2(this.state.overall_sprint_prog.blocker,"Blocker")}
          {this.sprint_details2(this.state.overall_sprint_prog.flagged,"Flagged")}
        </div>
        <div className="project_br"></div>

  {/* Project Footer */}
        <div
          className="project_footer flex-row"
          style={{ height: "91px"}}
        >
          <div id="imageThumbs" style={{ marginLeft: "24px", height: "24px" }}>
            <img
              src={project_footer_thumbs[0]}
              alt={"thumb" + 0}
              style={{ marginLeft: "0px", position: "absolute" }}
            ></img>
            <img
              src={project_footer_thumbs[1]}
              alt={"thumb" + 1}
              style={{ marginLeft: "16px", position: "absolute" }}
            ></img>
            <img
              src={project_footer_thumbs[2]}
              alt={"thumb" + 2}
              style={{ marginLeft: "32px", position: "absolute" }}
            ></img>
            <svg
              width="32"
              height="32"
              style={{ marginLeft: "48px", position: "absolute" }}
            >
              <circle
                cx="16"
                cy="16"
                r="15"
                stroke="#fff"
                stroke-width="2"
                fill="#000"
              >
                +12{" "}
              </circle>
              <text x="5" y="20" fill="#fff" fontSize={12}>
                +{"12"}
              </text>
            </svg>
          </div>
          <div
            className="row-reverse"
            style={{
              marginLeft: "230px",
            }}
          >
            <img
              src={chatIcon}
              style={{ marginLeft: "16px" }}
              alt="thumbs"
              onClick={(e) => {
                e.target.setAttribute("src", chatIconGreen);
              }}
            ></img>
            <div
              className="column"
              style={{
                width: "200px",
              }}
            >
              <div className="row-reverse" style={{ fontWeight: "bold" }}>
                {this.state.scrum_master}
              </div>
              <div
                className="row-reverse"
                style={{ color: "#939598", fontSize: "small" }}
              >
                Scrum master
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function CurrentProjects(){
  const [projectss, setPtojects]=useState([])
  const [load, setLoading]=useState(true)
  const limit=8
  const [offset, setOffset]=useState(0)
  const [max, setMax]=useState(1)
  const {error,loading,data}=useQuery(PROJECT_QUERIES.FETCH_PROJECTS,{variables:{limit:limit,offset:offset}});
  const {error1,loading1,data1}=useQuery(PROJECT_QUERIES.FETCH_PROJECTS,{variables:{limit:limit,offset:(offset+1)}});

React.useEffect(()=>{
  if(!loading ){
    if(data.projects.length!==0){
      setLoading(false)
      setPtojects( data.projects);}
    }else if(error)console.log(error);
  if(!loading1){
    if(data1) 
    {
      setMax(max+1)
    }
    else if(error1)console.log(error1);
  }
},[loading,data,error,max,loading1,data1,error1])
    return (
      <div className="currentProjects">
        <div className="flex-row" style={{ flexDirection: "row" }}>
          <h2 style={{ marginLeft: "10px" }}>CurrentProjects</h2>
          <div
            className="flex-row"
            style={{ flexDirection: "row", marginLeft: "700px" }}
          >
            <div>
              <select name="SortBy " id="sortBy">
                <option value="Name">Name</option>
                <option value="Time">Time</option>
                <option value="Project-value">Project-value</option>
                <option value="Peoples working">Peoples working</option>
              </select>
            </div>
            <div
              className="flex-row filter"
              onClick={() => {
                document
                  .getElementById("filter")
                  .setAttribute("src", icon_filter_green);
              }}
            >
              <img src={icon_filter} alt="filter" id="filter"></img>
              <div>Filter</div>
            </div>
          </div>
        </div>

        <div className="projectsContainer">
          {!load ? (projectss.map((project, index) => {
            return <Projects props={project} key={index} />;
          })):
          (
          <div className="flex-row" style={{'alignContent':'center','justifyContent':'center',width:'100%'}}>
            <h2 style={{'color':'#ccc'}}> Loading..</h2>
          </div>
          )
        }
        {!load&&(
        <div className="flex-row" style={{'justifyContent':'center','width':'100%'}}>
          <div className="pagination"
          style={offset!==0?{color:'#000', cursor:'context-menu'}:{color:'#999',cursor:'context-menu'}}
          onClick={()=>{
            if(offset<=1) ;
            else setOffset(offset-limit)
          }}>{'<'}</div>
          {offset/limit+1}/{max}
          <div className="pagination"
          style={(offset/limit+1)!==max?{color:'#000', cursor:'context-menu'}:{color:'#999',cursor:'context-menu'}}
          onClick={()=>{
            if(((offset/limit)+1)===max);
            else setOffset(offset+limit)
          }}
          >{'>'}</div>
        </div>)}
        </div>
      </div>
    );
}
