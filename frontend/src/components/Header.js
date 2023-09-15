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

const AdditionalBlock = ({ activeMenuItem, additionalBlockVisible }) => {
  let additionalContent;

  const SubmenuItem = ({ text, link, icon }) => (
    <li className="submenu-item">
      <a className="submenu-link" href={link}>
        {icon && <img className="submenu-icon" src={require('../assets/' + icon)} alt="icon" />}
        {text}
      </a>
    </li>
  );
  
  const SubmenuList = ({ items, isParent }) => (
    <ul className={`submenu-nav ${isParent ? 'parent' : ''}`}>
      {items.map(item => (
        <SubmenuItem key={item.text} text={item.text} link={item.link} icon={item.icon} />
      ))}
    </ul>
  );
  
  const Submenu = ({ header, sections }) => (
    <div className="submenu">
      <div className="submenu-header">{header}</div>
      <div className='submenu-nav-list'>
        {sections.map((section, index) => (
          <SubmenuList key={index} items={section.items} isParent={section.isParent} />
        ))}
      </div>
    </div>
  );

  if (activeMenuItem === 'Item 1') {
    additionalContent = (
      <p>dude</p>
    );

  } else if (activeMenuItem === 'О компании') {
    additionalContent = (
      <Submenu
        header="О компании"
        sections={[
          {
            items: [
              { text: "Сведения об образовательной организации →", link: "/about" }
            ],
            isParent: true
          },
          {
            items: [
              { text: "Структура и органы управления организации", link: "#" },
              { text: "Документ", link: "#" },
              { text: "Образование", link: "#" },
              { text: "Образовательные стандарты", link: "#" },
              { text: "Руководство", link: "#" },
              { text: "Платные образовательные услуги", link: "#" }
            ]
          },
          {
            items: [
              { text: "Финансово-хозяйственная деятельность", link: "#" },
              { text: "Материально-техническое обеспечение", link: "#" },
              { text: "Стипендии", link: "#" },
              { text: "Международное сотрудничество", link: "#" },
              { text: "Доступная среда", link: "#" },
              { text: "Профилактика экстремизма", link: "#" }
            ]
          }
        ]}
      />
    );
  } else if (activeMenuItem === 'Учебный центр') {
    additionalContent = (
      <Submenu
        header="Учебный центр"
        sections={[
          {
            items: [
              { text: "Доступные образовательные программы →", link: "/uchebni-center" }
            ],
            isParent: true
          },
          {
            items: [
              { text: "Охрана труда", link: "/uchebni-center/ohrana-truda", icon: "uchebni_center/ohrana-truda.png"},
              { text: "Пожарная безопасность", link: "/uchebni-center/pozharnaya-bezopasnost", icon: "uchebni_center/pozharnaya-bezopasnost.png" },
              { text: "Промышленная безопасность", link: "/uchebni-center/promyshlennaya-bezopasnost", icon: "uchebni_center/promyshlennaya-bezopasnost.png" },
              { text: "Профессиональная переподготовка", link: "/uchebni-center/professionalnaya-perepodgotovka", icon: "uchebni_center/professionalnaya-perepodgotovka.png" },
              { text: "ПТЭТЭ и эксплуатация тепловых энергоустановок", link: "/uchebni-center/ptete-i-ekspluatacziya-teplovyh-energo", icon: "uchebni_center/ptete-i-ekspluatacziya-teplovyh-energo.png" },
              { text: "Работы на высоте", link: "/uchebni-center/raboty-na-vysote", icon: "uchebni_center/raboty-na-vysote.png" },
              { text: "Рабочие профессии", link: "/uchebni-center/rabochie-professii", icon: "uchebni_center/rabochie-professii.png" },
              { text: "Электробезопасность", link: "/uchebni-center/elektrobezopasnost", icon: "uchebni_center/elektrobezopasnost.png" }
            ]
          },
          {
            items: [
              { text: "Земляные работы", link: "/uchebni-center/zemlyanye-raboty", icon: "uchebni_center/zemlyanye-raboty.png" },
              { text: "Гражданская оборона", link: "/uchebni-center/grazhdanskaya-oborona", icon: "uchebni_center/grazhdanskaya-oborona.png" },
              { text: "Оказание первой помощи", link: "/uchebni-center/okazanie-pervoj-pomoshhi", icon: "uchebni_center/okazanie-pervoj-pomoshhi.png" },
              { text: "Производственный контроль", link: "/uchebni-center/proizvodstvennyj-kontrol", icon: "uchebni_center/proizvodstvennyj-kontrol.png" },
              { text: "Радиационная безопасность", link: "/uchebni-center/radiaczionnaya-bezopasnost", icon: "uchebni_center/radiaczionnaya-bezopasnost.png" },
              { text: "Повышение квалификации в строительстве", link: "/uchebni-center/povyshenie-kvalifikaczii-v-stroitelstve", icon: "uchebni_center/povyshenie-kvalifikaczii-v-stroitelstve.png" },
              { text: "Повышение квалификации в проектировании", link: "/uchebni-center/povyshenie-kvalifikaczii-v-proektirovanii", icon: "uchebni_center/povyshenie-kvalifikaczii-v-proektirovanii.png" }
            ]
          }
        ]}
      />
    );
  } else if (activeMenuItem === 'Услуги') {
    additionalContent = (
      <Submenu
        header="Услуги"
        sections={[
          {
            items: [
              { text: "Комплекс предоставляемых услуг →", link: "/uslugi" }
            ],
            isParent: true
          },
          {
            items: [
              { text: "Учебный центр", link: "/uchebni-center" },
              { text: "Вступление в СРО", link: "/uslugi/vstuplenie-v-sro" },
              { text: "Аутсорсинг по охране труда", link: "/uslugi/autsorsing-po-ohrane-truda" },
            ]
          },
          {
            items: [
              { text: "Соут", link: "/uslugi/sout" },
              { text: "Сертификация", link: "/uslugi/sertifikacziya" },
              { text: "Лицензирование", link: "/uslugi/liczenzirovanie" },
            ]
          }
        ]}
      />
    );
  }

  return (
    <div className={`additional-block ${additionalBlockVisible && additionalContent ? 'block-hovered' : ''}`}>
      {additionalContent}
    </div>
  );
};

