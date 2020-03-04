import React, { Component } from 'react';
import Axios from 'axios';

class LatihanAxios extends Component {
    state = { 
        data : []
    }

    componentDidMount(){
        // Axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((res) => {
        //     this.setState({
        //         data : res.data
        //     })
        //     console.log(this.state.data)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })

        this.fetchData()
    }

    fetchData = () => {
        Axios.get('http://localhost:2000/latihan')
        .then((res) => {
            console.log(res, 'ini get')
            this.setState({data: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onBtnAddData = () => {

        let nama = this.refs.nama.value;

        Axios.post('http://localhost:2000/latihan', { nama : nama })
        .then((res) => {
            console.log(res, 'ini post')
            this.refs.nama.value = ''
            this.fetchData()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onBtnEditData = () => {
        let nama = this.refs.nama.value;

        Axios.patch('http://localhost:2000/latihan/1', { nama:nama })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onBtnEditDataPut = () => {
        let nama = this.refs.nama.value;

        Axios.put('http://localhost:2000/latihan/1', { nama })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onBtnDeleteData = () => {
        Axios.delete('http://localhost:2000/latihan/3')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onBtnDeleteDataAll = () => {
        Axios.get('http://localhost:2000/latihan')
        .then((res) => {
            res.data.forEach((val) => {
                Axios.delete(`http://localhost:2000/latihan/${val.id}`)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            );
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderSelect =  () => {
        return this.state.data.map((val) => {
            return(
                <option value={val.id} key={val.id} ref={`select${val.id}`}>{val.id}</option>
            )
        })
    }

    // renderData = () => {
    //     return this.state.data.map((val, index) => {
    //         return(
    //             <div key={index}>
    //                 <h2>
    //                     {val.id}. {val.title}
    //                 </h2>
    //                 <p style={{fontWeight : 'bolder'}}>
    //                     {val.body} posted by User Id {val.userId}
    //                 </p>
    //             </div>
    //         )
    //     })
    // }

    render() { 
        return ( 
            <div>
                Ini halaman latihan
                <div>
                    <select>
                        {this.renderSelect()}
                    </select>
                    {/* {this.renderData()} */}
                </div>
                <div>
                    <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    nama
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((val) => {
                                    return (
                                        <tr style={{border: '1px solid black'}}>
                                            <td>
                                                {val.id}
                                            </td>
                                            <td>
                                                {val.nama}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <input type='text' ref='nama' />
                    <input type='button' value='Add' onClick={this.onBtnAddData}/>
                    <input type='button' value='Edit' onClick={this.onBtnEditData}/>
                    <input type='button' value='EditPut' onClick={this.onBtnEditDataPut}/>
                    <input type='button' value='Delete' onClick={this.onBtnDeleteData}/>
                    <input type='button' value='DeleteAll' onClick={this.onBtnDeleteDataAll}/>
                </div>

            </div>
        );
    }
}
 
export default LatihanAxios;