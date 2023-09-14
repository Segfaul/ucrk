import React, { useEffect, useState } from 'react';

const ContactForm = ({ className }) => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      consent: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      let newValue = type === 'checkbox' ? checked : value;

      if (name === 'phone') {
        const phoneNumber = newValue.replace(/\D/g, '');
  
        const phoneNumberLength = phoneNumber.length;
        
        if (phoneNumberLength <= 4) {
          if (newValue.length === 2 && e.nativeEvent.inputType === 'deleteContentBackward') {
            newValue = '';
          } else {
            newValue = `+7(${phoneNumber.slice(1, 4)}`;
          } 
        } else if (phoneNumberLength <= 7) {
          newValue = `+7(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4)}`;
        } else if (phoneNumberLength <= 9) {
          newValue = `+7(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
        } else if (phoneNumberLength <= 11) {
          newValue = `+7(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
        }
      }
      
      setFormData({
        ...formData,
        [name]: newValue,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <div className={`contact-form ${className}`}>
        <div className='contact-form-logo'>
            <img src={require(`../assets/logo-ucrk.png`)} alt='pic' />
        </div>
        <form className='contact-form-data' onSubmit={handleSubmit} autocomplete="off">
            <h3>Поможем подобрать программу</h3>
            <div className='contact-form-data-user'>
                <div className='contact-form-data-element'>
                    <label htmlFor="name">Ваше Имя:</label>
                    <div className='contact-form-data-element-input'>
                        <i className='fas fa-user-alt'></i>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxlength="100"
                        required
                        placeholder='Иванов Иван'
                        />
                    </div>
                </div>
                <div className='contact-form-data-element'>
                    <label htmlFor="phone">Ваш Телефон:</label>
                    <div className='contact-form-data-element-input'>
                        <i className='fa fa-phone'></i>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        maxlength="17"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder='+7(_ _ _)_ _ _-_ _- _ _'
                        />
                    </div>
                </div>
            </div>
            <div className='contact-form-data-service'>
                <button type="submit">Отправить заявку →</button>
                <label>
                    <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    />
                    Согласие на обработку персональных данных
                </label>
            </div>
        </form>
      </div>
    );  
};

const Contact = () => {
    useEffect(() => {
        document.title = 'Контакты | УЦРК';
    }, []);

    return (
        <div className='contact'>
            <div className='uchebni-header uchebni-direction-header'>
                <div className='uchebni-header-content uchebni-direction-header-content'>
                </div>
            </div>
            <div className='page-content'>
                <section className='uchebni-welcome'>
                    <h3>Контакты</h3>
                </section>
                <section className='contact-info'>
                    <div className='contact-info-description'>
                        <div className='contact-info-description-content'>
                            <p>
                                <b>Свяжитесь с нами</b> любым удобным способом.
                                Мы будем рады новым идеям и ответим на ваши вопросы:
                            </p>
                            <div className='contact-info-description-data'>
                                <div className='contact-info-description-data-element'>
                                    <div>
                                        <h3>Офис</h3>
                                        <p>ул. Радио д.24 к. 1 лфтс 602</p>
                                    </div>
                                    <div>
                                        <h3>Почта</h3>
                                        <p>info@uc-rk.ru</p>
                                    </div>
                                </div>
                                <div className='contact-info-description-data-element'>
                                    <div>
                                        <h3>Телефон/факс</h3>
                                        <span>
                                            <p>Отдел продаж <br /></p>
                                            <a className='contact-info-link' href="tel:+ 8 (495) 220-22-20">
                                                8 (495) 220-22-20
                                            </a>
                                        </span>
                                        <span>
                                            <p>Методический отдел <br /></p>
                                            <a className='contact-info-link' href="tel:+ 8 (495) 220-22-20">
                                                8 (495) 220-22-20
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-info-map'>
                        <div style={{ position: "relative", overflow: "hidden" }}>
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.750559%2C55.754684&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNDUzORJC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCt0LvQtdC60YLRgNC-0LTQvdCw0Y8g0YPQu9C40YbQsCwgNNCRIgoNkwAXQhXMBF9C&z=17.73" 
                                    style={{ width: '100%', height: '350px' }}
                                    allowfullscreen="true" title='yandex-map'>
                            </iframe>
                        </div>
                    </div>
                </section>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;