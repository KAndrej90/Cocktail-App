import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faWikipediaW} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia () {
    return (
      <div className='socialMedia'>
        <a href='https://www.facebook.com/groups/916905265136283/' target='_blank'  rel="noreferrer">
        <FontAwesomeIcon className='icon' style={{width:50}} icon={faFacebook} /> 
        </a>
        <a href='https://en.wikipedia.org/wiki/Cocktail' target='_blank' rel="noreferrer">
        <FontAwesomeIcon  className='icon' style={{width:50}} icon={faWikipediaW} /> 
        </a>
        <a href='https://www.instagram.com/accounts/login/' target='_blank'  rel="noreferrer">
        <FontAwesomeIcon className='icon' style={{width:50}} icon={faInstagram} /> 
        </a>
    </div>
    );
  }