import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { useEffect, useState } from 'react'
import SearchMovieList from '../components/SearchMovieList'
import { MovieListAction } from '../actions/MoviesListAction';
import Delay from '../components/Delay';

function LiveSearch() {
    // const [movies, setMovies] = useState([])
    
    // useEffect(()=>{
    //     async function getMovies(){
    //         const {data} = await axios.get("/api/movies")
    //         setMovies(data)
    //     }
    //     getMovies()
    // },[])
    
    const dispatch = useDispatch()
    const moviesList = useSelector(state => state.movies_list_reducer)

    const {error, loading, movies} = moviesList

    const [search, setSearch] = useState("")

    const timeDelay = Delay(search, 300)

    useEffect(()=>{
        if (search.length > 0){
            dispatch(MovieListAction(search))
        }else if(search.length === 0){
            dispatch(MovieListAction('noBody'))
        }
    },[timeDelay])
    
    
    return (
        <div>
        <h1><i className="fa-solid fa-magnifying-glass"></i> Movies</h1>
        <input 
            type="search" id="myInput" placeholder="Search About Your Movie.."
            value={search}
            onChange={e=>setSearch(e.target.value)}
        />
        {
        loading ? 
        <ul id="myUL">
            <li className='loaderLI'>
                <div className="loader"></div>
            </li>
        </ul> : 
        error ? 
        <h2>{error}</h2> :
        <ul id="myUL">
            {movies.map(movie =>(
                <SearchMovieList movie={movie} key={movie.id}/>
            ))}
        </ul>}
        </div>
    )
}

export default LiveSearch
