import React from 'react'
import { useAlbumsQuery } from '../../../store/JsonPlaceholder/placeholder.api'
import { Loader } from '../MyLoader/Loader'
import './Popup.css'

export const Popup = ({ userId, showPopup, setShowPopup }) => {
    const { data: albums, isError, isLoading } = useAlbumsQuery(userId)

    const popupHandler = (e) => {
        e.stopPropagation()
        if (e.target.className === 'popup__wrapper active') {
            setShowPopup(false)
        }
    }

    if (isError) {
        return (
            <h1 className='text-center font-bold mt-40'>Sorry but something went wrong...</h1>
        )
    }

    return (
        <div
            className={!showPopup ? 'popup__wrapper' : 'popup__wrapper active'}
            onClick={popupHandler}
        >
            <div className='popup'>
                <button
                    className='close__popup__btn'
                    onClick={() => setShowPopup(false)}
                >X</button>
                {!isLoading ?
                    <div className='popup__content'>
                        <h1 className='text-center font-bold'>User Albums</h1>
                        {albums?.map(album =>
                            <p className='my-1' key={album.id}><span className='font-bold'>Album:</span> {album.title}</p>
                        )}
                    </div>
                    :
                    <div className='flex justify-center mb-20'>
                        <Loader />
                    </div>
                }
            </div>
        </div>
    )
}
