import React from 'react';

const Post = ({ id, userId, title, body }) => {
    return (
        <div className='text-center'>
            <p>{id}</p>
            <p>{userId}</p>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}

export default Post;