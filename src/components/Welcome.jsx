import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";

function Welcome() {
    return (
        <div className='flex justify-center items-center mt-24'>
            <h1>Welcome! search  your favorite movie </h1><MdOutlineEmojiEmotions className='ml-2 w-5' />
        </div>
    )
}

export default Welcome