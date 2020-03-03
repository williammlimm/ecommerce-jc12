const INITIAL_STATE = {
    username: '',
    email: '',
    role: 'user',
    logged : false
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN' : 
            return action.payload
        case 'LOGOUT' : 
            return INITIAL_STATE
        default : 
            return state
    }
}