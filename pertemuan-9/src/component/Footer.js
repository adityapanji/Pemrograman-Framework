import React, { Component } from 'react';
// import Header from './Header';
import Footer from './Footer';
import List from './ComponentList';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Aditya Panji' />
      </div>
    );
  }
}export default App;