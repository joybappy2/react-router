import React, { use } from 'react';
import Post from '../Post/Post';

const Posts = ({ postsPromise }) => {
    const posts = use(postsPromise)
    return (
        <div className=''>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;