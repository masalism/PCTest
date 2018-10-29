import React, { Component } from "react";
import PostList from "./Postlist/PostList";
import { NavLink } from 'react-router-dom'; 

class ListPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.setState({ posts: posts }));
    }


    render() {
    if (this.state.posts.lenght === 0) {
        return <h1 className="text-danger">Loading</h1>;
    } else {
        return (
                <div className='text-center'>
                    <h1 className="text-warning display-2 p-4">PCTest</h1>
                    <button className='btn btn-warning align-items-center m-4'>
                        <NavLink to='/newRecordForm'>
                            Create New Record
                        </NavLink>
                    </button>
                    
                    <div className="container-fluid">
                    <div className="row bg-warning text-dark p-1 lead h1 align-items-center">
                        <div className="col-1">Post Number</div>
                        <div className="col-1">User</div>
                        <div className="col-5">Title</div>
                        <div className="col-5">Body</div>
                    </div>
                        <PostList posts={this.state.posts} />
                    </div>
                </div>
            );
        }
    }
}

export default ListPage;
