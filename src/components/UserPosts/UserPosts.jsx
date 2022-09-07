import React from 'react'
import './UserPosts.css'

export const UserPosts = ({ post }) => {
    return (
        <div className='user__post border-2 border-green-600 rounded my-2 py-4 px-6 bg-transparent'>
            <h1 className='text-center font-bold mb-4'>{post.title}</h1>
            <p className='text-center'>{post.body}</p>
        </div>
    )
}
