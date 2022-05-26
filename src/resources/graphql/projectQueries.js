import { gql } from "@apollo/client";

const FETCH_PROJECTS = gql (`query Projects($limit:Int!,$offset:Int!){
    projects(limit:$limit,offset:$offset){
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
  const CREATE_PROJECT =  
  gql(`
        mutation Create($createProjectInput: CreateProjectInput!) 
        {
        createProject(createProjectInput:$createProjectInput)
        {
            id
    backlog
    backlogs
    blocker
    completed
    name
    scrum_master
    dev_in_progress
    currentSprint
        }
    }
            `)
  
  const PROJECT_QUERIES = {
      FETCH_PROJECTS:FETCH_PROJECTS, 
      CREATE_PROJECT:CREATE_PROJECT,

    }
  export default PROJECT_QUERIES;