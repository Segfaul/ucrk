import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const UslugiData = [
  { path: 'uchebni-center', title: 'Учебный центр', 
  },
  { path: 'autsorsing-po-ohrane-truda', title: 'Аутсорсинг по охране труда', 
    subtitle: `Курс "Земляные работы" охватывает основы выполнения земельных работ, включая техники безопасного проведения 
    земельных операций, использование специализированной техники, а также управление рисками и соблюдение экологических норм при 
    взаимодействии с земельной поверхностью.`, 
    imageUrl: 'zemlyanye-raboty/logo.webp', 
    subdirections: [
      { 
        title: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов', 
        subtitle: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов',
        period: '40', whom: 'Специалисты', link:'',
        price: '3 500 ₽',
        imageUrl: 'zemlyanye-raboty/card-standart.webp',
        description: `Курс "Правила проведения земляных работ, установки временных ограждений, размещения временных объектов" 
        предоставляет участникам необходимые знания и навыки для безопасного и эффективного выполнения земляных работ, установки 
        временных ограждений и размещения временных объектов на строительных площадках.`,
        points: [
          {title: "Основы земляных работ и их классификация."},
          {title: "Технические аспекты планирования и подготовки земельных участков."},
          {title: "Применение специализированной техники и оборудования."},
          {title: "Защитные меры при работе на грунте и вблизи глубоких котлованов."},
        ],
        study_plan: ''
      },
    ]
  },
  { path: 'povyshenie-kvalifikaczii', title: 'Повышение квалификации', 
    subtitle: `Курс "Земляные работы" охватывает основы выполнения земельных работ, включая техники безопасного проведения 
    земельных операций, использование специализированной техники, а также управление рисками и соблюдение экологических норм при 
    взаимодействии с земельной поверхностью.`, 
    imageUrl: 'zemlyanye-raboty/logo.webp', 
    subdirections: [
      { 
        title: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов', 
        subtitle: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов',
        period: '40', whom: 'Специалисты', link:'',
        price: '3 500 ₽',
        imageUrl: 'zemlyanye-raboty/card-standart.webp',
        description: `Курс "Правила проведения земляных работ, установки временных ограждений, размещения временных объектов" 
        предоставляет участникам необходимые знания и навыки для безопасного и эффективного выполнения земляных работ, установки 
        временных ограждений и размещения временных объектов на строительных площадках.`,
        points: [
          {title: "Основы земляных работ и их классификация."},
          {title: "Технические аспекты планирования и подготовки земельных участков."},
          {title: "Применение специализированной техники и оборудования."},
          {title: "Защитные меры при работе на грунте и вблизи глубоких котлованов."},
        ],
        study_plan: ''
      },
    ]
  },
  { path: 'sout', title: 'СОУТ', 
    subtitle: `Курс "Земляные работы" охватывает основы выполнения земельных работ, включая техники безопасного проведения 
    земельных операций, использование специализированной техники, а также управление рисками и соблюдение экологических норм при 
    взаимодействии с земельной поверхностью.`, 
    imageUrl: 'zemlyanye-raboty/logo.webp', 
    subdirections: [
      { 
        title: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов', 
        subtitle: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов',
        period: '40', whom: 'Специалисты', link:'',
        price: '3 500 ₽',
        imageUrl: 'zemlyanye-raboty/card-standart.webp',
        description: `Курс "Правила проведения земляных работ, установки временных ограждений, размещения временных объектов" 
        предоставляет участникам необходимые знания и навыки для безопасного и эффективного выполнения земляных работ, установки 
        временных ограждений и размещения временных объектов на строительных площадках.`,
        points: [
          {title: "Основы земляных работ и их классификация."},
          {title: "Технические аспекты планирования и подготовки земельных участков."},
          {title: "Применение специализированной техники и оборудования."},
          {title: "Защитные меры при работе на грунте и вблизи глубоких котлованов."},
        ],
        study_plan: ''
      },
    ]
  },
  { path: 'liczenzirovanie', title: 'Лицензирование', 
    subtitle: `Курс "Земляные работы" охватывает основы выполнения земельных работ, включая техники безопасного проведения 
    земельных операций, использование специализированной техники, а также управление рисками и соблюдение экологических норм при 
    взаимодействии с земельной поверхностью.`, 
    imageUrl: 'zemlyanye-raboty/logo.webp', 
    subdirections: [
      { 
        title: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов', 
        subtitle: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов',
        period: '40', whom: 'Специалисты', link:'',
        price: '3 500 ₽',
        imageUrl: 'zemlyanye-raboty/card-standart.webp',
        description: `Курс "Правила проведения земляных работ, установки временных ограждений, размещения временных объектов" 
        предоставляет участникам необходимые знания и навыки для безопасного и эффективного выполнения земляных работ, установки 
        временных ограждений и размещения временных объектов на строительных площадках.`,
        points: [
          {title: "Основы земляных работ и их классификация."},
          {title: "Технические аспекты планирования и подготовки земельных участков."},
          {title: "Применение специализированной техники и оборудования."},
          {title: "Защитные меры при работе на грунте и вблизи глубоких котлованов."},
        ],
        study_plan: ''
      },
    ]
  },
  { path: 'sertifikacziya', title: 'Сертификация', 
    subtitle: `Курс "Земляные работы" охватывает основы выполнения земельных работ, включая техники безопасного проведения 
    земельных операций, использование специализированной техники, а также управление рисками и соблюдение экологических норм при 
    взаимодействии с земельной поверхностью.`, 
    imageUrl: 'zemlyanye-raboty/logo.webp', 
    subdirections: [
      { 
        title: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов', 
        subtitle: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов',
        period: '40', whom: 'Специалисты', link:'',
        price: '3 500 ₽',
        imageUrl: 'zemlyanye-raboty/card-standart.webp',
        description: `Курс "Правила проведения земляных работ, установки временных ограждений, размещения временных объектов" 
        предоставляет участникам необходимые знания и навыки для безопасного и эффективного выполнения земляных работ, установки 
        временных ограждений и размещения временных объектов на строительных площадках.`,
        points: [
          {title: "Основы земляных работ и их классификация."},
          {title: "Технические аспекты планирования и подготовки земельных участков."},
          {title: "Применение специализированной техники и оборудования."},
          {title: "Защитные меры при работе на грунте и вблизи глубоких котлованов."},
        ],
        study_plan: ''
      },
    ]
  },
  { path: 'vstuplenie-v-sro', title: 'Вступление в СРО', 
    subtitle: `Курс "Земляные работы" охватывает основы выполнения земельных работ, включая техники безопасного проведения 
    земельных операций, использование специализированной техники, а также управление рисками и соблюдение экологических норм при 
    взаимодействии с земельной поверхностью.`, 
    imageUrl: 'zemlyanye-raboty/logo.webp', 
    subdirections: [
      { 
        title: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов', 
        subtitle: 'Правила проведения земляных работ, установки временных ограждений, размещения временных объектов',
        period: '40', whom: 'Специалисты', link:'',
        price: '3 500 ₽',
        imageUrl: 'zemlyanye-raboty/card-standart.webp',
        description: `Курс "Правила проведения земляных работ, установки временных ограждений, размещения временных объектов" 
        предоставляет участникам необходимые знания и навыки для безопасного и эффективного выполнения земляных работ, установки 
        временных ограждений и размещения временных объектов на строительных площадках.`,
        points: [
          {title: "Основы земляных работ и их классификация."},
          {title: "Технические аспекты планирования и подготовки земельных участков."},
          {title: "Применение специализированной техники и оборудования."},
          {title: "Защитные меры при работе на грунте и вблизи глубоких котлованов."},
        ],
        study_plan: ''
      },
    ]
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
                    <Link to={`${(usluga.subtitle ? '':'/') + usluga.path}`}>
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