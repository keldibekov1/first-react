import './Navbar.css'
import { IoSearchSharp } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"

const Navbar = () => {
  return (
    <div className="navbar"> 
      <div className="container">
        <h2>Mohid</h2>
        <ul>
          <li>Home</li>
          <li>Brands</li>
          <li>Recent Products</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <div className="navbar-options">
          <IoSearchSharp />
          <FaCartShopping />
          <FaUser />
        </div>
      </div>
    </div>
  )
}

export default Navbar
