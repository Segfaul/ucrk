import React, { useState, useEffect } from 'react';

const Home = () => {
  const sliderData = [
    {
      id: 1,
      imageUrl: 'daniel-mccullough-HtBlQdxfG9k-unsplash.jpg',
      title: 'Анонсирована годовая отчетность',
      link: 'ссылка1',
      link_title: 'перейти'
    },
    {
      id: 2,
      imageUrl: 'umit-yildirim-9OB46apMbC4-unsplash.jpg',
      title: 'Мы готовы к переходу',
      link: 'ссылка2',
      link_title: 'подробнее'
    },
    {
      id: 3,
      imageUrl: 'christopher-gower-m_HRfLhgABo-unsplash.jpg',
      title: 'Наше СДО открыло новые направления',
      link: 'ссылка3',
      link_title: 'перейти'
    },

    {
      id: 4,
      imageUrl: 'israel-andrade-YI_9SivVt_s-unsplash.jpg',
      title: 'Офис в центре Москвы',
      link: 'ссылка3',
      link_title: 'контакты'
    },
  ];

  const commitmentData = [
    {
      imageUrl: 'lamp.png',
      title: 'Улучшаем сервисы',
      description: 'перейти',
      link: 'ссылка1'
    },
    {
      imageUrl: 'roundabout.png',
      title: 'Повышаем эффективность',
      description: 'описание',
      link: 'ссылка2'
    },
    {
      imageUrl: 'factory.png',
      title: 'Наше СДО открыло новые направления',
      description: 'описание',
      link: 'ссылка3'
    },

    {
      imageUrl: 'globe.png',
      title: 'Устойчивое развитие',
      description: 'описание',
      link: 'ссылка3'
    },

    {
      imageUrl: 'hand-shake.png',
      title: 'Офис в центре Москвы',
      description: 'описание',
      link: 'ссылка3'
    },

    {
      imageUrl: 'vacancy.png',
      title: 'Предлагаем работу',
      description: 'описание',
      link: 'ссылка3'
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

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCommit, setActiveCommit] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

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
              <a href={slide.link}>{slide.link_title}</a>
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
                  {slide.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='page-content'>
        <section className='home-description'>
          Мы обучаем требованием охраны труда, правилам выполнения работ на высоте, 
          правилам оказания первой помощи, экологии, промышленной безопасности, электробезопасности, 
          энергетической безопасности, ГО и ЧС и другие. 
        </section>
        <section className='home-commitment'>
          <div className='home-commitment-title'>
            <h3>Наши обязательства</h3>
            <div className='home-commitment-description'>
              Учебный центр повышения квалификации 
              готов предоставить высокое качество образования, 
              современный подход и приветливый персонал.
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
              <li className='home-media-recent-element'>
                <div className='home-media-recent-element-title'>
                  <i></i>
                  <h4>@elliot</h4>
                </div>
                <div className='home-media-recent-element-footer'>
                  <div className='home-media-recent-element-footer-tag'></div>
                  <div className='home-media-recent-element-footer-date'>Aug 18, 2023</div>
                  <a className='home-media-recent-element-footer-link'><i /></a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;