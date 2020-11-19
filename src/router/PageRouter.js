import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import {Route, Switch} from "react-router-dom";
import Projects from '../pages/Projects';

function PageRouter(props) {
    return (
               <Switch>
                   <Route path="/my-portfolio" component={Home} exact/>
                    <Route path="/my-portfolio/about" component={About} />
                    <Route path="/my-portfolio/resume" component={Resume} />
                    <Route path="/my-portfolio/projects" component={Projects} />
                    <Route path="/my-portfolio/contact" component={Contact} />
               </Switch>
    );
}

export default PageRouter;