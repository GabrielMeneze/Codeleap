import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import Header from '../../components/Header'
import trash from '../../Imgs/trash.png'
import edit from '../../Imgs/pencil.png'
import { useHistory } from 'react-router-dom';
import Idlist from '../../components/Idlist';
import ModalDelete from '../../components/Modaldelete/modaldelete';
import "../Home/style.css";
import { Modal, Button } from 'react-bootstrap'

function MainScreen() {
    const history = useHistory();

    // localStorage values
    const [nameuser, setNameuser] = React.useState(localStorage.getItem("DataUser"))

    // http requests values
    const [datapost, setDatapost] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // redux id values
    const [idvalue, setIdvalue] = useState([684, 683])

    // Modals values
    const [modalshow, setModalshow] = React.useState(false)
    const [deleteid, setDeleteid] = useState()


    // GET
    useEffect(() => {
        axios.get('http://dev.codeleap.co.uk/careers/')
            .then(res => {
                console.log(res.data.results)
                setDatapost(res.data.results)
            })
    }, [])

    // POST
    function Post(event) {
        event.preventDefault();
        axios.post('http://dev.codeleap.co.uk/careers/', {
            username: nameuser,
            title: title,
            content: content
        })
            .then(res => {
                console.log(res)
                history.push('/MainScreen?')
            })
    }

    // PATCH
    function Patch(event) {
        event.preventDefault();
        axios.patch('http://dev.codeleap.co.uk/careers/' + event + '/', {
            title: title,
            content: content
        })
            .then(res => {
                console.log(res)
                history.push('/MainScreen?')
            })
    }

    // DELETE 
    function Delete(event) {
        console.log('sou')
        axios.delete('http://dev.codeleap.co.uk/careers/' + event + '/', {
            id: event
        })
            .then(res => {
                console.log(res)
                history.push('/mainscreen')
            })
    }

    function ModalFrase(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ fontFamily: "Questrial" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Frase da foto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Digite sua frase abaixo
                    </p>
                    <Button onClick={() => {
                        Delete(deleteid)
                        setModalshow(false)
                    }}>YES</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <body>
            {/* <Header /> */}
            <main>
                <form onSubmit={Post} className="form">
                    <div className="control">
                        <div className="field">
                            <h2>What's in your mind?</h2>
                            <textarea
                                className="input1"
                                type="text"
                                value={title}
                                placeholder="enter your title"
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <textarea
                                className="input2"
                                type="text"
                                value={content}
                                placeholder="insert your content"
                                onChange={(event) => setContent(event.target.value)}
                            />
                        </div>
                        <div className="form-btn">
                            <button disabled={!title || !content} type="submit" className="btnSend">CREATE</button>
                        </div>
                    </div>
                </form>

                <div className="division"></div>

                <div className="itemmap">
                    {datapost !== undefined && datapost.map((item) => {

                        // It checks the id's that were saved in redux with the id's of the publications.
                        // If it is the same, the user can edit and delete the post
                        function Idchecker() {
                            for (let i = 0; i < idvalue.length; i++) {
                                if (idvalue[i] === item.id) {
                                    return (
                                        <div className="img-array">

                                            <Button
                                                className="click-img"
                                                onClick={() => {
                                                    setDeleteid(idvalue[i]);
                                                    setModalshow(true)
                                                }}>
                                                <img src={trash} alt="botão excluir" className="imgsbtns" />
                                            </Button>
                                           <ModalFrase show={modalshow} onHide={() => setModalshow(false)} />
                                            <button className="click-img">
                                                <img src={edit} alt="botão editar" className="imgsbtns" />
                                            </button>
                                        </div>
                                    )
                                }
                            }
                        }

                        return (
                            <div className="Publication">
                                <div className="items">

                                    <div className="title">
                                        <div className="title-content">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="title-btn">
                                            {Idchecker()}
                                        </div>
                                    </div>

                                    <div className="username">
                                        <p>@{item.username}</p>
                                    </div>

                                    <div className="content">
                                        <h3>{item.content}</h3>
                                    </div>

                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </main>
        </body>
    )
}

export default MainScreen;