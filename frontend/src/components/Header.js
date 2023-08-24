import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, item, isActive, onMouseEnter, onClick }) => {
  return (
    <li
      onMouseEnter={onMouseEnter}
      className={`menu-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <Link to={to}>{item}</Link>
    </li>
  );
};

const AdditionalBlock = ({ isHeaderActive, activeMenuItem, additionalBlockVisible }) => {
  let additionalContent;

  if (activeMenuItem === 'Item 1') {
    additionalContent = (
      <p>dude</p>
    );

  } else if (activeMenuItem === 'О компании') {
    additionalContent = (
      <div className="submenu">
        <div className="submenu-header">О компании</div>
        <div className='submenu-nav-list'>
          <ul className="submenu-nav parent">
            <li className="submenu-item">
              <Link className="submenu-link" href="/about">Сведения об образовательной организации &rarr;
              </Link>
            </li>
          </ul>
          <ul className='submenu-nav'>
            <li className="submenu-item"><a className="submenu-link" href="#">Структура и органы управления организации</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Документ</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Образование</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Образовательные стандарты</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Руководство</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Платные образовательные услуги</a></li>
          </ul>
          <ul className='submenu-nav'>
            <li className="submenu-item"><a className="submenu-link" href="#">Финансово-хозяйственная деятельность</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Материально-техническое обеспечение</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Стипендии</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Международное сотрудничество</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Доступная среда</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Профилактика экстремизма</a></li>
          </ul>
        </div>
      </div>
    );
  } else if (activeMenuItem === 'Учебный центр') {
    additionalContent = (
      <div className="submenu">
        <div className="submenu-header">Учебный центр</div>
        <div className='submenu-nav-list'>
          <ul className="submenu-nav parent">
            <li className="submenu-item">
              <Link className="submenu-link" href="#">Доступные образовательные программы &rarr;
              </Link>
            </li>
          </ul>
          <ul className='submenu-nav'>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Охрана труда</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/globe.png')}></img>Пожарная безопасность</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Промышленная безопасность</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/globe.png')}></img>Профессиональная переподготовка</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>ПТЭТЭ и эксплуатация тепловых энергоустановок</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Работы на высоте</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/globe.png')}></img>Рабочие профессии</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Электробезопасность</a></li>
          </ul>
          <ul className='submenu-nav'>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Земляные работы</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/globe.png')}></img>Гражданская оборона</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Оказание первой помощи</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Земляные работы</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/globe.png')}></img>Производственный контроль</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/globe.png')}></img>Радиацонная безопасность</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Повышение квалификации</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#"><img className="submenu-icon" src={require('../assets/home/factory.png')}></img>Повышение квалификации в проектировании</a></li>
          </ul>
        </div>
      </div>
    );
  } else if (activeMenuItem === 'Услуги') {
    additionalContent = (
      <div className="submenu">
        <div className="submenu-header">Услуги</div>
        <div className='submenu-nav-list'>
          <ul className="submenu-nav parent">
            <li className="submenu-item">
              <Link className="submenu-link" href="#">Комплекс предоставляемых услуг &rarr;
              </Link>
            </li>
          </ul>
          <ul className='submenu-nav'>
            <li className="submenu-item"><a className="submenu-link" href="#">Учебный центр</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Аутсорсинг по охране труда</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Повышение квалификации</a></li>
          </ul>
          <ul className='submenu-nav'>
            <li className="submenu-item"><a className="submenu-link" href="#">Лицензирование</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Сертификация</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Вступление в СРО</a></li>
            <li className="submenu-item"><a className="submenu-link" href="#">Соут</a></li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={`additional-block ${additionalBlockVisible && additionalContent ? 'block-hovered' : ''} ${isHeaderActive ? 'active' : ''}`}>
      {additionalContent}
    </div>
  );
};

const Header = () => {

  const menuItems = [
    { to: '/about', label: 'О компании' },
    { to: '/uchebni-centr', label: 'Учебный центр' },    
    { to: '/uslugi', label: 'Услуги' },
    { to: '/contacts', label: 'Контакты' },
    { to: '/media', label: 'Медиа-центр' }
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [additionalBlockVisible, setAdditionalBlockVisible] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuItemHover = (menuItem) => {
    setActiveMenuItem(menuItem);
    setTimeout(() => {
      setAdditionalBlockVisible(true);
      document.querySelector('main').classList.add('blurred');
    }, 100);
  };

  const handleMenuLeave = () => {
    setActiveMenuItem(null);
    setAdditionalBlockVisible(false);
    setTimeout(() => {
      document.querySelector('main').classList.remove('blurred');
    }, 100);
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img className='logo-pic' src={require('../assets/logo-ucrk.png')} alt="UCRK Logo" />
        </Link>
      </div>
      <div className="main-menu" onMouseLeave={handleMenuLeave}>
        <nav>
          <ul>
            {menuItems.map(({to, label}) => (
              <MenuItem
                key={label}
                to={to}
                item={label}
                isActive={activeMenuItem === label}
                onMouseEnter={() => handleMenuItemHover(label)}
                onClick={handleMenuLeave}
              />
            ))}
          </ul>
        </nav>
        <AdditionalBlock isHeaderActive={isHeaderActive} activeMenuItem={activeMenuItem} additionalBlockVisible={additionalBlockVisible} />
      </div>
      <div class="media">
        <Link to="/" className='sdo-link'>
            Перейти в СДО
        </Link>
      </div>

    </header>
  );
};

export default Header;
