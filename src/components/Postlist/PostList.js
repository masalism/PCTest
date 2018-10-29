import React from 'react';
import Post from '../Post/Post';

const PostList = ({ posts }) => {   
    return (
        <div>
            {
                posts.map((post, i) => {
                    return (
                        <Post 
                            key={posts[i].id} 
                            id={posts[i].id} 
                            userId={posts[i].userId} 
                            title={posts[i].title} 
                            body={posts[i].body}
                        /> 
                    );
                })  
            }
        </div>
    );
}

export default PostList;