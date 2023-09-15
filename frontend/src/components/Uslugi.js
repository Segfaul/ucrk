import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';


const FRowTable = ({table, className=''}) => {
  return (
    <div className={`uslugi-table ${className}`}>
      <h3>{table.title}</h3>
      <div className='uslugi-table-elements'>
        {table.elements.map((element) => (
          <div className='uslug-table-element'>
            <img src={require('../assets/uslugi/' + element.imageUrl)} alt='pic'></img>
            <h5>{element.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const TRowTable = ({table, className=''}) => {
  return (
    <div className={`uslugi-list uslugi-table ${className}`}>
      <h3>{table.title}</h3>
      <div className='uslugi-list-elements uslugi-table-elements'>
        {table.elements.map((element) => (
          <div className='uslug-list-element uslug-table-element'>
            <img src={require('../assets/uslugi/' + element.imageUrl)} alt='pic'></img>
            <h5>{element.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cards = ({cards, className=''}) => {

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

  return  (
    <section className={`uchebni-direction-cards ${className}`}>
      {cards.map((subdirection) => (
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
  );
};

const Points = ({points, className=''}) => {
  return (
    <div className={`points ${className}`}>
      <h3 className='uchebni-welcome-options-title'>{points.title}</h3>
      <h5 className='uchebni-welcome-options-description'>{points.description}</h5>
      <ul className={`uchebni-welcome-options`}>
        { points.elements.map((point) => (
            <li className='uchebni-welcome-option'>
              <img src={require('../assets/' + point.imageUrl)} alt="learning"/>
              <span>{point.title}</span>
            </li>
        ))}
      </ul>
    </div>
  );
};

const UslugiData = [
  { path: 'uchebni-center', title: 'Учебный центр', 
  },
  { path: 'autsorsing-po-ohrane-truda', title: 'Аутсорсинг по охране труда', 
    imageUrl: 'logo.webp', 
    elements: [
      <p>Предлагаем услуги по реализации всех функций специалиста ОТ на предприятиях со штатной численностью до 
      50 работников, независимо от вида деятельности, и отдельные организационно-методические мероприятия, предусмотренные СУОТ.</p>,
      <FRowTable 
        table={
          { 
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
        }
      />,
      <p>Для расчета ориентировочной договорной стоимости аутсорсинга используются примерные цены, учитывающие численность 
      штата и характер деятельности компании.</p>,
      <TRowTable 
        table={
          { 
            title: `Какие работы выполняют наши специалисты`, 
            elements: [
              {
                title: `Внедрение или аудит действующей СУОТ на вашем предприятии`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Разработку, актуализацию и ведение нормативной документации`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Оценку условий труда и профессиональных рисков`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Подготовку и согласование предложений по снижению рисков на РМ`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Анализ выполнения запланированных мероприятий ОТ и ТБ`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Консультирование руководства по требованиям законодательства`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Обучение и проверку знаний персонала, в т. ч. по оказанию первой помощи`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Проведение инструктажей по охране труда и правилам ТБ`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Планирование и проведение производственного контроля`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Информирование работников о рисках и способах их снижения`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Решение вопросов по организации медицинского осмотра и обеспечению СИЗ`,
                imageUrl: `right-arrow.png`,
              },
              {
                title: `Формирование документов статистической отчетности и взаимодействие с контролирующими органами`,
                imageUrl: `right-arrow.png`,
              },
            ], 
          }
        }
      />,
      <Points className='uslugi-points'
        points={
          {
            title:`Порядок предоставления услуг ООО «УЦРК»`,
            description: `Специалисты приступают к реализации перечисленных
            функций после заключения договора, который содержит:`,
            elements: [
              { title: `Обязательства и ответственность сторон`, imageUrl:`uslugi/sertifikacziya.png`},
              { title: `Перечень работ и регламент их выполнения`, imageUrl:`uslugi/sertifikacziya.png`},
              { title: `Цены на услуги и порядок расчетов`, imageUrl:`uslugi/sertifikacziya.png`},
            ]
          }
        }
      />,
    ],
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
  
    return (
      <div className='direction'>
        <div className='uchebni-header uchebni-direction-header' style={{ backgroundImage: `url(${require('../assets/uslugi/' + direction.imageUrl)})`}}>
          <div className='uchebni-header-content uchebni-direction-header-content'>
            <h2>{direction.title}</h2>
          </div>
        </div>
        <div className='page-content'>
          <section className='uslugi-welcome uchebni-welcome'>
            { direction.elements && direction.elements.map((element) => (
              (element)
            )
            )}
          </section>
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