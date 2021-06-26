import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AddBlog from '../Blogs/AddBlog/AddBlog';
import Blogs from '../Blogs/Blogs/Blogs';
import Navbar from '../Header/Navbar/Navbar'
import HomePage from '../Pages/HomePage';
import Admin from '../Admin/Admin'
import Login from '../Login/Login';
import BlogDetails from "../Blogs/BlogDetails/BlogDetails";

const Home = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/blog/:blogId">
                    <BlogDetails />
                </Route>
                <Route path="/addBlog">
                    <AddBlog />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
};

export default Home;