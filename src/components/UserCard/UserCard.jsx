import React, { useState } from 'react'
import './UserCard.css'

export const UserCard = ({ user }) => {
    const [showAddress, setShowAddress] = useState(false)
    const [showCompany, setShowCompany] = useState(false)

    return (
        <div className='user__card border-2 border-green-600 rounded my-2 py-4 px-6 bg-transparent'>
            <h2 className='text-center font-bold'>{user.name}</h2>
            <p className='mt-2'><span className='font-bold'>Email:</span> {user.email}</p>
            <p className='mt-2'><span className='font-bold'>Phone:</span> {user.phone}</p>
            <p className='mt-2'><span className='font-bold'>UserName:</span> {user.username}</p>
            <p className='mt-2'><span className='font-bold'>Website:</span> {user.website}</p>
            <ul className='mt-2'>
                <button
                    className='font-bold cursor-pointer border-b-2 border-black'
                    onClick={() => setShowAddress(prev => !prev)}
                >{!showAddress ? 'Show' : 'Hide'} Address</button>
                {showAddress &&
                    <>
                        <li><span className='font-bold'>City: </span>{user.address.city}</li>
                        <li><span className='font-bold'>Street: </span>{user.address.street}</li>
                        <li><span className='font-bold'>Suite: </span>{user.address.suite}</li>
                        <li><span className='font-bold'>Zipcode: </span>{user.address.zipcode}</li>
                    </>
                }
            </ul>
            <ul className='mt-2'>
                <button
                    className='font-bold cursor-pointer border-b-2 border-black'
                    onClick={() => setShowCompany(prev => !prev)}
                >{!showCompany ? 'Show' : 'Hide'} Company Info</button>
                {showCompany &&
                    <>
                        <li><span className='font-bold'>Name: </span>{user.company.name}</li>
                        <li><span className='font-bold'>BS: </span>{user.company.bs}</li>
                        <li><span className='font-bold'>CatchPhrase: </span>{user.company.catchPhrase}</li>
                    </>
                }
            </ul>
        </div>
    )
}
