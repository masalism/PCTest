import React from 'react';

const Post = ({ id, userId, title, body, onRouteChange }) => {
    return (
        <div className='container-fluid'>
            <div className='row text-center py-3 border-bottom '>
                <div className='col-1'>{id}</div>
                <div className='col-1'>{userId}</div>
                <div className='col-5'>
                <a  href={`https://jsonplaceholder.typicode.com/posts/${id}`}>{title}</a>
                </div>
                <div className='col-5'>{body}</div>
            </div>
        </div>
    );
}

export default Post;