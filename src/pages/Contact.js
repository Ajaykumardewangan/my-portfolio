import React, { Fragment } from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(60),
        //Width: theme.spacing(60),
        minHeight: theme.spacing(20),
        padding:'0px 20px 20px 20px',
        border:'1px solid rgba(249, 246, 246, 0.18)',
        background:'#37474f',
        opacity:'0.8',
        color:'white',
        '&:hover':{
            background:'#455a64',
            opacity:'1',
            boxShadow: "2px 5px 3px #9E9E9E"
         },
         [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft:'0px',
            marginRight:'0px'
            //minHeight: theme.spacing(20),
          }
      },
    },
    MuiDevider : {
        height:'5px',
        backgroundColor: 'rgba(249, 246, 246, 0.18)',
        marginBottom : '15px',
      },
      contactIcons:{
        fontSize: 40,
        marginRight:'5px'
      },
      paperHeading:{
          display:'flex',
          fontSize: 28,
          alignItems:'center',
          paddingTop:10,
          paddingBottom:5
      },
      content:{
        display:'flex',
        alignItems:'center',
        color:'white',
        fontSize:18,
        //marginLeft:10
      },
      ContentIcons:{
        marginRight:'5px'
    },
      
  }));

function Contact(props) {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <Fragment>
            <h1 className="about-heading">CONTACT ME</h1>
            <div className={classes.root}> 
                <Paper >
                    <div className={classes.paperHeading}><PhoneIphoneIcon className={classes.contactIcons}/> <span>Phone</span></div>
                    <Divider className={classes.MuiDevider}/>
                    <div className={classes.content}>
                        <PhoneIphoneIcon/> <span >+91 8770866017, +91 7898257711</span>
                    </div>
                </Paper>
                <Paper >
                <div className={classes.paperHeading}><MailOutlineIcon className={classes.contactIcons}/> <span>Email</span></div>
                    <Divider className={classes.MuiDevider}/>
                        <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" className={classes.content}>
                            <MailOutlineIcon className={classes.ContentIcons}/> 
                            <span >dewangan143.ajay@gmail.com</span>
                        </Link>
                        <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" className={classes.content}>
                            <MailOutlineIcon className={classes.ContentIcons}/>
                            <span >rajaydewangan741@gmail.com</span>
                        </Link>                 
                </Paper>
                <Paper elevation={3} >
                <div className={classes.paperHeading}><LocationCityIcon className={classes.contactIcons}/> <span>Address</span></div>
                    <Divider className={classes.MuiDevider}/>
                    <div className={classes.content}>
                        <LocationOnOutlinedIcon className={classes.ContentIcons}/> 
                        <span >
                             Shri Venkata Venu PG, 8th Cross, HSR Layout, Bangaluru, Karnataka.
                       </span>
                    </div>
                </Paper>
                <Paper elevation={3} >
                <div className={classes.paperHeading}><LinkedInIcon className={classes.contactIcons}/> <span>Linked IN</span></div>
                    <Divider className={classes.MuiDevider}/>
                    <Link href="https://www.linkedin.com/in/ajay-kumar-088906171/" target="_blank" className={classes.content}>
                        <LinkedInIcon className={classes.ContentIcons}/>
                         <span >linkedin.com/in/ajay-kumar-088906171/</span>
                    </Link>
                </Paper>
                <Paper elevation={3} >
                    <div className={classes.paperHeading}><FacebookIcon className={classes.contactIcons}/> <span>Facebook</span></div>
                    <Divider className={classes.MuiDevider}/>
                    <Link href="https://www.facebook.com/ajay.dewangan.39750/" target="_blank" className={classes.content}>
                        <FacebookIcon className={classes.ContentIcons}/> 
                        <span >facebook.com/ajay</span>
                    </Link>
                </Paper>
                <Paper elevation={3} >
                <div className={classes.paperHeading}><InstagramIcon className={classes.contactIcons}/> <span>Instagram</span></div>
                    <Divider className={classes.MuiDevider}/>
                    <Link href="https://www.instagram.com/ajay__dewangan_/" target="_blank" className={classes.content}><InstagramIcon className={classes.ContentIcons}/> <span >instagram.com/</span></Link>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Contact;