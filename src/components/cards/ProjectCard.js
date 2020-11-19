import React from 'react';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../../App.css'
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
    background: '#37474f',
    color:'#eceff1',
  },
  media: {
    height: 190,
  },
  header:{
      padding:'2px 16px 0px 16px',
  },
  link:{
    textDecorationLine:'None'
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiTypography:{
      colorTextSecondary:{
         color:'#cfd8dc',
         fontSize:'15px'
      }
    }
    
  }
}
)

function Media({project}) {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}> 
    
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={project.title}
        subheader = {`Languages:- ${project.languages}`}
      />
      <Link className={classes.link} href={project.projectLink} target="_blank" >
        <CardMedia
          className={classes.media}
          image={require('../../assets/images/'+project.screenShot.toString())}
        />
        </Link>
      <CardContent>
          <Typography variant="body2" component="p">
            {project.description}
          </Typography>
      </CardContent>
    </Card>
    </MuiThemeProvider>   
  );
}

 function ProjectCard(props) {
  return (
    <div>
      <Media project = {props.project}/>
    </div>
  );
}
export default ProjectCard;