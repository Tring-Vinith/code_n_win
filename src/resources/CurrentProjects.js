import React, { Component } from "react";
import project_footer_thumbs, {
  chatIcon,icon_menu,icon_filter,chatIconGreen,icon_filter_green
} from "./imageResources/currentProjects/export";
import "./CurrentProject.css";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.props.logo,
      project_name: props.props.name,
      duration: props.props.duration,
      risk: props.props.risk,
      current_sprint: props.props.currentSprint,
      start_date: props.start_date,
      end_date: props.props.endDate,
      issues: props.props.issues,
      backlogs: props.props.backlogs,
      velocity: props.props.velocity,
      overall_sprint_prog: props.props.overall_sprint_prog,
      scrum_master: props.props.scrum_master,
      stories_status: props.props.stories_status,
    };
  }

  sprint_details1 = (prop1, prop2) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", margin: "10px 10px 10px 24px"}}>
        <div style={{fontWeight:'bold', fontSize:'large'}}>{prop1}</div>
        <div style={{ color: "#939598",fontSize:'smaller' }}>{prop2}</div>
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
        <div style={{ color: "#939598", padding: "0px",fontSize:'small' }}>{prop2}</div>
      </div>
    );
  };
  render() {
    return (
      <div className="projects">
        <div style={{backgroundColor:'orange',height:'10px'}}></div>
        {/* Project header part */}
        <div className="project_header">
          <img
            className="project_logo"
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="project logo"
          ></img>
          <div>
            <h3> {this.state.project_name}</h3>
            <p className="project_duration">{this.state.duration}</p>
          </div>

          {/* Risk button and menu Icon */}
          <div className="flex-row" style={{marginLeft:'420px',position:'absolute',flexDirection:'row-reverse',width:'90px'}} >
            <img src={icon_menu} alt='menu'></img>
            {this.state.risk&&(<div id='risk' className="flex-row" >Risk</div>)}
          </div>
          
        </div>
        {/* Project Body part */}
        <div
          className="sprint_details1"
          style={{ display: "flex", flexDirection: "row", marginTop:'24px' }}
        >
          {this.sprint_details1(this.state.current_sprint, "Current sprint")}
          {this.sprint_details1(this.state.end_date, "End date")}
          {this.sprint_details1(this.state.issues, "Issues")}
          {this.sprint_details1(this.state.backlogs, "Backlogs")}
          {this.sprint_details1(this.state.velocity, "Velocity")}
        </div>
        <div className="overall_progress" style={{marginLeft:'24px'}}>
          <div className="flex-row"><h4>Overall sprint progress</h4>(Story points)</div>
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

        <div
          className="sprint_details2"
          style={{ display: "flex", flexDirection: "row", margin: "20px 0px 24px 24px" }}
        >
          {this.sprint_details2(
            this.state.overall_sprint_prog.time_elapsed,
            "Time elapsed"
          )}
          {this.sprint_details2(
            this.state.overall_sprint_prog.work_completed,
            "Work complete"
          )}
          {this.sprint_details2(
            this.state.overall_sprint_prog.scope_change,
            "Scope change"
          )}
          {this.sprint_details2(
            this.state.overall_sprint_prog.blocker,
            "Blocker"
          )}
          {this.sprint_details2(
            this.state.overall_sprint_prog.flagged,
            "Flagged"
          )}
        </div>
        <div className="project_br"></div>

        {/* Project Footer */}
        <div
          className="project_footer"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "91px",
          }}
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
            style={{
              display: "flex",
              flexDirection: "row",
              height: "45px",
              width: "188px",
              marginLeft: "230px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                width:'200px'
              }}
            >
              <div style={{ margin: 0}}>{this.state.scrum_master}</div>
              <div style={{ margin: 0, color: "#939598", fontSize: "small" }}>Scrum master</div>
            </div>
            <img
              src={chatIcon}
              style={{ marginLeft: "16px" }}
              alt="thumbs"
              onClick={(e)=>{e.target.setAttribute('src',chatIconGreen)}}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default class CurrentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: props.a,
    };
  }
  a = [
    {
      id: 1,
      logo: "imagsrc",
      name: "SRMG - Manga PH3",
      currentSprint: "Sprint-3",
      startDate: "2022-03-01",
      endDate: "2022-09-30",
      issues: 16,
      backlogs: 24,
      scrum_master: "Scrum master",
      overall_sprint_prog: {
        time_elapsed: "49%",
        work_completed: "53%",
        scope_change: "0%",
        blocker: 1,
        flagged: 1,
      },
      stories_status: {
        backlog: 9,
        dev_in_progress: 5,
        completed: 3,
      },
      velocity: "velocity",
      risk: true,
    },
    {
      id: 2,
      name: "Reuters - RCOM",
      currentSprint: "Sprint-4",
      startDate: "2022-03-01",
      endDate: "2022-09-31",
      issues: 16,
      backlogs: 24,
      scrum_master: "Scrum master",
      overall_sprint_prog: {
        time_elapsed: "49%",
        work_completed: "53%",
        scope_change: "0%",
        blocker: 1,
        flagged: 1,
      },
      stories_status: {
        backlog: 9,
        dev_in_progress: 5,
        completed: 3,
      },
      velocity: "velocity",
      risk: false,
    },
    {
      id: 3,
      logo: "imagsrc",
      name: "PlanetD - Mobile App",
      currentSprint: "Sprint-5",
      startDate: "2022-01-26",
      endDate: "2022-03-26",
      issues: 14,
      backlogs: 12,
      scrum_master: "Scrum master",
      overall_sprint_prog: {
        time_elapsed: "49%",
        work_completed: "53%",
        scope_change: "0%",
        blocker: 1,
        flagged: 1,
      },
      stories_status: {
        backlog: 8,
        dev_in_progress: 4,
        completed: 4,
      },
      velocity: "velocity",
      risk: true,
    },
    {
      id: 4,
      logo: "imagsrc",
      name: "Reuters - Emerald",
      currentSprint: "Sprint-5",
      startDate: "2022-01-26",
      endDate: "2023-03-26",
      issues: 16,
      backlogs: 24,
      scrum_master: "Scrum master",
      overall_sprint_prog: {
        time_elapsed: "49%",
        work_completed: "53%",
        scope_change: "0%",
        blocker: 1,
        flagged: 1,
      },
      stories_status: {
        backlog: 9,
        dev_in_progress: 8,
        completed: 9,
      },
      velocity: "velocity",
      risk: false,
    },
  ];
  render() {
    return (
      <div className="currentProjects">
          <div className="flex-row" style={{flexDirection:'row'}}>
          <h2 style={{marginLeft:'10px'}}>CurrentProjects</h2>
          <div className="flex-row" style={{flexDirection:'row',marginLeft:'700px'}}>
              <div >
                <select name="SortBy " id="sortBy" >
                    <option value='Name'>Name</option>
                    <option value='Time'>Time</option>
                    <option value="Project-value">Project-value</option>
                    <option value="Peoples working">Peoples working</option>
                </select>
              </div>
              <div className="flex-row filter" 
              onClick={()=>{document.getElementById('filter').setAttribute('src',icon_filter_green)}}>
                  <img src={icon_filter} alt="filter" id="filter"></img>
                  <div>Filter</div>
              </div>
          </div>
          </div>
        
        <div className="projectsContainer">
          {this.a.map((projects) => {
            return <Projects props={projects} />;
          })}
        </div>
      </div>
    );
  }
}
