import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import WorkExperienceTimelines from '../components/timeline/WorkExperienceTimelines';
import EduQualificationTimelines from '../components/timeline/EduQualificationTimelines';


const skills = [
    {language:'JAVA',rank: '80%'},
    {language:'SPRING BOOT',rank: '80%'},
    {language:'JPA',rank: '75%'},
    {language:'HIBERNATE',rank: '60%'},
    {language:'REACT.JS', rank: '75%'},
    {language:'HTML', rank: '70%'},
    {language:'CSS & SCSS', rank: '70%'},
    {language:'SQL', rank: '50%'},
    {language:'DATA STRUCTURE', rank: '40%'}, 
]

const useStyles = makeStyles((theme) => ({
  makestylePadding:{
    padding:0
  },
    root: {
      display: 'flex',
      marginBottom:50,
      //flexDirection: 'column',
      flexWrap: 'wrap',
      '& > *': {
        margin: "3% 1% 1% 1%",
        width: '48%',
        color:'white',
         [theme.breakpoints.down('sm')]: {
          width: '90%',
          flexDirection:'column'
        }
      },
       
    },
      skillTitle:{
          fontSize:'17px',
          color:'#cfd8dc'
      },
      skillRange:{
        '&:hover':{
            background:'#8bc34a',
         },
      },
      DivSpace:{
       marginTop:100,
       marginBottom:100
      },
      outerbox:{
        width:'100%',
        background:"#37474f",
        height:'30px',
          '& > *': {
            background:"#3d5afe",
            height:'30px',
          },
      }
  }));

function Resume(props) {
  const classes = useStyles();
    const [skillsList] = useState(skills);
    
    return (
        <Fragment>
             <h1 className="about-heading">MY SKILLS</h1>
             <Box width="100%" className={classes.root}>
                 {skillsList.map(skill =>(
                 <div key={skill.language}>
                     <span className={classes.skillTitle}>{skill.language} : {skill.rank}</span>
                    <Box className={classes.outerbox}>
                        <Box className={classes.skillRange} width={skill.rank}>
                        </Box>
                    </Box>
                </div>
                ))}
          </Box>
          <div>
                <h1 className="about-heading">RESUME</h1> 
          </div>
          <div>
              <WorkExperienceTimelines/>
          </div>
          <div className={classes.DivSpace}>
              <EduQualificationTimelines/>
          </div>
        </Fragment>
    );
}

export default Resume;