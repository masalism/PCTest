import React, { Component } from "react";
import PostList from "./PostList";
import "./App.css";
import NewRecord from "./NewRecord";
import NewRecButton from "./NewRecButton";
// import { posts } from './Posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      route: "listPage"
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts }));

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    const { route, posts } = this.state;
    if (posts.lenght === 0) {
      return <h1 className="text-danger">Loading</h1>;
    } else {
      if (route === "listPage") {
        return (
          <div>
            <h1 className="text-center text-warning display-2 p-4">
              List Page
            </h1>
            <NewRecButton />
            <div className="container-fluid">
              <div className="row bg-warning text-dark p-1 text-center lead h1 align-items-center">
                <div className="col-1">Post Number</div>
                <div className="col-1">User</div>
                <div className="col-5">Title</div>
                <div className="col-5">Body</div>
              </div>
              <PostList posts={posts} />
            </div>
          </div>
        );
      } else if (route === "newRecord") {
        return <NewRecord onRouteChange={this.onRouteChange} />;
      }
    }
  }
}

export default App;
