import React from 'react'
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function AboutMovie({ aboutMovie, handleOnCross }) {
    let GenreArr = aboutMovie.Genre.split(",")


    return (
        <>
            <div className=' bg-white  md:flex md:w-[60rem] w-[20rem] md:h-96 h-[37rem]' style={{ boxShadow: '0px 4px 50px black' }}>
                <div className='  w-7 h-7 flex justify-center items-center cursor-pointer bg-red-600 hover:bg-red-500 absolute md:right-[12rem] right-[1.2rem]' onClick={handleOnCross}>
                    <RxCross2 />
                </div>
                <div className=' flex justify-center h-64 md:h-96 md:w-[30%] items-center'>
                    <div className=' md:w-full md:h-full w-[60%] h-[95%]   '>
                        <img src={aboutMovie.Poster !== "" ? `${aboutMovie.Poster}}` : "/80b5813d8ad81a765ca47ebc59a65ac3.jpg"} className='w-full h-full' />
                    </div>
                </div>
                <div className='md:w-[70%] md:h-full h-[55%] '>
                    <div className='  h-full'>
                        <div className='flex flex-col items-center h-[40%] '>
                            {/* <div className='w-full flex justify-end'>
                        <div className=' bg-red-500 w-7 h-7 flex justify-center items-center cursor-pointer hover:bg-red-600' onClick={handleOnCross}>
                            <RxCross2 />
                        </div>

                    </div> */}
                            <h1 className='capitalize md:text-3xl text-xl text-center font-bold my-2'>{aboutMovie.Title}</h1>
                            <h2 className='flex items-center text-md font-semibold'>
                                Rating:
                                <span className='mx-1'>
                                    <FaStar color='yellow' />
                                </span>
                                {aboutMovie.Ratings}
                            </h2>
                            <div >
                                <ul className='flex gap-2 my-2'>
                                    {GenreArr.map((item, index) => (
                                        <li className='text-white bg-gray-700  md:py-1 py-0 px-2 rounded-md' key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='md:mx-5 mx-3 md:space-y-3 space-y-2 md:text-[15px] text-[13px]'>
                            <h1 className='font-bold'>Release Date: <span className='font-normal'>{aboutMovie.Released}</span></h1>
                            <h1 className='font-bold'>Duration: <span className='font-normal'>{aboutMovie.Runtime}</span></h1>
                            <h1 className='font-bold'>Cast: <span className='font-normal'>{aboutMovie.Actors}</span></h1>
                            <h1 className='font-bold'>Type: <span className='font-normal'>{aboutMovie.Type}</span></h1>
                            <h1 className='font-bold'>Plot: <span className='font-normal'>{aboutMovie.Plot}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMovie;
