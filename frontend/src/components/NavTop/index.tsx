import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function NavTop() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Academia por RoberSystem</h1>
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

export default NavTop;