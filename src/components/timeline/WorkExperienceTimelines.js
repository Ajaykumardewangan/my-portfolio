import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    backgroundColor:'#37474f',
    color:'#cfd8dc'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  Title:{
    textAlign:'center',
  }
}));

 function WorkExperienceTimelines() {
  const classes = useStyles();

  return (
    <Fragment>
    <h2 className={classes.Title}>WORK EXPERIENCE</h2>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h5" color="primary">
            DEC 2019 - MAY 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" component="h1">
              Java Full Stack Developer 
            </Typography>
            <Typography variant="h6" component="h3">
              Techchefs Pvt. Ltd.
            </Typography>
            <Typography>Ensured complete front-end and backend development and deployment for assigned Module. SSO Google login logout, dashboard landing page,
                        show instances details, create instance page, create template page etc using APEX theme. Time out based termination of virtual machine,
                         TerraForm implementation complete front end to backend and deployment.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h5" color="primary">
            Jul 2019 - Nov 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" component="h1">
              Java Full Stack Fellowship
            </Typography>
            <Typography variant="h6" component="h3">
               BridgeLabz Solution
            </Typography>
            <Typography>
               Single handily developed Fundo Notes App as  single-page Application using Java 8 features,
               Spring-Boot, JWT Tokens, Log4j, JMS Message Queues(Rabbit MQ), Elastic Search, Redis Cache,
               JPA, MySql, Angular 6  with Angular-Material, React with React-Material, Responsive Design,
               Card Based  UI,  Navigation  Panel,  Search  Bar,  Label  and Show notes in list and grid view etc.
               Each card was designed with an editor, toolbars, and menus to provide the user friendly access.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Fragment>
  );
}
export default WorkExperienceTimelines;