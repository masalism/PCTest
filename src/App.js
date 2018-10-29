import React, { Component } from 'react';
import PostList from './PostList';
import './App.css';
// import { posts } from './Posts';



class App extends Component {
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
            return <h1>Loading</h1>
        } else {
            return (
                <div>
                    <h1 className='text-center'>PCTest</h1>
                    <PostList posts={this.state.posts} />
                </div>
            );
        }  
    }
}

export default App;