import React, { Component } from 'react';
// import axios from 'axios';
// import { API_URL } from '../Support/API_URL';
import ProductCard from '../Components/ProductCard';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../Redux/Action';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


class ProductsPage extends Component{
    state = {
        data : [],
        category: []
    }
    componentDidMount(){
        this.props.fetchProduct()
        // axios.get(`${API_URL}/products`)
        // .then((res) => {
        //     this.setState({
        //         data : res.data,
        //         category : res.data.map((val) => val.brand)
        //     })
        //     console.log(this.state.category)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
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

    // handleChange = (e) => {
    //     axios.get(`${API_URL}/products?brand=${e.value}`)
    //     .then((res) => {
    //         this.setState({
    //             data: res.data
    //         })
    //     })
    // }

    renderCardProduct = () => {
        return this.props.product.map((val) => {
            return(
                <Link to={`/product-detail?id=${val.id}`} key={val.id}>
                    <ProductCard 
                        name={val.name}
                        image={val.image}
                        price={val.price}
                        brand={val.brand}
                    />
                </Link>
            )
        })
    }

    render(){
        if(this.props.loading){
            return(
                <div className='d-flex justify-content-center'>
                    <Loader type="Circles" color="#5A6268" height={80} width={80}/>
                </div>
            )
        }
        console.log(this.props.product)
        return ( 
            <div className='d-flex'>
                <div className='col-2'>
                    <Select options={this.renderBrandName()} />
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

const mapStatetoProps = (state) => {
    return{
        product : state.product.productList,
        loading : state.product.loading
    }
}
 
export default connect(mapStatetoProps, { fetchProduct })(ProductsPage);