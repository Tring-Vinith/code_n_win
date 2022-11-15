import React, { useState } from "react"

export default function CreateProjectWindow() {
    const[risk, setRisk]=useState('false')
    function numberValidation(e,limit){
        if(e.target.value <0){
            e.target.value = 0
        }
        else if(e.target.value >limit){
            e.target.value = limit
        }
    }
    function changeRadioValue(e){
        let value=e.target.value
        if(value==='false'){
            setRisk('true')
        }
        else if(e.target.value==='true'){
            setRisk('false')
        }
    }
  return (
    <div
      className="column"
      style={{ padding: "10px", backgroundColor: "#def", borderRadius: "10px" }}
    >
      <div>Project logo</div>
      <img
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "10px",
          border: "solid",
          borderColor: "#ddd",
        }}
        alt=""
      ></img>
      <input
        type={"file"}
        id="project_profile"
        onChange={(e) => {
          console.log(e.target.files[0]);
          e.target.previousElementSibling.setAttribute(
            "src",
            URL.createObjectURL(e.target.files[0])
          );
        }}
      ></input>
      <label>Project name:</label>
      <input type={"text"} maxLength={25} id="project_name_input"></input>
      <label>Scrum master:</label>
      <input type={"text"} maxLength={25} id="scrum_master_input"></input>
      <label>Backlog:</label>
      <input type={"number"} onChange={(e)=>{numberValidation(e,1000)}} id="backlog_input"></input>
      <label>Backlogs:</label>
      <input type={"number"} onChange={(e)=>{numberValidation(e,1000)}} id="backlogs_input"></input>
      <label>Blocker:</label>
      <input type={"number"} onChange={(e)=>{numberValidation(e,1000)}} id="blocker_input"></input>
      <label>Completed:</label>
      <input type={"number"} onChange={(e)=>{numberValidation(e,1000)}} id="completed_input"></input>
      <label>Current Sprint:</label>
      <input type={"text"} maxLength={25} id="current_sprint_input"></input>
      <label>Dev in progress:</label>
      <input type={"number"} onChange={(e)=>{numberValidation(e,1000)}} id="dev_in_progress_input"></input>
      <label>Flagged:</label>
      <input type={"number"} onChange={(e)=>{numberValidation(e,1000)}} id="flagged_input"></input>
      <label>Issues:</label>
      <input type={"number"} onChange={(e)=>{numberValidation(e,1000)}} id="issues_input"></input>
      <label>Risk:</label>
      <input type={"checkbox"} id="risk_input" value={risk} name='risk' onClick={changeRadioValue}></input>
      <label>Scope change:</label>
      <input type={"text"} onChange={(e)=>{numberValidation(e,100)}} id="scope_change_input"></input>
      <label>Time elapsed:</label>
      <input type={"text"} onChange={(e)=>{numberValidation(e,100)}} id="time_elapsed_input"></input>
      <label>Velocity:</label>
      <input type={"text"} onChange={(e)=>{numberValidation(e,100)}} id="velocity_input"></input>
      <label>Work completed:</label>
      <input type={"text"} onChange={(e)=>{numberValidation(e,100)}} id="work_completed_input"></input>
      <div className="flex-row" style={{ justifyContent: "space-around" }}>
        <label>Start date:</label>
        <input type={"date"} id="start_date_input"></input>
        <label>End date:</label>
        <input type={"date"} id="end_date_input"></input>
      </div>
    </div>
  );
}
