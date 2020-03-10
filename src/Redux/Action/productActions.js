import Axios from "axios"
import { API_URL } from "../../Support/API_URL"

export const fetchProduct = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_DATA_START'
        })
        Axios.get(`${API_URL}/products`)
        .then((res) => {
            dispatch({
                type : 'FETCH_DATA_SUCCESS',
                payload: res.data,
            })
        })  
        .catch((err) => {
            console.log(err)
            dispatch({
                type :'FETCH_DATA_FAILED'
            })
        })
    }
}