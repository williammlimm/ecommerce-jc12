import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../Support/API_URL';
import ProductCard from '../Components/ProductCard';
import Select from 'react-select';


class ProductsPage extends Component{
    state = {
        data : [],
        category: []
    }
    componentDidMount(){
        axios.get(`${API_URL}/products`)
        .then((res) => {
            this.setState({
                data : res.data,
                category : res.data.map((val) => val.brand)
            })
            console.log(this.state.category)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    

    options = [
        {
            value : 'Jordan', label : 'Jordan'
        },
        {
            value : 'Nike', label : 'Nike'
        },
        {
            value : 'Adidas', label : 'Adidas'
        },
    ]

    renderBrandName = () => {
        let removeDup = this.state.category.filter((val, index) => {
            return this.state.category.indexOf(val) === index
        })
        let categories = removeDup.map((val) => {
            return {label : val, value: val}
        })
        return categories
    }

    handleChange = (e) => {
        axios.get(`${API_URL}/products?brand=${e.value}`)
        .then((res) => {
            this.setState({
                data: res.data
            })
        })
    }

    renderCardProduct = () => {
        return this.state.data.map((val) => {
            return(
                <ProductCard 
                    name={val.name}
                    image={val.image}
                    price={val.price}
                    brand={val.brand}
                />
            )
        })
    }

    render(){
        return ( 
            <div className='d-flex'>
                <div className='col-2'>
                    <Select options={this.renderBrandName()} onChange={this.handleChange} />
                </div>
                <div  className='col-10'>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {this.renderCardProduct()}
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default ProductsPage;