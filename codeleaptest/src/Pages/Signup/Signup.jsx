import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "../Signup/index.css";



function Singup() {

    const history = useHistory();
    const [disablebtn, setDisablebtn] = useState('')

    function NameValue(event) {
        event.preventDefault()

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        localStorage.setItem('DataUser', data.name)
        history.push('/MainScreen')
    }

    return (
        <main className="all">
            <div className="bloco">
                <h2>Welcome to CoadLeap network!</h2>
                <p>Please enter your username</p>
                <form className="formulario" onSubmit={NameValue}>
                    <div className="form-group">
                        <div className="field2">
                            <input
                                placeholder="Insira um nome aqui!"
                                type="text"
                                value={disablebtn}
                                name="name"
                                className="form-input"
                                onChange={event => setDisablebtn(event.target.value)}
                            />
                        </div>
                        <div className="form-btn">
                            <button
                                disabled={!disablebtn}
                                type="submit"
                                className="singup-btn"
                            >Singup
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Singup;