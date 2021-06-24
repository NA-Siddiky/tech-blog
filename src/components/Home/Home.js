import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AddBlog from '../Blogs/AddBlog/AddBlog';
import Blogs from '../Blogs/Blogs/Blogs';
import Navbar from '../Header/Navbar/Navbar'
import HomePage from '../Pages/HomePage';
import Login from '../Login/Login';

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
                <Route path="/addBlog">
                    <AddBlog />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
};

export default Home;