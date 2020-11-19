import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import { makeStyles } from '@material-ui/styles';

const projectsData = [
    {
        id:1,
        title: 'E-Commerce',
        languages:'Html, CSS',
        screenShot:'ecommerce.jpg',
        projectLink:'https://github.com/Ajaykumardewangan/ecommerce-ajay',
        description:'It is an online application that help in the maintenance and management of any inventory system.'
    },
    {
        id:2,
        title: 'Fundo Notes',
        languages:'Java, Spring boot, JPA, ReactJS, Html, CSS',
        screenShot:'fundo-keep.png',
        projectLink:'https://github.com/Ajaykumardewangan/FundoNotesReact',
        description:'It is an application where we can keep the notes for image, documets, text, etc like google keep.'
    },
    {
        id:3,
        title: 'News-Responsive',
        languages:'Html, CSS',
        screenShot:'newsresponsive.jpg',
        projectLink:'https://github.com/Ajaykumardewangan/news-responsive-ajay',
        description:'It is an online application that help in the maintenance and management of any inventory system.'
    },
    {
        id:4,
        title: 'Fundo Notes',
        languages:'Java, Spring boot, JPA, Angular, Html, CSS',
        screenShot:'fundo-keep.png',
        projectLink:'https://github.com/Ajaykumardewangan/FundoNoteAngular',
        description:'It is an application where we can keep the notes for image, documets, text, etc like google keep.'
    },
    {
        id:5,
        title: 'Ipl-DataSet',
        languages:'JavaScript, Html, CSS',
        screenShot:'ipldataset.png',
        projectLink:'https://github.com/Ajaykumardewangan/ipl-dataset',
        description:'It is an online application that help in the maintenance and management of any inventory system.'
    },
]

const  useStyle = makeStyles(theme =>({
    root: {
        display: 'flex',
        justifyContent:'center',
        flexWrap: 'wrap',
        '& > *': {
          '&:hover':{
            transform:'scale(1.1, 1.2)',
            transition: '1s',
           },
        },
      },
}))


function Projects(props) {
    const classes = useStyle();
    return (
        <div>
            <h1 className="about-heading">PROJECTS</h1>
            <div className={classes.root}>
                {projectsData.map(project => (
                     <ProjectCard key={project.id} project={project}/> 
                   )
                )} 
            </div>
        </div>
    );
}

export default Projects;