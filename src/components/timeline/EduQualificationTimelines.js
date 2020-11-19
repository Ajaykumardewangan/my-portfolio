import React, { Fragment } from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  contents:{
     marginLeft:'200px'
  },
  Title:{
    textAlign:'center',
  }
}));
const theme = createMuiTheme({
  overrides: {
    MuiTimelineItem:{
      missingOppositeContent :{
        '&:before':{
          flex:0,
          content:'none'
        }
      }
    }
    
  }
}
)

function EduQualificationTimelines() {
  const classes = useStyles();
  return (
    <Fragment>
    <h2 className={classes.Title}>EDUCATIONAL QUALIFICATIONS</h2>
    <MuiThemeProvider theme={theme}>
    <Timeline>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h5" component="h1">
                  2013 - 2017
            </Typography>
            <Typography variant="h6" component="h3">
              CSVTU Bhilai
            </Typography>
            <Typography className={classes.contents}>
                      Completed B.E. from Central College Of Engineering And Management Raipur Chhattisgarh(CCEM), in the
                      stream Computer Science and Engineering. CCEM is affiliated to Chhattisgarh Swami Vivekanand
                      Technical University Bhilai(CSVTU). 
            </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h5" component="h1">
                  2011 - 2012
            </Typography>
            <Typography variant="h6" component="h3">
                CGBSE
            </Typography>
            <Typography className={classes.contents}>
                      Completed 12th from SBHS School Jaijaipur Chhattisgarh, in the
                      subject Math. This school affiliated to the Chhattisgarh Board of Secondary Education.
            </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h5" component="h1">
                  2009 - 2010
            </Typography>
            <Typography variant="h6" component="h3">
                CGBSE
            </Typography>
            <Typography className={classes.contents}>
                      Completed 10th from SBHS School Jaijaipur Chhattisgarh.
                       This school affiliated to the Chhattisgarh Board of Secondary Education.
            </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </MuiThemeProvider>
    </Fragment>
  );
}
export default EduQualificationTimelines;