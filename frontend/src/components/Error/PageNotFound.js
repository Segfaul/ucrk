import React, { useEffect } from 'react';

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Страница не найдена | УЦРК';
  }, []);

  return (
    <div className='error'>
      <h1>Ошибка 404: Страница не найдена</h1>
      <p>К сожалению, запрошенная вами страница не существует.</p>
    </div>
  );
};

export default PageNotFound;