import '../../src/style.css';
import kitty from '../img/kitty.png';

const Header = () => {

    return (
        <header id="header" className="jumbotron jumbotron-fluid mb-5">
            <div className="container-fluid d-flex justify-content-around align-items-center">
                <h1 className="display-4 text-light d-inline">Kitty Coffee Shop</h1>
                <img className="justify-self-center" src={kitty} alt="kitty"/>
            </div>
        </header>
    );
};

export default Header;