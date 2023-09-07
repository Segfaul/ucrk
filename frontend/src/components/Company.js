import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const SplitPic = ({className=''}) => {
    return (
        <div className='split-pic'>
            <div className='split-pic-text'>
              <div className='split-pic-content'>
                <div className='split-pic-content-header'>
                    <h3>Наши контакты</h3>
                    <p>111524 Москва, ул. Электродная 4Б, офис 302</p>
                  </div>
                  <div className='split-pic-links contact-info-description-data'>
                        <div><a href="tel:+ 8 (495) 220-22-20"><i class="fas fa-phone"></i><p>+ 8 (495) 220-22-20</p></a></div>
                        <div><a href="mailto:info@uc-rk.ru"><i class="fas fa-envelope"></i><p>info@uc-rk.ru</p></a></div>
                  </div>
              </div>
            </div>
            <div className='split-pic-img' style={{ backgroundImage: `url(${require('../assets/about/test_tower.jpg')})`}}>
                <i className='fas fa-share'></i>
            </div>
        </div>
    );
};

const Company = () => {
    useEffect(() => {
        document.title = 'О Компании | УЦРК';
    }, []);

    return (
        <div className='about'>
          <div className='uchebni-header uchebni-direction-header' style={{ backgroundImage: `url(${require('../assets/about/logo.webp')})`}}>
            <div className='uchebni-header-content uchebni-direction-header-content'>
              <h2>Учебный Центр нового поколения</h2>
            </div>
          </div>
          <div className='page-content'>
            <section className='uchebni-welcome'>
              <h3>ООО "УЦРК"</h3>
              <p>
                Учебный центр развития квалификации предоставляет услуги в области дополнительного профессионального образования(послевузовское образование).
                <br />
                Учебные занятия проводят высококвалифицированные преподаватели. Занятия могут быть организованы несколькими способами.
                <br />
              </p>
              <SplitPic />
            </section>
          </div>
        </div>
    );
};

export default Company;