import React from 'react';
import MovieCard from './MovieCard';

function AllMovie({ movieArr, movieDetails }) {
    return (
        <>
            {movieArr.map((item, index) => (
                <MovieCard key={index} imgUrl={item.Poster !== "N/A" ? item.Poster : "/No_Image_Available.jpg"} movieTitle={item.Title} handleOnMovieClick={() => { movieDetails(item.imdbID) }} />
            ))}
        </>
    );
}

export default AllMovie;
