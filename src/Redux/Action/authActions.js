import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';

// export const Login = (data) => {
//     return{
//         type : 'LOGIN',
//         payload : data
//     }
// }

export const Login = (username, password) => {
    return(dispatch) => {
        Axios.get(`${API_URL}/users?username=${username}&password=${password}`)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify({ username, password }))
            dispatch({
                type : 'LOGIN',
                payload : res.data[0]
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type : 'LOGOUT'
            })
        })
    }
}

export const keepLogin = (token) => {
    return(dispatch) => {
        token = JSON.parse(token)
        let { username, password } = token;
        Axios.get(`${API_URL}/users?username=${username}&password=${password}`)
        .then((res) => {
            dispatch({
                type: 'LOGIN',
                payload: res.data[0]
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: 'LOGOUT'
            })
        })
    }
}

export const Logout = () => {
    return{
        type : 'LOGOUT'
    }
}