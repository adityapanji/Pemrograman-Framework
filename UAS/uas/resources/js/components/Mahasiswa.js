import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import MahasiswaIndex from './MahasiswaIndex'
import ArticleCreate from './ArticleCreate'
import ArticleShow from './ArticleShow'
import ArticleEdit from './ArticleEdit'
 
class Mahasiswa extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                    <Route exact path='/' component={MahasiswaIndex}/>
                    <Route exact path='/create' component={ArticleCreate} />
                    <Route path='/article/edit/:id' component={ArticleEdit} />
                    <Route path='/article/:id' component={ArticleShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<Mahasiswa />, document.getElementById('app'))