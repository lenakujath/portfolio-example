import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  
        <div>
            <h1>
                <Fade bottom cascade> 
                    Contacto.
                </Fade>
            </h1>
            <Fade bottom>
                <div className='contact-content'>
                        <h1>
                            Trabajamos juntos en tus
                        <br/>
                            <span className='amazing-color'>
                                abilidades músicales
                            </span>
                        </h1>
                            <a 
                                href={`mailto:${data.contactEmail}`} 
                                className='email'>{data.contactEmail}
                            </a>
                        <ul>
                            {data.social.map((link,index)=>(
                                <li key={index}>
                                <a  target='_blank' 
                                    rel="noopener noreferrer" 
                                    href={link.url}>
                                    {link.name}
                                </a>
                                </li>
                            ))}   
                        </ul>
                </div>
            </Fade>
                <span className='footer'>
                    Made With ❤ by 
                    <a href="#">
                        Lena Kujath
                    </a>
                </span>
        </div>);
    }
}
 
export default Contact;