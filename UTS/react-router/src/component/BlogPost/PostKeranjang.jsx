import React from "react";
import "./Post.css";

const Keranjang = (props) => {
    return (
        <tr>
            <td align="center">{props.no}</td>
            <td align="center">{props.id}</td>
            <td>{props.nama}</td>
            <td align="center">{props.harga}</td>
            <td align="center">{props.qty}</td>
            <td align="center">{props.harga * props.qty}</td>
        </tr>
    )
}

export default Keranjang;