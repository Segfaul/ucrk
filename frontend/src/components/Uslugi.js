import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const UslugiData = [
  { path: 'uchebni-center', title: 'Учебный центр', 
  },
  { path: 'autsorsing-po-ohrane-truda', title: 'Аутсорсинг по охране труда', 
    imageUrl: 'autsorsing-po-ohrane-truda/logo.webp', 
    subtext: `Предлагаем услуги по реализации всех функций специалиста ОТ на предприятиях со штатной численностью до 
    50 работников, независимо от вида деятельности, и отдельные организационно-методические мероприятия, предусмотренные СУОТ.`, 
    subtable1: { 
      title: `Преимущества аутсорсинга по охране труда`, 
      elements: [
        {
          title: `Отсутствие необходимости введения в штат узкопрофильного специалиста по ОТ или возложения его обязанностей на руководителя.`,
          imageUrl: `right-arrow.png`,
        },
        {
          title: `Непрерывность деятельности по реализации мероприятий ОТ: аутсорсинговая компания обеспечивает замену временно отсутствующего специалиста по причине болезни или отпуска.`,
          imageUrl: `right-arrow.png`,
        },
        {
          title: `Экономия затрат, связанных с оплатой труда, отчислениями в пенсионный фонд, социальными выплатами и периодическим повышением квалификации в образовательной организации.`,
          imageUrl: `right-arrow.png`,
        },
        {
          title: `Профессиональный подход к решению вопросов охраны труда: консультирование руководства по изменениям законодательства и улучшению условий труда.`,
          imageUrl: `right-arrow.png`,
        },
        {
          title: `Сопровождение проверок Минтруда с целью недопущения штрафных санкций.`,
          imageUrl: `right-arrow.png`,
        },
      ], 
    }
  },
  { path: 'povyshenie-kvalifikaczii', title: 'Повышение квалификации', 
    imageUrl: 'autsorsing-po-ohrane-truda/logo.webp', 
  },
  { path: 'sout', title: 'СОУТ', 
    imageUrl: 'autsorsing-po-ohrane-truda/logo.webp', 
  },
  { path: 'liczenzirovanie', title: 'Лицензирование', 
    imageUrl: 'autsorsing-po-ohrane-truda/logo.webp', 
  },
  { path: 'sertifikacziya', title: 'Сертификация', 
    imageUrl: 'autsorsing-po-ohrane-truda/logo.webp', 
  },
  { path: 'vstuplenie-v-sro', title: 'Вступление в СРО', 
    imageUrl: 'autsorsing-po-ohrane-truda/logo.webp', 
    subtable4: {}
  },
];

const Data = [
  {
    responsibilityLevel: 'До 25 млн руб.',
    damageCompensation: '50 000 руб.',
    contractualObligations: '150 000 руб.'
  },
  {
    responsibilityLevel: 'До 50 млн руб.',
    damageCompensation: '150 000 руб.',
    contractualObligations: '350 000 руб.'
  },
  {
    responsibilityLevel: 'До 300 млн руб.',
    damageCompensation: '500 000 руб.',
    contractualObligations: '2 500 000 руб.'
  },
  {
    responsibilityLevel: 'Более 300 млн руб.',
    damageCompensation: '1 000 000 руб.',
    contractualObligations: '3 500 000 руб.'
  }
];
  
const truncateWithEllipsis = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }

    return text.substring(0, maxLength) + '...';
};
  
