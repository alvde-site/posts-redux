import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AddPostForm } from "../AddPostForm/AddPostForm";

import { Navbar } from "../Navbar/Navbar";
import { PostsList } from "../PostsLIst/PostsList";
import { SinglePostPage } from "../SinglePostPage/SinglePostPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
