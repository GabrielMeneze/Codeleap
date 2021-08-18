import '../Header/index.css'

export default function Header(){
    return (
        <header className="header">
            <div className="logo">
                <h2>CodeLeap Network</h2>
            </div>
            <div className="header-btn1">
                <nav>
                    <ul>
                        <li><a href="/MainScreen" title="go to the home page">HOME PAGE</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-btn2">
                <nav>
                    <ul>
                        <li><a href="/" title="go to the signup page">SIGNUP</a></li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}