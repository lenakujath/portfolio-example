import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

const Bar = styled.nav`
  
  color: white;
  width: 100%;
  height: 5em;
  `

const NavElement = styled.li`
color: white;
`

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
            <div>
        <Bar>          
        <nav>
            <ul>
                <NavElement><Link
                    className='link'
                    activeClass="active"
                    to="homw"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Inicio</Link></NavElement>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Sobre Mi</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Trabajo</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contacto</Link></li>
            </ul>
        </nav>
        </Bar>
        </div>
        );
    }
}
 
export default Navbar;