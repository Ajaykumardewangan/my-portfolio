import React, { Fragment } from 'react';
import { Button, makeStyles, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(30),
        padding:'30px',
        border:'1px solid rgba(249, 246, 246, 0.18)',
        background:'#37474f',
        opacity:'0.8',
        color:'white',
        '&:hover':{
            background:'#455a64',
            opacity:'1',
            boxShadow: "2px 5px 3px #9E9E9E"
         },
      },
      [theme.breakpoints.down('md')]: {
          justifyContent:'center'
      }
    },
    MuiDevider : {
        height:'5px',
        backgroundColor: '#3f51b5',
        marginBottom : '15px',
      },
      aboutContainer:{
        display: 'flex',
        marginBottom: '80px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center'
          },
      },
      tableDiv: {
        [theme.breakpoints.down('md')]: {
          display:'flex',
          justifyContent:'center'
        }
      },
      aboutRightDiv:{
        marginLeft: '20px',
        [theme.breakpoints.down('md')]: {
            marginLeft:'0px',
            marginTop: '40px'
        }
      },
      aboutMyImage:{
        maxWidth:  '38vw',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth:  '65%',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth:  '100%',
        }
      }
  }));

function About(props) {
    const classes = useStyles();

   const downloadCv =() =>{
        const link = document.createElement('a');
        link.href = require('../assets/documents/ajay_resume.docx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <Fragment>
            <h1 className="about-heading">ABOUT ME</h1>
            <div className={classes.aboutContainer}>
                <div className="about-left-div">
                    <img src={require('../assets/images/mypic.jpg')} alt="A" className={classes.aboutMyImage}/>
                </div>
                <div className={classes.aboutRightDiv}>
                    <h2 className="intro-title">I am <span style={{color:'orange'}}>Ajay Dewangan</span></h2>
                    <span className="home-content">I am a Java full stack developer with reactJS. I can provide clean code and pixel perfect design.
                        I also make website more & more interactive with web animations.
                    </span>
                    <div className={classes.tableDiv}>
                       <table className="about-table">
                           <tbody>
                           <tr>
                               <td className="table-key">Full Name</td>
                               <td>:</td>
                               <td className="table-value">Ajay Dewangan</td>
                           </tr>
                           <tr>
                               <td className="table-key">Age</td>
                               <td>:</td>
                               <td className="table-value">25 years</td>
                           </tr>
                           <tr>
                               <td className="table-key">Nationality</td>
                               <td>:</td>
                               <td className="table-value">Indian</td>
                           </tr>
                           <tr>
                               <td className="table-key">Language</td>
                               <td>:</td>
                               <td className="table-value">English, Hindi</td>
                           </tr>
                           <tr>
                               <td className="table-key">Address</td>
                               <td>:</td>
                               <td className="table-value"> Bangaluru</td>
                           </tr>
                           <tr>
                               <td className="table-key">Freelance</td>
                               <td>:</td>
                               <td className="table-value">Enable</td>
                           </tr>
                           </tbody>
                       </table>
                    </div>
                    <Button variant="contained" color="primary" onClick={downloadCv} >
                        Download CV
                   </Button>
                </div>
            </div>
            <h1 className="about-heading">SERVICES</h1>
            <div className={classes.root}> 
                <Paper elevation={3}>
                    <h1>Web Services</h1>
                    <Divider className={classes.MuiDevider}/>
                    <span>I can provide Web Service application using rest full api with full integration from front end.</span>
                </Paper>
                <Paper elevation={3}>
                    <h1>Web Development</h1>
                    <Divider className={classes.MuiDevider}/>
                    <span>I can provide Web aplication with spring boot backend integration.</span>
                </Paper>
                <Paper elevation={3} >
                    <h1>App Development</h1>
                    <Divider className={classes.MuiDevider}/>
                    <span>I can provide App services with full features and responsive .</span>
                </Paper>
            </div>
        </Fragment>
    );
}

export default About;