const INITIAL_STATE = {
    productList : [],
    brands: [],
    loading : false
}

export const productReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
        case 'FETCH_DATA_START' : 
            return {
                loading: true
            }
        case 'FETCH_DATA_SUCCESS' : 
            return {
                loading : false,
                productList : action.payload
            }
        case 'FETCH_DATA_FAILED' : 
            return INITIAL_STATE
        default :
            return state
    }
}