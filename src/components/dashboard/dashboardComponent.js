import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Scrollbar from 'react-scrollbars-custom'
import PageRouter from '../../router/PageRouter';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Sidenav from '../navbar/sidenav';


const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#282c34',
    color:'white',
    borderRight: '1px solid rgba(249, 246, 246, 0.18)'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  MuiDevider : {
    backgroundColor: 'rgba(249, 246, 246, 0.18)'
  },
}));

 function DashboardComponent(props) {
  const classes = useStyles();
  const windowHeight =`${window.innerHeight}px`;
  return (
    <Scrollbar style={{ width: '100%', height:windowHeight }}>
          <div className={classes.root} >
            <CssBaseline />
            <Router>
                  <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    anchor="left"
                  >
                    <div className="my-image-div">
                        <img src={require('../../assets/images/ajayajay.jpg')} alt="A" className="my-image"/>
                    </div>
                    <Divider className={classes.MuiDevider}/>
                    <Sidenav/>
                  </Drawer>
                  <main className={classes.content}>
                    <div className={classes.toolbar} />
                         <PageRouter/> 
                  </main>
            </Router>
          </div>
    </Scrollbar>
  );
}

export default DashboardComponent;