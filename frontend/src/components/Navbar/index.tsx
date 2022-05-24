import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Academia por RoberSystem</h1>
                    <div>
                        <button type="button" className="btn btn-default navbar-btn btn-danger">Home</button>
                        <span className="navbar-toggler-icon"></span>
                        <button type="button" className="btn btn-default navbar-btn btn-danger">Sobre</button>
                    </div>
                    <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/devimferior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;