import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class ArticleCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            nim: '',
            kelas: '',
            nama: '',
            judul: '',
            keterangan: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewArticle = this.handleCreateNewArticle.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Confirm"
                >
                Created article successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewArticle (event) {
        event.preventDefault()
        const article = {
          nim: this.state.nim,
          kelas: this.state.kelas,
          nama: this.state.nama,
          judul: this.state.judul,
          keterangan: this.state.keterangan
        }
        axios.post('/api/article/store', article).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Tambah Judul Skripsi</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewArticle}>
                    <div className='form-group'>
                        <label htmlFor='nim'>NIM</label>
                        <input
                          id='nim'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nim') ? 'is-invalid' : ''}`}
                          name='nim'
                          value={this.state.nim}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nim')}
                      </div>
                    <div className='form-group'>
                        <label htmlFor='kelas'>Kelas</label>
                        <input
                          id='kelas'
                          type='text'
                          className={`form-control ${this.hasErrorFor('kelas') ? 'is-invalid' : ''}`}
                          name='kelas'
                          value={this.state.kelas}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('kelas')}
                      </div>
                        <div className='form-group'>
                            <label htmlFor='nama'>Nama</label>
                            <input
                            id='nama'
                            type='text'
                            className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                            name='nama'
                            value={this.state.nama}
                            onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='judul'>Judul Skripsi</label>
                        <input
                          id='judul'
                          type='text'
                          className={`form-control ${this.hasErrorFor('judul') ? 'is-invalid' : ''}`}
                          name='judul'
                          value={this.state.judul}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('judul')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='keterangan'>Keterangan</label>
                        <textarea
                          id='keterangan'
                          className={`form-control ${this.hasErrorFor('keterangan') ? 'is-invalid' : ''}`}
                          name='keterangan'
                          rows='10'
                          value={this.state.keterangan}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('keterangan')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default ArticleCreate