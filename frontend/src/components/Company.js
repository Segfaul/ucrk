import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SliderPartner = ({ className = '' }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const partners = [
    { imageSrc: 'about/lucoil.png', alt: 'Партнер 1' },
    { imageSrc: 'about/tehnomash.jpg', alt: 'Партнер 2' },
    { imageSrc: 'about/rosatom.png', alt: 'Партнер 3' },
    { imageSrc: 'about/almaz.jpg', alt: 'Партнер 4' },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  const handlePageIndicatorClick = (index) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Вычислите сдвиг для слайдера
  const sliderTransform = `translateX(-${currentPage * (78.75)}%)`;

  return (
    <div className={`partners-slider ${className}`}>
      <div className="sliderz-container">
        <div className={`slider animate`} style={{ transform: sliderTransform }}>
          {partners.map((partner, index) => (
            <div className="partner" key={index}>
              <img src={require('../assets/' + partner.imageSrc)} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="slider-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`page-indicator ${index === currentPage ? 'active' : ''}`}
            onClick={() => handlePageIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const SplitPic = ({className=''}) => {
    return (
        <div className='split-pic'>
            <div className='split-pic-text'>
              <div className='split-pic-content'>
                <div className='split-pic-content-header'>
                    <h3>Наша цель</h3>
                    <p>Мы стремимся развивать лидеров и инноваторов через
                    качественное образование, формируя будущее, насыщенное
                    знаниями и возможностями
                    </p>
                  </div>
                  <div className='split-pic-links'>
                      <div className='split-pic-link'>
                        <Link to="/uchebni-center">Основные сведения</Link>
                      </div>
                      <div className='split-pic-link'>
                        <Link to="/uchebni-center">Структура и органы управления организации</Link>
                      </div>
                      <div className='split-pic-link'>
                        <Link to="/uchebni-center">Документы</Link>
                      </div>
                      <div className='split-pic-link'>
                        <Link to="/uchebni-center">Руководство. Педагогический (научно-педагогический) состав</Link>
                      </div>
                      <div className='split-pic-link'>
                        <Link to="/uchebni-center">Образование</Link>
                      </div>
                      <div className='split-pic-link'>
                        <Link to="/uchebni-center">Карьера в УЦРК</Link>
                      </div>
                  </div>
              </div>
            </div>
            <div className='split-pic-img' style={{ backgroundImage: `url(${require('../assets/about/yauza.webp')})`}}>
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
          <div className='uchebni-header uchebni-direction-header' style={{ backgroundImage: `url(${require('../assets/about/logo.png')})`}}>
            <div className='uchebni-header-content uchebni-direction-header-content'>
              <h2>Учебный Центр <br />нового поколения</h2>
            </div>
          </div>
          <div className='page-content'>
            <section className='uchebni-welcome'>
              <h2>Учебный центр развития квалификации</h2>
              <h3>О нас</h3>
              <p>
              Наш путь в области образования начался в 2022 году, и с тех пор мы стремимся к тому, чтобы стать не просто учебным центром,
              а источником вдохновения и развития для наших клиентов.

              <br /><br />
              За первый год "УЦРК" объединил более 25 высококвалифицированных преподавателей, специалистов по охране с многолетним
              опытом работы, ответственных руководителей и других, не менее важных, членов нашей команды.
              Мы усердно работаем, чтобы предоставить самые актуальные и профессиональные услуги в области дополнительного
              профессионального образования.
              </p>
            </section>
          </div>
          <SplitPic />
          <div className='page-content'>
            <section className='uchebni-welcome'>
              <p>
              Наш учебный центр обучает требованиям охраны труда, правилам выполнения работ на высоте, правилам оказания
              первой помощи, экологии, промышленной безопасности, электробезопасности, энергетической безопасности, ГО и ЧС,
              также предлагает индивидуальные курсы, которые могут быть специально разработаны для ваших уникальных
              потребностей.
              <br/><br/>
              Дистанционно и стенах “УЦРК” происходит повышение квалификации специалистов, задействованных во всех отраслях
              промышленности, в том числе и на особо опасных объектах. В нашем центре проводится обучение более, чем по 100
              программам профессионального обучения по рабочим профессиям.

              Учебный центр развития квалификации – надежный партнер для Вашего бизнеса. Мы сотрудничаем с крупными
              компаниями, как «Лукойл», АО «ЦНИТИ «Техномаш», АО “Концерн ВКО «Алмаз-Антей» и готовы предложить
              индивидуальный подход к каждому клиенту, учитывая особенности его деятельности.
              </p>
            </section>
          </div>
          <h3 className='slider-logo'>Наши партнеры 2022-2023</h3>
          <SliderPartner />
        </div>
    );
};

export default Company;