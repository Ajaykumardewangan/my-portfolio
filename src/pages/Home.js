import React from 'react';
import { Typography, Avatar, Link } from '@material-ui/core';
import '../App.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    HomeIconsDiv: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
    },
    avtarDiv:{
        marginRight: '15px',
        color:'#cfd8dc',
        border:'2px solid rgba(249, 246, 246, 0.18)',
        background:'#282c34',
        '&:hover':{
            color:'#1769aa',
            transition: '1s',
            border:'2px solid #1769aa',
        }
      }
  }));

function Home(props) {
    const classes = useStyles();
    return (
        <div className="home-content-div">
            <h1 className="home-heading">Hi, I am <span  style={{color:'orange'}}>Ajay Dewangan</span></h1>
            <Typography>
                <span className="home-content">I am a Java full stack developer with reactJS. I can provide clean code and pixel perfect design.
                I also make website more & more interactive with web animations.
                </span>
            </Typography>
            <div className={classes.HomeIconsDiv}>
            <Link href="https://github.com/Ajaykumardewangan" target="_blank">
                <Avatar className={classes.avtarDiv}>
                        <GitHubIcon />
                </Avatar>
            </Link>
            <Link href="https://www.linkedin.com/in/ajay-kumar-088906171/" target="_blank">
                <Avatar className={classes.avtarDiv}>
                        <LinkedInIcon />
                </Avatar>
            </Link> 
            <Link href="https://www.facebook.com/ajay.dewangan.39750/" target="_blank">  
                <Avatar className={classes.avtarDiv}>
                        <FacebookIcon />
                </Avatar>
            </Link>     
            </div>

        </div>
    );
}

export default Home;