import "./App.css";
import NewPost from "./NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
import Post from "./Post";

import Home from "./Home";

/** Overall blog application:
 *
 * -shows header, nav links. and contains routes to:
 * - new form
 * - homepage
 * - idividual posts
 */

function App() {
  return (
    <div className="App">
      <header className="App-header jumbotron mt-2">
        <h1 className="App-title display-4">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <nav>
          <NavLink exact to="/">
            Blog
          </NavLink>
          <NavLink exact to="/new">
            Add a new post
          </NavLink>
        </nav>
      </header>

      <Switch>
        <Route exact path="/new">
          <Newpost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;