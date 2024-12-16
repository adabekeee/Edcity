import { useEffect, useState } from 'react' 
import "./Navbar.css"
import logo from "../../assets/Nav_logo.png"
import menu_icon from "../../assets/menu_icon.png"
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggle_menu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className= {`Container ${sticky? 'dark-nav' : ''}`}>
      <p id='logo_text'><img src={logo} alt="Books and a pen" />Edcity</p>
      <ul className={mobileMenu ? '' : 'mobile_menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-150} duration={500} className='button'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggle_menu}/>
    </nav>
  )
}

export default Navbar
