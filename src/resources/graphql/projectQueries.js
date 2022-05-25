import { gql } from "@apollo/client";

const FETCH_PROJECTS = gql (`{
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
  const CREATE_PROJECT = (args)=>{
      return gql(`mutation  {
        createProject(createProjectInput:{
              logo: ${args.logo},
              name: ${args.name},
              currentSprint: ${args.currentSprint},
              startDate: ${args.startDate},
              endDate: ${args.endDate},
              issues: ${args.issues},
              backlogs: ${args.backlogs},
              scrum_master: ${args.scrum_master},
              time_elapsed: ${args.time_elapsed},
              work_completed: ${args.work_completed},
              scope_change: ${args.scope_change},
              blocker: ${args.blocker},
              flagged: ${args.flagged},
              backlog: ${args.backlog},
              dev_in_progress: ${args.dev_in_progress},
              completed: ${args.completed},
              velocity: ${args.velocity},
              risk: ${args.risk},
      })`)
  }
  const PROJECT_QUERIES = {
      FETCH_PROJECTS:FETCH_PROJECTS, 
      CREATE_PROJECT:CREATE_PROJECT,

    }
  export default PROJECT_QUERIES;