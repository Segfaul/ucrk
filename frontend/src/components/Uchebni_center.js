import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const directionsData = [
  { path: 'ohrana-truda', title: 'Охрана труда', 
    subtitle: `Курс по охране труда включает в себя обширный набор знаний, которые 
      помогут студентам и профессионалам эффективно управлять безопасностью и охраной труда в различных рабочих средах.`, 
    imageUrl: 'ohrana-tryda/e-learning-pic.jpg', 
    subdirections: [
      { 
        title: 'Оказание первой помощи', 
        period: '8', whom: 'Рабочие, руководители, и специалисты', link:'',
        price: '2 800 ₽',
        imageUrl: 'ohrana-tryda/learning-card.jpg',
        description: `Данный курс направлен на получение работниками знаний, 
        умений и навыков, позволяющих оказывать первую помощь до оказания медицинской помощи работникам при несчастных случаях 
        на производстве, травмах, отравлениях и других состояниях и заболеваниях, угрожающих их жизни и здоровью.`,
        points: [
          {title: "Организационно-правовые аспекты оказания первой помощи."},
          {title: "Оказание первой помощи при отсутствии сознания, остановке дыхания и кровообращения."},
          {title: "Оказание первой помощи при наружных кровотечениях и травмах."},
          {title: "Оказание первой помощи при прочих состояниях."},
        ]
      },
      { 
        title: 'Использование (применение) средств индивидуальной защиты (СИЗ)', 
        period: '8', whom: 'Рабочие, руководители, и специалисты', link:'',
        price: '2 800 ₽',
        imageUrl: 'ohrana-tryda/learning-card.jpg',
        description: `Это направление обучения ориентировано на то, чтобы обеспечить студентов знаниями, 
        необходимыми для обеспечения личной безопасности и здоровья в различных рабочих ситуациях. `,
        points: [
          {title: "Основы охраны труда в России в части обеспечения работников средствами индивидуальной защиты."},
          {title: "Риск‑ориентированный подход при определении достаточности объема выдаваемых СИЗ."},
          {title: "Технический регламент «О безопасности СИЗ». Основные требования к СИЗ."},
          {title: "Виды, назначение и правила пользования СИЗ в зависимости от отраслевой принадлежности."},
        ]
      },
      { 
        title: 'Общие вопросы охраны труда и функционирования системы управления охраной труда', 
        period: '8', whom: 'Рабочие, руководители, и специалисты', link:'',
        price: '2 800 ₽',
        imageUrl: 'ohrana-tryda/learning-card.jpg',
        description: `Данный курс направлен на получение работниками знаний, 
        умений и навыков, позволяющих оказывать первую помощь до оказания медицинской помощи работникам при несчастных случаях 
        на производстве, травмах, отравлениях и других состояниях и заболеваниях, угрожающих их жизни и здоровью.`,
        points: [
          {title: "Организационно-правовые аспекты оказания первой помощи."},
          {title: "Оказание первой помощи при отсутствии сознания, остановке дыхания и кровообращения."},
          {title: "Оказание первой помощи при наружных кровотечениях и травмах."},
          {title: "Оказание первой помощи при прочих состояниях."},
        ]
      },
      { 
        title: `Безопасные методы и приемы выполнения работ при воздействии вредных и (или) опасных производственных факторов, 
        источников опасности, идентифицированных в рамках специальной оценки условий труда и оценки профессиональных рисков`, 
        period: '8', whom: 'Рабочие, руководители, и специалисты', link:'',
        price: '2 800 ₽',
        imageUrl: 'ohrana-tryda/learning-card.jpg',
        description: `Данный курс направлен на получение работниками знаний, 
        умений и навыков, позволяющих оказывать первую помощь до оказания медицинской помощи работникам при несчастных случаях 
        на производстве, травмах, отравлениях и других состояниях и заболеваниях, угрожающих их жизни и здоровью.`,
        points: [
          {title: "Организационно-правовые аспекты оказания первой помощи."},
          {title: "Оказание первой помощи при отсутствии сознания, остановке дыхания и кровообращения."},
          {title: "Оказание первой помощи при наружных кровотечениях и травмах."},
          {title: "Оказание первой помощи при прочих состояниях."},
        ]
      },
      { 
        title: `Безопасные методы и приемы выполнения работ повышенной опасности, к которым предъявляются дополнительные требования 
        в соответствии с нормативными правовыми актами, содержащими государственные нормативные требования охраны труда`, 
        period: '8', whom: 'Рабочие, руководители, и специалисты', link:'',
        price: '2 800 ₽',
        imageUrl: 'ohrana-tryda/learning-card.jpg',
        description: `Данный курс направлен на получение работниками знаний, 
        умений и навыков, позволяющих оказывать первую помощь до оказания медицинской помощи работникам при несчастных случаях 
        на производстве, травмах, отравлениях и других состояниях и заболеваниях, угрожающих их жизни и здоровью.`,
        points: [
          {title: "Организационно-правовые аспекты оказания первой помощи."},
          {title: "Оказание первой помощи при отсутствии сознания, остановке дыхания и кровообращения."},
          {title: "Оказание первой помощи при наружных кровотечениях и травмах."},
          {title: "Оказание первой помощи при прочих состояниях."},
        ]
      },
    ]
  },
  { path: 'pozharnaya-bezopasnost', title: 'Пожарная безопасность' },
];

