import Axios from "axios"
import { API_URL } from "../../Support/API_URL"

export const fetchProduct = () => {
    return (dispatch) => {
        Axios.get(`${API_URL}/products`)
        .then((res) => {
            dispatch({
                type : 'FETCH_DATA',
                payload: res.data
            })
        })  
        .catch((err) => {
            console.log(err)
            // dispatch({

            // })
        })
    }
}