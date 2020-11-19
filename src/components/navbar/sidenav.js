import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
    NavLink,
  } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import PortraitIcon from '@material-ui/icons/Portrait';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import DescriptionIcon from '@material-ui/icons/Description';

  const useStyles = makeStyles((theme) => ({
    MuiListItem :{
      paddingLeft :"60px",
      height:'40px',
      borderRadius:'50px',
      '&:hover':{
          background:'#3d5afe',
          borderRadius:'50px'
      }
    }
  }));

function Sidenav(props) {
    const classes = useStyles();
    return (
        <div>
            <List>
           <NavLink to="/my-portfolio" className="navlink-decoration">
                <ListItem button key="HOME" className={classes.MuiListItem}>
                    <ListItemIcon ><HomeIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="HOME" />
                </ListItem>
            </NavLink>
            <NavLink to="/my-portfolio/about" className="navlink-decoration">
                <ListItem button key="ABOUT" className={classes.MuiListItem}>
                    <ListItemIcon ><PortraitIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="ABOUT" />
                </ListItem>
            </NavLink>
            <NavLink to="/my-portfolio/resume" className="navlink-decoration">
                <ListItem button key="RESUME" className={classes.MuiListItem}>
                    <ListItemIcon ><DescriptionIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="RESUME" />
                </ListItem>
            </NavLink>
            <NavLink to="/my-portfolio/projects" className="navlink-decoration">
                <ListItem button key="PROJECTS" className={classes.MuiListItem}>
                    <ListItemIcon ><DeveloperBoardIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="PROJECTS" />
                </ListItem>
            </NavLink>
            <NavLink to="/my-portfolio/contact" className="navlink-decoration">
                <ListItem button key="CONTACT" className={classes.MuiListItem}>
                    <ListItemIcon ><ContactsOutlinedIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="CONTACT" />
                </ListItem>
            </NavLink>
        </List>
        </div>
    );
}

export default Sidenav;