const DirectionPage = ({ direction }) => {

  useEffect(() => {
    document.title = `${direction.title} | Учебный центр | УЦРК`;
  }, []);
  
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState(null);

  const popupRef = useRef(null);

  const openPopup = (direction) => {
    setSelectedDirection(direction);
    setShowPopup(true);
  };

  const closePopup = () => {
    if (showPopup) {
      setSelectedDirection(null);
      setShowPopup(false);
    }
  };

  const handleDocumentClick = (event) => {
    if (showPopup && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  return (
    <div className='direction'>
      <div className='uchebni-direction-header' style={{ backgroundImage: `url(${require('../assets/uchebni_center/' + direction.imageUrl)})`}}>
        <div className='uchebni-direction-header-content'>
          <h2>{direction.title}</h2>
          <p>{direction.subtitle}</p>
        </div>
      </div>
      <div className='page-content'>
        <section className="uchebni-direction-cards">
          {direction.subdirections.map((subdirection) => (
            <div
              className="uchebni-direction-card"
              onClick={() => openPopup(subdirection)}
            >
              <img src={require('../assets/uchebni_center/' + subdirection.imageUrl)} alt='pic' />
              <h3>{subdirection.title}</h3>
              <h4>{subdirection.price}</h4>
              <button className="more-button">Подробнее</button>
            </div>
          ))}

          {showPopup && (
            <div className="uchebni-direction-card-popup" onClick={handleDocumentClick}>
              <div className="uchebni-direction-card-popup-content" ref={popupRef}>
                <div className='uchebni-direction-card-popup-content-header'>
                  <img src={require('../assets/uchebni_center/' + selectedDirection.imageUrl)} alt='pic' />
                  <div className='uchebni-direction-card-popup-content-header-description'>
                    <h3>{selectedDirection.title}</h3>
                    <h4>{selectedDirection.price}</h4>
                    <button className="training-button">Пройти обучение</button>
                    <div className='uchebni-direction-card-popup-content-header-params'>
                      <div>
                        <img src={require('../assets/uchebni_center/time.png')} alt='pic' />
                        <h5>{selectedDirection.period} ч.</h5>
                      </div>
                      <div>
                        <img src={require('../assets/uchebni_center/ground_works.png')} alt='pic' />
                        <h5>{selectedDirection.whom}</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='uchebni-direction-card-popup-content-description'>
                  <div className='uchebni-direction-card-popup-content-description-points'>
                    <h5>В рамках данной программы обучения специалист проходит все необходимые темы, такие как:</h5>
                    <ul>
                      {selectedDirection.points.map((point) => (
                        <li>{point.title}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='uchebni-direction-card-popup-content-description-postfix'>
                    <h5>{selectedDirection.description}</h5>
                    <h5 className='postfix-base'>
                      Для завершения обучения специалист проходит Итоговый тест. <br />
                      Чтобы успешно сдать тест, необходимо правильно ответить на 7 вопросов из 10. <br /> <br />
                      После успешного прохождения теста специалисту выдается протокол проверки знаний, а специалист заносится в реестр Минтруда.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

const UchebniCenter = () => {
    useEffect(() => {
        document.title = 'Учебный центр | УЦРК';
    }, []);

    return (
        <div>
          <h1>Страница Учебного центра</h1>
          <ul>
            {directionsData.map((direction) => (
              <li key={direction.path}>
                <Link to={`${direction.path}`}>{direction.title}</Link>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default UchebniCenter;
export { directionsData, DirectionPage };
