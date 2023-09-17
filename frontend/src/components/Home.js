import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RequestMail } from './Uchebni_center';


const Home = () => {
  useEffect(() => {
    document.title = 'Главная страница | УЦРК';
  }, []);

  const sliderData = [
    {
      id: 1,
      imageUrl: 'daniel-mccullough-HtBlQdxfG9k-unsplash.jpg',
      title: 'Учебный центр развития квалификации',
      subtitle: 'Традиционное профессиональное образование. Новый подход к обучению.',
      slider_title: 'Профессиональное образование по новым правилам',
      link: '',
      onClick: () => setShowRequest(true),
      link_title: 'получить консультацию'
    },
    {
      id: 2,
      imageUrl: 'uchebni-center-showoff.webp',
      title: 'Учебный центр развития квалификации',
      subtitle: 'Очные занятия, передовые технологии, современный подход к обучению!',
      slider_title: 'Очное обучение на территории московского полигона',
      link: '',
      onClick: () => setShowRequest(true),
      link_title: 'получить консультацию'
    },
    {
      id: 3,
      imageUrl: 'christopher-gower-m_HRfLhgABo-unsplash.jpg',
      title: 'Дистанционное обучение в УЦРК',
      subtitle: 'Удобное дистанцинное обучение на нашей платформе. Экономия времени, возможность обучаться из любой точки России',
      slider_title: 'Дистанционное обучение на нашей СДО',
      link: '/uchebni-center',
      link_title: 'перейти в учебный центр'
    },

    {
      id: 4,
      imageUrl: 'israel-andrade-YI_9SivVt_s-unsplash.jpg',
      title: 'Офис в центре Москвы',
      subtitle: 'Удобное расположение для вашего обучения: наш офис в самом центре Москвы',
      link: '/contacts',
      link_title: 'контакты'
    },
  ];

  const commitmentData = [
    {
      imageUrl: 'ohrana-truda.png',
      title: 'Охрана труда',
      description: 'перейти',
      link: '/uchebni-center/ohrana-truda'
    },
    {
      imageUrl: 'pozharnaya-bezopasnost.png',
      title: 'Пожарная безопасность',
      description: 'перейти',
      link: '/uchebni-center/pozharnaya-bezopasnost'
    },
    {
      imageUrl: 'ptete-i-ekspluatacziya-teplovyh-energo.png',
      title: 'Промышленная безопасность',
      description: 'перейти',
      link: '/uchebni-center/promyshlennaya-bezopasnost'
    },

    {
      imageUrl: 'rabochie-professii.png',
      title: 'Рабочие специальности',
      description: 'перейти',
      link: '/uchebni-center/zemlyanye-raboty'
    },

    {
      imageUrl: 'elektrobezopasnost.png',
      title: 'Электробезопасность',
      description: 'перейти',
      link: '/uchebni-center/elektrobezopasnost'
    },

    {
      imageUrl: 'raboty-na-vysote.png',
      title: 'Работы на высоте',
      description: 'перейти',
      link: '/uchebni-center/raboty-na-vysote'
    },
  ];

  const topicData = [
    {
      imageUrl: 'markus-winkler-aId-xYRTlEc-unsplash.jpg',
      title: 'Новость1',
      category: 'News',
      link: 'ссылка1'
    },
    {
      imageUrl: 'markus-winkler-aId-xYRTlEc-unsplash.jpg',
      title: 'Новость2',
      category: 'News',
      link: 'ссылка2'
    },
    {
      imageUrl: 'markus-winkler-aId-xYRTlEc-unsplash.jpg',
      title: 'Новость3',
      category: 'News',
      link: 'ссылка3'
    },
    {
      imageUrl: 'markus-winkler-aId-xYRTlEc-unsplash.jpg',
      title: 'Новость4',
      category: 'News',
      link: 'ссылка4'
    },
    {
      imageUrl: 'markus-winkler-aId-xYRTlEc-unsplash.jpg',
      title: 'Новость5',
      category: 'News',
      link: 'ссылка5'
    },
  ];

  const MediaData = [
    /* media-types: vk / telegram / twitter / instagram (find on font-awesome) */
    {
      media: "twitter",
      post: "https://twitter.com",
      date: "Aug 18, 2023",
      title: '@gasprom Большое спасибо. Мы очень ценим Вашу поддержку и хотели бы установить долгосрочные отношения.',
      category: 'News',
      link: 'ссылка1'
    },
    {
      media: "telegram",
      post: "https://t.me/",
      date: "Aug 6, 2023",
      title: 'Рады представить наших новых партнеров...',
      category: 'News',
      link: 'ссылка1'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCommit, setActiveCommit] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

  const handleActiveCommit = (index) => {
    setActiveCommit(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
      }
    }, 10000);
  
    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  const handleProgressBarClick = (e, index) => {
    setIsPaused(true);
    if (index !== activeSlide) {
      setActiveSlide(index);
    }
  };

  return (
    <div className='home'>
      <div className="slider-container">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-item ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${require('../assets/home/' + slide.imageUrl)})`}}
          >
            <div className="slider-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <Link to={slide.link} onClick={slide.onClick}>{slide.link_title}</Link>
            </div>
          </div>
        ))}
        <div className="slider-controls">
          <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? '▶' : 'II'}</button>
        </div>
        <div className="slider-footer">
          <div className="progress-bar-container">
            {sliderData.map((slide, index) => (
              <div key={slide.id} className="progress-bar" onClick={(e) => handleProgressBarClick(e, index)}>
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${index === activeSlide ? 100 : 0}%`
                  }}
                />
                <div key={slide.id} className={`section-title ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)}>
                  {slide.slider_title ? slide.slider_title : slide.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RequestMail showRequest={showRequest} setShowRequest={setShowRequest} />
      <div className='page-content'>
        <section className='home-description'>
          Мы обучаем требованием охраны труда, правилам выполнения работ на высоте, 
          правилам оказания первой помощи, экологии, промышленной безопасности, электробезопасности, 
          энергетической безопасности, ГО и ЧС и другие. 
        </section>
        <section className='home-commitment'>
          <div className='home-commitment-title'>
            <h3>Популярные направления обучения:</h3>
            <div className='home-commitment-description'>
              Учебный центр УЦРК предоставляет
              обучение как в <b>дистанционном</b> формате с
              внедрением перодовых технологий и
              методов обучения
              <br /><br />
              Так и <b>очно</b>, в оборудованных учебных
              классах, на территории учебного цента или
              с выездом в Вашу организацию
            </div>
          </div>
          <ul className='home-commitment-table'>
            {commitmentData.map((commitment, index) => (
              <li         
                className={`home-commitment-table-element ${index === activeCommit ? 'active' : ''} ${index !== activeCommit & activeCommit !== null ? 'inactive' : ''}`}
                onMouseEnter={() => handleActiveCommit(index)}
                onMouseLeave={() => handleActiveCommit(null)}
                style={{ order: index % 3 }}
              >
                <div className='home-commitment-table-element-wrapper'>
                  <div className='home-commitment-table-element-description'>
                    <h4 className='home-commitment-table-element-title'>{commitment.title}</h4>
                  </div>
                  <img className='home-commitment-table-element-img' src={require('../assets/home/' + commitment.imageUrl)} alt='pic' />
                </div>
                <div className='home-commitment-table-element-content'>
                  <a href={commitment.link}>
                    {commitment.description}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className='home-media'>
          <div className='home-media-topics'>
            <h3 className='home-media-title'>Последние</h3>
            <ul>
              {topicData.map((topic, index) => (
                <li>
                  <a href={topic.link} className='home-media-topics-element-description'>
                    <img src={require('../assets/home/' + topic.imageUrl)} alt='pic' />
                    <h3>{topic.title}</h3>
                  </a>
                  <div><a href={topic.link} className='home-media-recent-element-footer-tag'>{topic.category}</a></div>
                </li>
              ))}
            </ul>
          </div>
          <div className='home-media-recent'>
            <h3 className='home-media-title'>Ключевые события</h3>
            <ul>
              {MediaData.map((post, index) => (
                <li className='home-media-recent-element'>
                  <div className='home-media-recent-element-title'>
                    <i className={'fab fa-' + post.media}></i>
                    <h4>{post.title}</h4>
                  </div>
                  <div className='home-media-recent-element-footer'>
                    <div className='home-media-recent-element-footer-description'>
                      <a href={post.link} className='home-media-recent-element-footer-tag'>{post.category}</a>
                      <div className='home-media-recent-element-footer-date'>{post.date}</div>
                    </div>
                    <a href={post.post} className='home-media-recent-element-footer-link'><i className='fa fa-link'></i></a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;