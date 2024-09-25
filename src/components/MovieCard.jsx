import React from 'react'

function MovieCard({ imgUrl, movieTitle, handleOnMovieClick }) {

    return (


        <div className='my-3' onClick={handleOnMovieClick}>
            <div className='w-80 h-96  rounded-xl bg-slate-900 hover:shadow-2xl text-white cursor-pointer'>
                <div className='h-full bg-white rounded-xl'>
                    <img src={`${imgUrl}`} className='w-full h-full rounded-xl' />
                </div>
            </div>
            <div className=' text-[1rem]  font-semibold flex flex-col flex-wrap text-black items-center mt-3  '>
                <div className=' w-[18rem] h-14 flex justify-center items-center '>
                    <p className='capitalize text-center'>{movieTitle}</p>
                </div>
                <div className='w-24 bg-yellow-500 h-1 rounded-full'></div>
            </div>
        </div >



    )
}

export default MovieCard