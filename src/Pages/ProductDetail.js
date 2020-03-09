import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../Support/API_URL';
import { Button } from 'reactstrap';
import Select from 'react-select';
import Loader from 'react-loader-spinner';

class ProductDetail extends Component {
    state = { 
        data : {},
        sizes : [
            {
                value: 40,
                label: 40
            },
            {
                value: 41,
                label: 41
            },
            {
                value: 42,
                label: 42
            },
            {
                value: 43,
                label: 43
            },
            {
                value: 44,
                label: 44
            },
            {
                value: 45,
                label: 45
            },
            {
                value: 46,
                label: 47
            },
        ]
    }

    componentDidMount(){
        let id = this.props.location.search.split('=')[1]
        console.log(id)
        Axios.get(`${API_URL}/products/${id}`)
        .then((res) => {
            this.setState({
                data: res.data
            })
            console.log(this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() { 
        let { data } = this.state;
        console.log(typeof(data.price))
        return ( 
            <div className='row'>
                <div className='col-4 d-flex justify-content-center'>
                    {
                        data.image
                        ?
                        <img src={data.image} alt='sepatu' width='300px' height='220px'/>
                        :
                        <Loader type="Circles" color="#5A6268" height={80} width={80}/>
                    }
                </div>
                <div className='col-8 container'>
                    <div className='py-3'>
                        <h3>
                            {data.name}
                        </h3>
                    </div>
                    <div className='py-3'>
                        <h5>
                            {data.brand}
                        </h5>
                    </div>
                    <div className='py-3'>
                        {data.category}
                    </div>
                    <div className='py-3'>
                        
                        {
                            data.price
                            ?
                            <h5>
                                Rp.{data.price.toLocaleString()}
                            </h5>
                            :
                            null
                        }
                    </div>
                    <div className='py-3'>
                        <Select options={this.state.sizes}/>
                    </div>
                    <div className='py-3' style={{float: 'right'}}>
                        <Button>
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProductDetail;