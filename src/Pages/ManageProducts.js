import React, { Component } from 'react';
import { Table, Button, Input } from 'reactstrap';
import Axios from 'axios';
import { API_URL } from '../Support/API_URL';

class ManageProduct extends Component {
    state = { 
        data : []
    }
    
    componentDidMount(){
        Axios.get(`${API_URL}/products`)
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


    renderProducts = () => {
        return this.state.data.map((val) => {
            return(
                <tr>
                    <th>{val.id}</th>
                    <th>{val.name}</th>
                    <th>{val.brand}</th>
                    <th>{val.price}</th>
                    <th>{val.category}</th>
                    <th><img src={val.image} alt={val.name} height='160px' width='200px'/></th>
                    <th>
                        <Button color='success'>
                            Edit
                        </Button>
                    </th>
                    <th>
                        <Button color='danger'>
                            Delete
                        </Button>
                    </th>
                </tr>
            )
        })
    }

    addProduct = () => {
        let namaProduk = this.name.value;
        let brand = this.brand.value;
        let price = this.price.value;
        let category = this.category.value;
        let image = this.image.value;

        let productData = {
            name : namaProduk, 
            brand, 
            price, 
            category, 
            image
        }

        Axios.post(`${API_URL}/products`, productData)
        .then((res) => {
            console.log(res.data)
            Axios.get(`${API_URL}/products`)
            .then((res) => {
                this.setState({
                    data: res.data
                })
                console.log(this.state.data)
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() { 
        return ( 
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th colSpan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProducts()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><Input placeholder='Name' innerRef={(name) => this.name = name}/></td>
                            <td><Input placeholder='Brand' innerRef={(brand) => this.brand = brand} /></td>
                            <td><Input type='number' placeholder='Price' innerRef={(price) => this.price = price}/></td>
                            <td>
                                <Input type='select' innerRef={(category) => this.category = category}>
                                    <option>Men</option>
                                    <option>Women</option>
                                    <option>Kids</option>
                                </Input>
                            </td>
                            <td><Input placeholder='Image' innerRef={(image) => this.image = image}/></td>
                            <td>
                                <Button onClick={this.addProduct}>
                                    Add Product
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        );
    }
}
 
export default ManageProduct;