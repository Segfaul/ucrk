import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
		<div className="footer-contact">
            <div className="footer-contact-info">
                <h3>Контакты</h3>
                <div className="footer-contact-info-element"><a href="tel:+ 8 (495) 220-22-20"><i class="fas fa-phone"></i><p>+ 8 (495) 220-22-20</p></a></div>
                <div className="footer-contact-info-element"><a href="mailto:info@uc-rk.ru"><i class="fas fa-envelope"></i><p>info@uc-rk.ru</p></a></div>
                <div className="footer-contact-info-element"><i class="fas fa-map-marker-alt"></i><p>111524 Москва, ул. Электродная 4Б, офис 302</p></div>
            </div>
            <ul className="footer-contact-media">
                <li className="footer-contact-media-element"><a className="telegram" href=""><i class="fab fa-telegram"></i></a></li>
                <li className="footer-contact-media-element"><a className="instagram" href=""><i class="fab fa-instagram"></i></a></li>
                <li className="footer-contact-media-element"><a className="vk" href=""><i class="fab fa-vk"></i></a></li>
            </ul>
        </div>
        <div className='footer-credentials'>© 2022-2023 ООО «УЦРК»</div>
    </footer>
  );
};

export default Footer;