export const MoviesReducer = (state = {movies: []}, action) => {
    switch(action.type){
        case "MOVIES_LIST_REQUEST":
            return {loading:true, movies:[]}
        
        case "MOVIES_LIST_SUCCESS":
            return {loading:false, movies: action.payload}
        
        case "MOVIES_LIST_FAIL":
            return {loading:false, error:action.payload}

        default:
            return state
    }
}