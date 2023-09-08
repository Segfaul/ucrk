import React, { useEffect, useState } from 'react';

const ContactForm = ({ className }) => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      consent: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
      
      setFormData({
        ...formData,
        [name]: newValue,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Здесь вы можете выполнить отправку данных на сервер или другие необходимые действия
      console.log(formData);
    };
  
    return (
      <div className={`contact-form ${className}`}>
        <div className='contact-form-logo'>
            <img src={require(`../assets/logo-ucrk.png`)} alt='pic' />
        </div>
        <form className='contact-form-data' onSubmit={handleSubmit}>
            <div className='contact-form-data-element'>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='contact-form-data-element'>
                <label htmlFor="phone">Телефон:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='contact-form-data-element'>
                <label>
                    <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    />
                    Согласие на обработку персональных данных
                </label>
            </div>
            <button type="submit">Отправить</button>
        </form>
      </div>
    );  
  };

const Contact = () => {
    useEffect(() => {
        document.title = 'Контакты | УЦРК';
    }, []);

    return (
        <div className='page-content'>
            <section className='contact-info'>
                <div className='contact-info-description'>
                    <h2>Офис</h2>
                    <p>111524 Москва, ул. Электродная 4Б, офис 302</p>
                    <div className='contact-info-description-data'>
                        <div><a href="tel:+ 8 (495) 220-22-20"><i class="fas fa-phone"></i><p>+ 8 (495) 220-22-20</p></a></div>
                        <div><a href="mailto:info@uc-rk.ru"><i class="fas fa-envelope"></i><p>info@uc-rk.ru</p></a></div>
                    </div>
                </div>
                <div className='contact-info-map' style={{ position: "relative", overflow: "hidden"}}>
                    <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" 
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Москва</a>
                    <a href="https://yandex.ru/maps/213/moscow/house/elektrodnaya_ulitsa_4b/Z04YcQJgTEAOQFtvfXt0dXprYA==/?ll=37.750559%2C55.754684&utm_medium=mapframe&utm_source=maps&z=17.73" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Электродная улица, 4Б — Яндекс Карты</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=37.750559%2C55.754684&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNDUzORJC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCt0LvQtdC60YLRgNC-0LTQvdCw0Y8g0YPQu9C40YbQsCwgNNCRIgoNkwAXQhXMBF9C&z=17.73" width="760" height="400" frameborder="1" allowfullscreen="true" style={{position: "relative"}}>
                    </iframe>
                </div>
            </section>
            <ContactForm />
        </div>
    );
};

export default Contact;