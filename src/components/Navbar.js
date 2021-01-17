import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

const NavElement = styled.li
`
color: black;
`

class Navbar extends Component {
    // state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
            <div>
                    <nav>
                        <ul>
                            <NavElement>
                                <Link
                                className='link'
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={this.scrollToTop}
                                >
                                Inicio
                                </Link>
                            </NavElement>
                            <li>
                                <Link
                                className='link'
                                activeClass="active"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Sobre Mi
                                </Link>
                            </li>
                            <li>
                                <Link
                                className='link'
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                    Trabajo
                                </Link>
                            </li>
                            <li>
                                <Link
                                className='link'
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        );
    }
}
 
export default Navbar;