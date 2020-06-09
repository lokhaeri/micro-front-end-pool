import * as React from 'react';
import { useTranslation } from 'react-i18next';

import ImgGreenCube from './ImgGreenCube';

export const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div><ImgGreenCube /></div>
      <h1>{t('title1')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
