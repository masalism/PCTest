import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import * as serviceWorker from './serviceWorker';
import { posts } from './Posts';

ReactDOM.render(
<div>
    <Post id={posts[0].id} userId={posts[0].userId} title={posts[0].title} body={posts[0].body}/> 
    <Post id={posts[1].id} userId={posts[1].userId} title={posts[1].title} body={posts[1].body}/> 
    <Post id={posts[2].id} userId={posts[2].userId} title={posts[2].title} body={posts[2].body}/> 
</div>
 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
