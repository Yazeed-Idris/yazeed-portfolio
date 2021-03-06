import Button from "./Button";
import About from "./About";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Topnav = () => {

    return (
        <Router>
            <div className='top-nav'>
                <Link to='/about'><Button text={'About Me'}/></Link>
                <Link to='/projects'><Button text={'Projects'}/></Link>
                <Link to='/courses'><Button text={'Courses'}/></Link>
                <Link to='/hire'><Button text={'Hire Me'}/></Link>
            </div>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <h1>Projects</h1>
                </Route>
                <Route path="/courses">
                    <h1>Courses</h1>
                </Route>
                <Route path="/hire">
                    <h1>Hire Me</h1>
                </Route>
            </Switch>
        </Router>
    )
}

export default Topnav