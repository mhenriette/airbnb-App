import logo from '../assets/logo.svg'

const Navbar = () => {
    return <div className="p-7 shadow-small">
        <div className="p-2">
            <img src={logo} alt='logo' />
        </div>
    </div>;
};

export default Navbar;
