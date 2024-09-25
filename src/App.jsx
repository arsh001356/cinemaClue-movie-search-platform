import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import { useRef, useState } from 'react'
import AllMovie from './components/AllMovie'
import AboutMovie from './components/AboutMovie'

function App() {
  const [movieArr, setMovieArr] = useState([])
  const [aboutMovie, setAboutMovie] = useState({
    Title: "Loading...",
    Ratings: "Loading...",
    Genre: "Loading...",
    Actors: "Loading...",
    Type: "Loading...",
    Runtime: "Loading...",
    Plot: "Loading...",
    Released: "Loading...",
    Poster: ""
  })
  const [showDetails, setShowDetails] = useState(false)

  async function fetchApi(movieName) {
    let res = await fetch(`https://omdbapi.com/?apikey=f96c41eb&s=${movieName}`)
    if (!res.ok) {
      alert("enter valid movie name!")
      return null
    }
    let data = await res.json()
    return data
  }
  async function fetchIdApi(imdbID) {
    let res = await fetch(`https://omdbapi.com/?apikey=f96c41eb&i=${imdbID}`)
    if (!res.ok) {
      alert("enter valid movie name!")
      return null
    }
    let data = await res.json()
    return data
  }

  const inpValue = useRef()

  const handleOnClick = async () => {

    const movieName = inpValue.current.value

    if (movieName !== "") {
      try {
        const data = await fetchApi(movieName)
        if (data.Response === "False") {
          alert(data.Error);
          return null;
        }
        setMovieArr(data.Search);
      } catch (error) {
        console.error(error)
      }


    }
  }
  //console.log(movieArr)
  const movieDetails = async (imdbID) => {
    // setMovieId(imdbID)
    const detailData = await fetchIdApi(imdbID)
    // console.log(detailData)
    setAboutMovie({
      Title: detailData.Title,
      Ratings: detailData.Ratings[0].Value,
      Genre: detailData.Genre,
      Actors: detailData.Actors,
      Type: detailData.Type,
      Runtime: detailData.Runtime,
      Plot: detailData.Plot,
      Released: detailData.Released,
      Poster: detailData.Poster,
    })
    setShowDetails(true)
  }


  const handleOnCross = () => {
    setShowDetails(false)
  }
  return (
    <>
      <Navbar inpValue={inpValue} handleOnClick={handleOnClick} />
      {movieArr.length === 0 && <Welcome />}
      <div className='w-full flex justify-center flex-wrap gap-x-10'>
        <AllMovie movieArr={movieArr} movieDetails={movieDetails} />
        <div className={`w-full h-auto ${showDetails ? "flex" : "hidden"} justify-center my-5 fixed top-14`}  >
          <AboutMovie aboutMovie={aboutMovie} handleOnCross={handleOnCross} />
        </div>
      </div>

    </>
  )
}

export default App