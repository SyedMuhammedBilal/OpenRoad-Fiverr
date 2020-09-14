import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import '../styles/Header.css'
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <>
  <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'black'}}>
  <Link exact to="/" class="navbar-brand" href="#"><img src={logo} alt='logo' className='img-fluid' /></Link>
  <button style={{color: 'white', backgroundColor: 'white'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" style={{justifyContent: 'center',  color: 'white'}} id="navbarNav">
    <ul class="navbar-nav" style={{wordSpacing: '2.5px'}}>
      <li class="nav-item active">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#">MOTORCYCLE RENTAL</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#">SELF GUIDED ITINERARIES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#">BOOK A TOUR</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#">LIBRARY</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#">SHOP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#">SIGNIN <FontAwesomeIcon icon={faUserCircle} /></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{fontSize: '19px', color: 'white'}} href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
      </li>
    </ul>
  </div>
  </nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
