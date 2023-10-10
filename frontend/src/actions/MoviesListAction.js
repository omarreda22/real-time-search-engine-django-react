import axios from "axios"


export const MovieListAction = (name) => async(dispatch) =>{
    try{
        dispatch({type:"MOVIES_LIST_REQUEST"})

        const {data} = await axios.get(`/api/movies?name=${name}`)
        
        dispatch({type:"MOVIES_LIST_SUCCESS", payload:data})
    }catch(error){
        dispatch(
            {
                type:"MOVIES_LIST_FAIL",
                payload:error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            })
    }
}