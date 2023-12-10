import "./NavBar.css";
import AppleIcon from '@mui/icons-material/Apple';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


// components
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-bar">
        <a href="#" className="nav-link"><AppleIcon /></a>
        <a href="#" className="nav-link">Store</a>
        <a href="#" className="nav-link">Mac</a>
        <a href="#" className="nav-link">iPad</a>
        <a href="#" className="nav-link">iPhone</a>
        <a href="#" className="nav-link">Watch</a>
        <a href="#" className="nav-link">Vision</a>
        <a href="#" className="nav-link">AirPods</a>
        <a href="#" className="nav-link">TV & Home</a>
        <a href="#" className="nav-link">Entertainment</a>
        <a href="#" className="nav-link">Accesories</a>
        <a href="#" className="nav-link">Support</a>
        <a href="#" className="nav-link"><SearchOutlinedIcon /></a>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar