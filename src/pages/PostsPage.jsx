import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader } from '../components/UI/MyLoader/Loader'
import { UserPosts } from '../components/UserPosts/UserPosts'
import { usePostsQuery } from '../store/JsonPlaceholder/placeholder.api'

export const PostsPage = () => {
    const { id } = useParams()
    const { data: posts, isError, isLoading } = usePostsQuery(id)
    const navigation = useNavigate()

    if (isError) {
        return (
            <h1 className='text-center font-bold mt-40'>Sorry but something went wrong...</h1>
        )
    }

    return (
        <>
            <button
                className='mt-2 ml-4 px-2 pt-1 border-b-2 border-green-600'
                onClick={() => navigation('/')}
            >Go Back</button>
            <div className='flex justify-center my-5'>
                {!isLoading ?
                    <div className='flex flex-col'>
                        {posts?.map(post =>
                            <UserPosts post={post} key={post.id} />
                        )}
                    </div>
                    :
                    <Loader />
                }
            </div>
        </>
    )
}