const UslugiPage = ({ direction }) => {
  
    useEffect(() => {
      document.title = `${direction.title} | Услуги | УЦРК`;
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
        <div className='uchebni-header uchebni-direction-header' style={{ backgroundImage: `url(${require('../assets/uslugi/' + direction.imageUrl)})`}}>
          <div className='uchebni-header-content uchebni-direction-header-content'>
            <h2>{direction.title}</h2>
          </div>
        </div>
        <div className='page-content'>
          <section className='uchebni-welcome'>
            <p>{direction.subtext}</p>
            {direction.subtable1 && (
              <div className='uslugi-table'>
                <h3>{direction.subtable1.title}</h3>
                <div className='uslugi-table-elements'>
                  {direction.subtable1.elements.map((element) => (
                    <div className='uslug-table-element'>
                      <img src={require('../assets/uslugi/' + element.imageUrl)} alt='pic'></img>
                      <h5>{element.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
          { direction.subtable4 && (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th rowSpan="2">Уровень ответственности (максимальная сумма договора)</th>
                    <th colSpan="2">Взносы в компенсационные фонды</th>
                  </tr>
                  <tr>
                    <th>возмещения вреда</th>
                    <th>договорных обязательств</th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.responsibilityLevel}</td>
                      <td>{item.damageCompensation}</td>
                      <td>{item.contractualObligations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          { direction.subdirection && (
            <section className="uchebni-direction-cards">
            {direction.subdirections.map((subdirection) => (
              <div
                className="uchebni-direction-card"
                onClick={() => openPopup(subdirection)}
              >
                <img src={require('../assets/uchebni_center/' + subdirection.imageUrl)} alt='pic' />
                <h3>{truncateWithEllipsis(subdirection.title, 30)}</h3>
                <h4>{subdirection.price}</h4>
                <button className="more-button">Подробнее</button>
              </div>
            ))}
  
            {showPopup && (
              <div className="uchebni-direction-card-popup" onClick={handleDocumentClick}>
                <div className="uchebni-direction-card-popup-content" ref={popupRef}>
                  <div className='uchebni-direction-card-popup-content-header'>
                    <img className='uchebni-direction-card-popup-content-header-pic' src={require('../assets/uchebni_center/' + selectedDirection.imageUrl)} alt='pic' />
                    <div className='uchebni-direction-card-popup-content-header-description'>
                      <h3>{selectedDirection.subtitle}</h3>
                      <h4>{selectedDirection.price}</h4>
                      <a href='https://api.whatsapp.com/send?phone=79154309295' className="transparent-button">Пройти обучение</a>
                      <div className='uchebni-direction-card-popup-content-header-params'>
                        <div>
                          <img src={require('../assets/uchebni_center/time.png')} alt='pic' />
                          <h5>{selectedDirection.period} ч.</h5>
                        </div>
                        <div>
                          <img src={require('../assets/uchebni_center/zemlyanye-raboty.png')} alt='pic' />
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
                        {selectedDirection.study_plan && (
                          <li className='study-plan'>
                            <a href={require('../assets/uchebni_center/' + selectedDirection.study_plan)} title='Учебный план (pdf)' target='_blank' rel="noopener noreferrer">
                              Читать план обучения...
                            </a>
                          </li>
                        )}
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
          ) }
        </div>
      </div>
    );
}

const Uslugi = () => {
    useEffect(() => {
        document.title = 'Услуги | УЦРК';
    }, []);

    return (
        <div className='uslugi'>
          <div className='uchebni-header uchebni-direction-header' style={{ backgroundImage: `url(${require('../assets/uslugi/logo.webp')})`}}>
            <div className='uchebni-header-content uchebni-direction-header-content'>
              <h2>Услуги</h2>
            </div>
          </div>
          <div className='page-content'>
            <section className='uchebni-programs'>
              <h3>Предоставляемые услуги</h3>
              <ul className='uchebni-program-list'>
                {UslugiData.map((usluga) => (
                  <li className='uchebni-program' key={usluga.path}>
                    <Link to={`${(usluga.imageUrl ? '':'/') + usluga.path}`}>
                      <img src={require('../assets/uslugi/' + usluga.path + '.png')} alt='pic' />
                      <h4>{usluga.title}</h4>
                      <button className="more-button">Подробнее</button>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
    );
};

export default Uslugi;
export { UslugiData, UslugiPage };