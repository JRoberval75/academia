import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <div>
                        <button type="button" className="btn btn-default navbar-btn btn-danger">Home</button>
                        <span className="navbar-toggler-icon"></span>
                        <button type="button" className="btn btn-default navbar-btn btn-danger">Sobre</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;