/* --- */

function BurgerSubMenu({ subPoints, isOpen, toggleMenu }) {
  return (
    <div className={`burger-sub-menu ${isOpen ? 'active': ''}`}>
      <ul>
        {subPoints.map((subPoint, index) => (
          <li key={index}>
            <Link onClick={toggleMenu} to={subPoint.link}>
              <span>{subPoint.text}</span>
              {subPoint.icon && <img src={require(`../assets/` + subPoint.icon)} alt='pic' />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BurgerMenuItem({ item, toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='burger-menu-item'>
      <div className={`burger-menu-item-header ${isOpen ? 'active': ''}`}>
        <h3><Link to={item.to} onClick={toggleMenu}>{item.label}</Link></h3>
        {item.subPoints && (<i className={`fa fa-angle-up`} onClick={() => setIsOpen(!isOpen)} />)}
      </div>
      {item.subPoints && (
        <BurgerSubMenu subPoints={item.subPoints} isOpen={isOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
}


function BurgerMenu({ menuItems, toggleMenu, isOpen }) {

  return (
    <div className={`burger-menu ${isOpen ? 'active' : ''}`}>
      <button onClick={toggleMenu}>{isOpen ? '✕' : '☰'}</button>
      <div className='burger-menu-content'>
        <ul className="burger-menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <BurgerMenuItem
                item={item}
                toggleMenu={toggleMenu}
              />
            </li>
          ))}
        </ul>
        <div className='burger-menu-contact'>
          <h4>Наши контакты</h4>
          <div className='burger-menu-contact-element'>
            <p>info@uc-rk.ru</p>
            <a href="tel:+ 8 (495) 220-22-20">
                8 (495) 220-22-20
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const BurgermenuItems = [
    { 
      label: 'О компании', to: '/about', 
      subPoints: [
        { text: "Структура и органы управления организации", link: "#" },
        { text: "Документ", link: "#" },
        { text: "Образование", link: "#" },
        { text: "Образовательные стандарты", link: "#" },
        { text: "Руководство", link: "#" },
        { text: "Платные образовательные услуги", link: "#" }
      ] 
    },
    { 
      label: 'Учебный центр', to: '/uchebni-center', 
      subPoints: [
        { text: "Охрана труда", link: "/uchebni-center/ohrana-truda", icon: "uchebni_center/ohrana-truda.png"},
        { text: "Пожарная безопасность", link: "/uchebni-center/pozharnaya-bezopasnost", icon: "uchebni_center/pozharnaya-bezopasnost.png" },
        { text: "Промышленная безопасность", link: "/uchebni-center/promyshlennaya-bezopasnost", icon: "uchebni_center/promyshlennaya-bezopasnost.png" },
        { text: "Профессиональная переподготовка", link: "/uchebni-center/professionalnaya-perepodgotovka", icon: "uchebni_center/professionalnaya-perepodgotovka.png" },
        { text: "ПТЭТЭ и эксплуатация тепловых энергоустановок", link: "/uchebni-center/ptete-i-ekspluatacziya-teplovyh-energo", icon: "uchebni_center/ptete-i-ekspluatacziya-teplovyh-energo.png" },
        { text: "Работы на высоте", link: "/uchebni-center/raboty-na-vysote", icon: "uchebni_center/raboty-na-vysote.png" },
        { text: "Рабочие профессии", link: "/uchebni-center/rabochie-professii", icon: "uchebni_center/rabochie-professii.png" },
        { text: "Электробезопасность", link: "/uchebni-center/elektrobezopasnost", icon: "uchebni_center/elektrobezopasnost.png" },
        { text: "Земляные работы", link: "/uchebni-center/zemlyanye-raboty", icon: "uchebni_center/zemlyanye-raboty.png" },
        { text: "Гражданская оборона", link: "/uchebni-center/grazhdanskaya-oborona", icon: "uchebni_center/grazhdanskaya-oborona.png" },
        { text: "Оказание первой помощи", link: "/uchebni-center/okazanie-pervoj-pomoshhi", icon: "uchebni_center/okazanie-pervoj-pomoshhi.png" },
        { text: "Производственный контроль", link: "/uchebni-center/proizvodstvennyj-kontrol", icon: "uchebni_center/proizvodstvennyj-kontrol.png" },
        { text: "Радиационная безопасность", link: "/uchebni-center/radiaczionnaya-bezopasnost", icon: "uchebni_center/radiaczionnaya-bezopasnost.png" },
        { text: "Повышение квалификации в строительстве", link: "/uchebni-center/povyshenie-kvalifikaczii-v-stroitelstve", icon: "uchebni_center/povyshenie-kvalifikaczii-v-stroitelstve.png" },
        { text: "Повышение квалификации в проектировании", link: "/uchebni-center/povyshenie-kvalifikaczii-v-proektirovanii", icon: "uchebni_center/povyshenie-kvalifikaczii-v-proektirovanii.png" }
      ] 
    },
    { label: 'Услуги', to: '/uslugi', 
      subPoints: [
        { text: "Учебный центр", link: "/uchebni-center" },
        { text: "Вступление в СРО", link: "/uslugi/vstuplenie-v-sro" },
        { text: "Аутсорсинг по охране труда", link: "/uslugi/autsorsing-po-ohrane-truda" },
        { text: "Соут", link: "/uslugi/sout" },
        { text: "Сертификация", link: "/uslugi/sertifikacziya" },
        { text: "Лицензирование", link: "/uslugi/liczenzirovanie" },
      ] 
    },
    {
      label: 'Контакты', to: '/contacts',
    },
    {
      label: 'Карьера', to: '/career',
    },
    {
      label: 'Медиа', to: '/media',
    },
  ];

  const menuItems = [
    { to: '/about', label: 'О компании' },
    { to: '/uchebni-center', label: 'Учебный центр' },    
    { to: '/uslugi', label: 'Услуги' },
    { to: '/contacts', label: 'Контакты' },
    { to: '/career', label: 'Карьера' },
    { to: '/media', label: 'Медиа-центр' }
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [additionalBlockVisible, setAdditionalBlockVisible] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const header = document.querySelector('header').classList;
    const body = document.body;

    if (isOpen) {
      body.style.overflow = 'auto';
      header.remove('burger');
    } else {
      body.style.overflow = 'hidden';
      header.add('burger');
    }

  };

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
    if (activeMenuItem) {
      setAdditionalBlockVisible(false);
      setTimeout(() => {
        setActiveMenuItem(menuItem);
        setAdditionalBlockVisible(true);
      }, 200);
    } else {
      setActiveMenuItem(menuItem);
      setTimeout(() => {
        setAdditionalBlockVisible(true);
        document.querySelector('main').classList.add('blurred');
      }, 100);
    }
  };

  const handleMenuLeave = () => {
    setActiveMenuItem(null);
    setAdditionalBlockVisible(false);
    setTimeout(() => {
      document.querySelector('main').classList.remove('blurred');
    }, 100);
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} onMouseLeave={handleMenuLeave}>
      <div className="logo" onClick={() => setIsOpen(false)}>
        <Link to="/">
          <img className='logo-pic' src={require('../assets/logo-ucrk.png')} alt="UCRK Logo" />
        </Link>
      </div>
      <div className="main-menu">
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
      </div>
      <AdditionalBlock activeMenuItem={activeMenuItem} additionalBlockVisible={additionalBlockVisible} />
      <a href='tel:+ 8 (495) 220-22-20' className='main-menu-phone-number'>+ 8 (495) 220-22-20</a>
      <div class="media">
        <Link to="/" className='sdo-link'>
            Перейти в СДО
        </Link>
      </div>
      <BurgerMenu menuItems={BurgermenuItems} toggleMenu={toggleMenu} isOpen={isOpen}/>
    </header>
  );
};

export default Header;
