import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.svg'

function Footer() {
    return (
        <div>
        <footer style={{backgroundColor: 'black'}} class="page-footer font-small mdb-color pt-4">
        
          <div class="container text-center text-md-left">
        
            <div class="row text-center text-md-left mt-3 pb-3">
        
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 style={{color: 'white'}} class="text-uppercase mb-4 font-weight-bold">OPENROADS</h6>
                <p style={{color: 'white', fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', fontSize: '12px'}}>MOTORCYCLE ROUTES, RENTALS AND EXPERIENCES</p>
              </div>
        
              <hr class="w-100 clearfix d-md-none"/>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">MOTORCYCLE RENTAL</h6>
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">MOTORCYCLE TOURS</h6>
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">DISCOVER ROUTES</h6>
              </div>
        
              <hr class="w-100 clearfix d-md-none"/>
        
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">SHOP GEAR + APPAREL</h6>
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">OPENROADS RALLY</h6>
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">ABOUT OPENROADS</h6>
              </div>
        
              <hr class="w-100 clearfix d-md-none"/>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">EVENTS</h6>
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">OPENDOORS.TV</h6>
                <h6 style={{color: 'white', fontSize: '14px'}} class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              </div>

            </div>
        
            <hr/>

            <div class="row d-flex align-items-center">
        
              <div class="col-md-7 col-lg-8">
        
                <p style={{color: 'white'}} class="text-center text-md-left">© 2020 Copyright:
                  <a href="">
                    <strong style={{color: 'white'}}>openroads.com</strong>
                  </a>
                </p>
        
              </div>
        
              <div class="col-md-5 col-lg-4 ml-lg-0">
        
                <div class="text-center text-md-right">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating btn-sm rgba-white-slight mx-1">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
        
              </div>
        
            </div>
        
          </div>
        
        </footer>

        </div>
    )
}

export default Footer
