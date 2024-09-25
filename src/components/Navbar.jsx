import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

function Navbar({ inpValue, handleOnClick, handleOnKeyDown }) {
    return (
        <div className='w-full bg-slate-900 h-14 flex justify-between items-center'>
            <div className='md:ml-10 ml-3'>
                <h1 className='text-yellow-500 font-bold text-xl'>cinema<span className='text-white'>Clue</span></h1>
            </div>
            <div className='md:mr-20 mr-3 flex justify-center items-center '>
                <input type="text" ref={inpValue} className='md:w-44 w-32 border-none pl-1 outline-none' />
                <div className='bg-yellow-500 w-6 flex justify-center items-center cursor-pointer'>
                    <IoSearchSharp className='h-6' onClick={handleOnClick} onKeyDown={handleOnKeyDown} />
                </div>
            </div>
        </div>
    );
}
export default Navbar;



