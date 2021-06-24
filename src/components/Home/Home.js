import AddBlogs from '../Blogs/AddBlogs/AddBlogs';
import Blogs from '../Blogs/Blogs/Blogs';
import Navbar from '../Header/Navbar/Navbar'
import HomePage from '../Pages/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Home = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route path="/blogs">
                    <Blogs />
                </Route>

                <Route path="/addBlogs">
                    <AddBlogs />
                </Route>
            </Switch>
        </Router>
    );
};

export default Home;