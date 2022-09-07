import React, { useState } from 'react'
import { UserCard } from '../components/UserCard/UserCard'
import { useUsersQuery } from '../store/JsonPlaceholder/placeholder.api'
import { Loader } from '../components/UI/MyLoader/Loader'
import { Popup } from '../components/UI/MyPopup/Popup'

export const UsersPage = () => {
    const { data: users, isLoading, isError } = useUsersQuery()
    const [userId, setUserId] = useState(0)
    const [showPopup, setShowPopup] = useState(false)

    if (isError) {
        return (
            <h1 className='text-center font-bold mt-40'>Sorry but something went wrong...</h1>
        )
    }

    return (
        <div className='flex justify-center my-10'>
            {!isLoading ?
                <div className='flex flex-col'>
                    {users?.map(user =>
                        <UserCard
                            user={user}
                            key={user.id}
                            setUserId={setUserId}
                            setShowPopup={setShowPopup}
                        />
                    )}
                </div>
                :
                <Loader />
            }
            <Popup
                userId={userId}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
        </div>
    )
}
