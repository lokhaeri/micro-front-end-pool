import * as React from 'react'
import ImgPurpleCircle from './ImgPurpleCircle'
import { useTranslation } from 'react-i18next'

export const App = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div>
        <ImgPurpleCircle />
      </div>
      <h1>{t('title1')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
