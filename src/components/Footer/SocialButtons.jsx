import React from 'react';
import './Footer.css';

const SocialButtons = () => {
  return (
    <div className='buttonList'>
      <ul className='buttonUl'>
        <li className='buttonLi'>
          <a href="https://www.facebook.com/profile.php?id=61558699041248&mibextid=LQQJ4d" className='buttonA'>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <span>  Facebook</span>
          </a>
        </li>
       
         
        <li className='buttonLi'>
          <a href="https://www.instagram.com/weddingvista_/" className='buttonA'>
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <span>  Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialButtons;
