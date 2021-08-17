import '../Header/index.css'

export default function Header(){
    return (
        <header className="cabecalho">
            <div className="logotipo">
                <h2>CodeLeap Network</h2>
            </div>
            <div className="header-btn1">
                <nav>
                    <ul>
                        <li><a href="/MainScreen" title="voltar para a página inicial">HOME PAGE</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-btn2">
                <nav>
                    <ul>
                        <li><a href="/" title="Ir até a sessão de notícias">SIGNUP</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}