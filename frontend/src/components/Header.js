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
              { text: "Охрана труда", link: "/uchebni-center/ohrana-truda", icon: "uchebni_center/labour_protection.png"},
              { text: "Пожарная безопасность", link: "/uchebni-center/pozharnaya-bezopasnost", icon: "uchebni_center/flame_security.png" },
              { text: "Промышленная безопасность", link: "/uchebni-center/promyshlennaya-bezopasnost", icon: "uchebni_center/industrial_safety.png" },
              { text: "Профессиональная переподготовка", link: "#", icon: "uchebni_center/retraining.png" },
              { text: "ПТЭТЭ и эксплуатация тепловых энергоустановок", link: "/uchebni-center/ptete-i-ekspluatacziya-teplovyh-energo", icon: "uchebni_center/heat_power_plant.png" },
              { text: "Работы на высоте", link: "/uchebni-center/raboty-na-vysote", icon: "uchebni_center/heigh_works.png" },
              { text: "Рабочие профессии", link: "/uchebni-center/rabochie-professii", icon: "uchebni_center/workers.png" },
              { text: "Электробезопасность", link: "/uchebni-center/elektrobezopasnost", icon: "uchebni_center/electricial_power.png" }
            ]
          },
          {
            items: [
              { text: "Земляные работы", link: "/uchebni-center/zemlyanye-raboty", icon: "uchebni_center/ground_works.png" },
              { text: "Гражданская оборона", link: "/uchebni-center/grazhdanskaya-oborona", icon: "uchebni_center/civil_defense.png" },
              { text: "Оказание первой помощи", link: "/uchebni-center/okazanie-pervoj-pomoshhi", icon: "uchebni_center/first_aid.png" },
              { text: "Производственный контроль", link: "/uchebni-center/proizvodstvennyj-kontrol", icon: "uchebni_center/production_control.png" },
              { text: "Радиационная безопасность", link: "/uchebni-center/radiaczionnaya-bezopasnost", icon: "uchebni_center/radiation_safety.png" },
              { text: "Повышение квалификации", link: "/uchebni-center/povyshenie-kvalifikaczii-v-stroitelstve", icon: "uchebni_center/advanced_training.png" },
              { text: "Повышение квалификации в проектировании", link: "/uchebni-center/povyshenie-kvalifikaczii-v-proektirovanii", icon: "uchebni_center/architec.png" }
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
              { text: "Учебный центр", link: "#" },
              { text: "Аутсорсинг по охране труда", link: "#" },
              { text: "Повышение квалификации", link: "#" },
            ]
          },
          {
            items: [
              { text: "Лицензирование", link: "#" },
              { text: "Сертификация", link: "#" },
              { text: "Вступление в СРО", link: "#" },
              { text: "Соут", link: "#" }
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

const Header = () => {

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
        <AdditionalBlock activeMenuItem={activeMenuItem} additionalBlockVisible={additionalBlockVisible} />
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
