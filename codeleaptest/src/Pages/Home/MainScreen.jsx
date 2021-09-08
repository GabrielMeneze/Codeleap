import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import trash from '../../Imgs/trash.png'
import edit from '../../Imgs/pencil.png'
import Header from '../../Components/Header';

import "../Home/style.css";

function MainScreen() {
    const dispatch = useDispatch();

    // localStorage values
    const [nameuser, setNameuser] = React.useState(localStorage.getItem("DataUser"))

    // http requests values
    const [datapost, setDatapost] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // Modals values
    const [modalshow, setModalshow] = React.useState(false)
    const [deleteid, setDeleteid] = useState()
    const [modalshow2, setModalshow2] = React.useState(false)
    const [patchpost, setPatchpost] = useState()


    // GET
    useEffect(() => {
        axios.get('http://dev.codeleap.co.uk/careers/')
            .then(res => {
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
                console.log(res.data.id)
                dispatch({ type: 'ADD_ID', id: res.data.id })
                window.location.reload(true)
            })
    }

    // PATCH
    function Patch(event) {
        event.preventDefault();
        axios.patch('http://dev.codeleap.co.uk/careers/' + patchpost + '/', {
            title: title,
            content: content
        })
            .then(res => {
                console.log(res)
                window.location.reload(true)
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
                window.location.reload(true)
            })
    }

    function ModalDelete(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ fontFamily: "Questrial" }}
            >
                <Modal.Body>
                    <p>
                        are you sure you want to delete this item?
                    </p>
                    <Button onClick={() => {
                        Delete(deleteid)
                        setModalshow(false)
                    }}>YES</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    function ModalPath(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ fontFamily: "Questrial" }}
            >
                <Modal.Body>
                    <form onSubmit={Patch} className="form">
                        <div className="control">
                            <div className="field">
                                <h2>Edit your post</h2>
                                <textarea
                                    className="input1"
                                    type="text"
                                    value={title}
                                    placeholder="enter your title"
                                    onClick={event => setTitle(event.target.value)}
                                />
                            </div>
                            <div className="field">
                                <textarea
                                    className="input2"
                                    type="text"
                                    value={content}
                                    placeholder="insert your content"
                                    onC={event => setContent(event.target.value)}
                                />
                            </div>
                            <div className="form-btn">
                                <button onClick={() => setModalshow2(false)} disabled={!title || !content} type="submit" className="btnSend">CREATE</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const ids = useSelector(state => state.data);

    return (
        <body>
            <Header />
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
                            for (let i = 0; i < ids.length; i++) {
                                if (ids[i] === item.id) {
                                    return (
                                        <div className="img-array">

                                            <button
                                                className="click-img"
                                                onClick={() => {
                                                    setDeleteid(ids[i]);
                                                    setModalshow(true)
                                                }}>
                                                <img src={trash} alt="botão excluir" className="imgsbtns" />
                                            </button>
                                            <ModalDelete show={modalshow} onHide={() => setModalshow(false)} />

                                            <button
                                                className="click-img"
                                                onClick={() => {
                                                    setPatchpost(ids[i]);
                                                    setModalshow2(true)
                                                }}>
                                                <img src={edit} alt="botão editar" className="imgsbtns" />
                                            </button>
                                            <ModalPath show={modalshow2} onHide={() => setModalshow2(false)} />
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

                                    <div className="content">

                                        <div className="Space">
                                            <p>@{item.username}</p>
                                            <h3>{item.content}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </body>
    )
}

export default MainScreen;