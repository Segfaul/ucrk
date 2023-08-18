import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, item, isActive, onMouseEnter, newbie, jewbie }) => {
  // console.log(newbie, jewbie);
  return (
    <li
      onMouseEnter={onMouseEnter}
      className={`menu-item ${isActive ? 'active' : ''}`}
    >
      <Link to={to}>{item}</Link>
    </li>
  );
};

const AdditionalBlock = ({ activeMenuItem, additionalBlockVisible }) => {
  let additionalContent;

  if (activeMenuItem === 'Item 1') {
    additionalContent = (
      <p>dude</p>
    );

  } else if (activeMenuItem === 'О компании') {
    additionalContent = <p>О компании</p>;
  } else if (activeMenuItem === 'Услуги') {
    additionalContent = <p>Услуги</p>;
  } else if (activeMenuItem === 'Контакты') {
    additionalContent = <p>Контакты</p>;
  } else if (activeMenuItem === 'Медиа-центр') {
    additionalContent = <p>Медиа</p>;
  }

  if (additionalContent) {
    return (
      <div className={`additional-block ${additionalBlockVisible ? 'block-hovered' : ''}`}>
        {additionalContent}
      </div>
    );
  }
};

const Header = () => {

  const menuItems = [
    { to: '/about', label: 'О компании' },
    { to: '/services', label: 'Услуги' },
    { to: '/contacts', label: 'Контакты' },
    { to: '/media', label: 'Медиа-центр' }
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [additionalBlockVisible, setAdditionalBlockVisible] = useState(false);

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
    <div className="header-container">
      <div
        className="main-menu"
        onMouseLeave={handleMenuLeave}
      >
        <nav>
          <ul>
            {menuItems.map(({to, label}) => (
              <MenuItem
                key={label}
                to={to}
                item={label}
                isActive={activeMenuItem === label}
                newbie={activeMenuItem}
                jewbie={label}
                onMouseEnter={() => handleMenuItemHover(label)}
              />
            ))}
          </ul>
        </nav>
        <AdditionalBlock activeMenuItem={activeMenuItem} additionalBlockVisible={additionalBlockVisible} />
      </div>
    </div>
  );
};

export default Header;
