import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import Header from '../../components/Header'
import trash from '../../Imgs/trash.png'
import edit from '../../Imgs/pencil.png'
import { useHistory } from 'react-router-dom';
import Idlist from '../../components/Idlist';
import "../Home/style.css";

function MainScreen() {

    const history = useHistory();

    // localStorage values
    const [nameuser, setNameuser] = React.useState(localStorage.getItem("DataUser"))

    // http requests values
    const [datapost, setDatapost] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // redux id values
    const [idvalue, setIdvalue] = useState([684, 683, 682])

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
                                            <button className="click-img" onClick={() => { Delete(idvalue[i]) }}>
                                                <img src={trash} alt="botão excluir" className="imgsbtns" />
                                            </button>

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
                <Idlist/>
            </main>
        </body>
    )
}

export default MainScreen;