import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


function SearchMovieList(props) {
    const movie = props.movie
    
    return (
      <div>
          <Link>
              <li>
                  <img className='mov-image' src={movie.image} alt={movie.name} /> 
                  {movie.name}
              </li>
          </Link>
      </div>
    )
}

export default SearchMovieList
