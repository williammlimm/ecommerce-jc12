import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Support/API_URL';

const ProductsPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await axios(API_URL+'/products');
        setData(res.data)
    }        

    return ( 
        <div>
            {data.map((val) => {
                return(
                    <h1>{val.name}</h1>
                )
            })}
        </div> 
    );
}
 
export default ProductsPage;