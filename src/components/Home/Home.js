import AddBlogs from '../Blogs/AddBlogs/AddBlogs';
import Blogs from '../Blogs/Blogs/Blogs';
import Navbar from '../Header/Navbar/Navbar'
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