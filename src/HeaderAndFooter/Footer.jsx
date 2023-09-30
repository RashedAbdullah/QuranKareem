import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div dir='rtl' className='FooterMainDiv'>

      <div className='FooterSecondDiv'>
        <ul>
          <li><a href="">معلومات عنا</a></li>
          <li><a href="">تطبيقات المحمول</a></li>
          <li><a href="">تحديثات المنتج</a></li>
          <li><a href="">مساعدة</a></li>
        </ul>

        <ul>
          <h4 className='text-light'>التعليقات</h4>
          <li><a href="">rashedabdullah.com</a></li>
          <li><a href="">ahlamsub.com</a></li>
          <li><a href="">quranulkareem.com</a></li>
        </ul>
      </div>

      <div className="aboutUs me-5 text-light">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsam ducimus dicta non consequuntur doloribus est, iusto illum molestiae quidem labore qui in, sed quod eius saepe soluta perspiciatis enim.</p>
      </div>
    </div>
  )
}

export default Footer;