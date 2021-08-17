import React from 'react'
import { useHistory} from 'react-router-dom';
import "../Signup/index.css";



function Singup() {

    const history = useHistory();
    
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
                        <div className="field">
                            <h2>What's in your mind?</h2>
                            <input
                                placeholder="Insira um nome aqui!"
                                type="text"
                                name="name"
                                className="form-input"
                            />
                        </div>
                        <button
                            type="submit"
                            className="singup-btn"
                        >Singup</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Singup;