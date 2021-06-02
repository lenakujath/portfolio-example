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
                                Start
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
                                About Me
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
                                    Work
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
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        );
    }
}
 
export default Navbar;