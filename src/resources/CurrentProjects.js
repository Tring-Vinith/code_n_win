import React, { Component,useState } from "react";
import {gql,useQuery} from '@apollo/client'
import project_footer_thumbs, {
  chatIcon,
  icon_menu,
  icon_filter,
  chatIconGreen,
  icon_filter_green,
} from "./imageResources/currentProjects/export";
// import projects from "./imageResources/currentProjects/projects";
import "./CurrentProject.css";
import moment from "moment";
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
    };
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
  render() {
    return (
      <div className="projects">
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
              marginLeft: "420px",
              position: "absolute",
              flexDirection: "row-reverse",
              width: "90px",
            }}
          >
            <img src={icon_menu} alt="menu"></img>
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
    const FETCH_PROJECTS =gql(`{
    projects{
      id
      logo
      name
      currentSprint
      startDate
      endDate
      issues
      backlogs
      scrum_master
      time_elapsed
      work_completed
      scope_change
      blocker
      flagged
      backlog
      dev_in_progress
      completed
      velocity
      risk
    }
  }`)
const {error,loading,data}=useQuery(FETCH_PROJECTS);
// console.log(error,loading,data);
React.useEffect(()=>{
  if(!loading){
  setLoading(false)
  setPtojects( data.projects );
  console.log(data.projects,error,loading);}
},[loading,data,error])
if(!load){
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
          {!load && projectss.map((project) => {
            return <Projects props={project} />;
          })}
        </div>
      </div>
    );
}}
