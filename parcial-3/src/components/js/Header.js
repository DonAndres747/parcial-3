import '../css/Header.css';
import logo from "../../Recursos/logo.svg";

function App(){
    return(
        <div className="header">
            <div className="mitad1">
                <div >
                   <img src={logo} alt="logo"/>
                </div>
                <div className="hetexts">
                   <a href='#top'>Features</a>
                   <a href='#top'>Pricing</a>
                   <a href='#top'>Resources</a>
                </div>
            </div>
            <div className="heButton">
                <a href='#top'>Login</a>
                <a className='signup' href='#top'>Sign Up</a>
            </div>

        </div>

    )

}

export default App;
