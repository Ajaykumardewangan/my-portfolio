import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidenav from '../navbar/sidenav';
import PageRouter from '../../router/PageRouter';
import Scrollbar from 'react-scrollbars-custom'
import {
  BrowserRouter as Router,
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up('sm', 'md', 'lg')]: {
      display:'none'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#282c34',
    color:'white',
    borderRight: '1px solid rgba(249, 246, 246, 0.18)'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  MuiDevider : {
    backgroundColor: 'rgba(249, 246, 246, 0.18)'
  },
}));

function DashboardComponentResponsive(props) {
  const windowHeight =`${window.innerHeight}px`;
  const { windowo } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = windowo !== undefined ? () => windowo().document.body : undefined;


  return (
    <Scrollbar style={{ width: '100%', height:windowHeight }}>
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            PORTFOLIO
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <div className="my-image-div">
                        <img src={require('../../assets/images/ajayajay.jpg')} alt="A" className="my-image"/>
                    </div>
                    <Divider className={classes.MuiDevider}/>
            <Sidenav/>            
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className="my-image-div">
                <img src={require('../../assets/images/ajayajay.jpg')} alt="A" className="my-image"/>
            </div>
            <Divider className={classes.MuiDevider}/>
            <Sidenav/> 
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
           <PageRouter/> 
      </main>
      </Router>
    </div>
    </Scrollbar>
  );
}
export default DashboardComponentResponsive;