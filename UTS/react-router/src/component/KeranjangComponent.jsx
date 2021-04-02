import React, { Component } from "react"
import '../App.css';
import PostKeranjang from './BlogPost/PostKeranjang';

class ProductComponent extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataProduk = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataProduk()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        var no = 0;
        var total = 0;
        return (
            <div class="post-artikel">{
                <table border="1" cellPadding="5" width="100%">
                    <tr>
                        <th align="center">No</th>
                        <th align="center">ID Produk</th>
                        <th align="center">Nama</th>
                        <th align="center">Harga</th>
                        <th align="center">Quantity</th>
                        <th align="center">Subtotal</th>
                    </tr>{
                        this.state.listKeranjang.map(produk => {
                            no += 1;
                            total += produk.harga * produk.qty;
                            return <PostKeranjang
                                key={produk.id}
                                no={no}
                                id={produk.id}
                                nama={produk.nama}
                                harga={produk.harga}
                                stok={produk.stok}
                                qty={produk.qty}
                                tambahSetrika={this.handleGetSetrika} />
                        })
                    }
                    <tr>
                        <td colSpan="5" align="center">Total : </td>
                        <td align="center">{total}</td>
                    </tr>
                </table>
            }
            </div>
        )
    }
}

export default ProductComponent;