import React from "react";

const Post = (props) => {
  return (
    <div className="mahasiswa">
      <div className="gambar-artikel">
      <br></br>
        <img
          src="http://vectips.com/wp-content/uploads/2019/11/tutorial-preview-large.png"
          alt="Gambar Thumbnail Artikel"
        />
      </div>
      <br></br>
      <div className="attr">
        <div className="attr-nim">
          <b>NIM : {props.nim}</b>
        </div>
        <br></br>
        <p className="attr-nama">
          <b>Nama : {props.nama}</b>
        </p>
        <br></br>
        <p className="attr-alamat">
          <b>Alamat : {props.alamat}</b>
        </p>
        <br></br>
        <p className="attr-hp">
          <b>HP : {props.hp}</b>
        </p>
        <br></br>
        <p className="attr-angkatan">
          <b>Angkatan : {props.angkatan}</b>
        </p>
        <br></br>
        <p className="attr-status">
          <b>Status :{props.status}</b>
        </p>
      </div>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => props.hapusArtikel(props.idMahasiswa)}>
          Hapus
        </button>
      </div>
      
  );
};
export default Post;