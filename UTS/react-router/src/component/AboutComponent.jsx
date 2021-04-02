/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import Card from "react-bootstrap/Card";
import '../App.css';

const AboutComponent = () => {
    return (
        <div className="App">
            <Card bg="primary" border="dark" text="black" style={{ width: '50' }}>
                <Card.Body>
                    <Card.Title><b>About Me</b></Card.Title>
                    <Card>
                            <Card.Header> 
                                <Card.Body><img src={"https://avatars.githubusercontent.com/u/58581060?v=4"} width="400" height="400"></img></Card.Body>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Card.Header> 
                                <Card.Body>
                                    <p>Nama : Aditya Panji Rachmadan</p>
                                    <p>NIM : 1841720023</p>
                                    <p>Jurusan : Teknologi Informasi</p>
                                    <p>Prodi : Teknik Informatika</p>
                                    </Card.Body>
                            </Card.Header>
                        </Card>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AboutComponent;