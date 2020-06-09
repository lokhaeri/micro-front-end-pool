import React from 'react';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

import ImgPurpleCircle from './imgs/ImgPurpleCircle';
import ImgGreenCube from './imgs/ImgGreenCube';
import ImgGreyTriangle from './imgs/ImgGreyTriangle';


export default function Header() {
  const { t } = useTranslation();

  return (
    <div style={styles.topHeader}>
      <div>
        <Link href="/">
          <a style={styles.a}>
            <ImgPurpleCircle />
            <span style={styles.a__label}>{t('menu.home')}</span>
          </a>
        </Link>

        <Link href="/about">
          <a style={styles.a}>
            <ImgGreenCube />
            <span style={styles.a__label}>{t('menu.about')}</span>
          </a>
        </Link>
        <Link href="/settings">
          <a style={styles.a}>
            <ImgGreyTriangle />
            <span style={styles.a__label}>{t('menu.settings')}</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

const styles = {
  a: {
    marginRight: 10,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontWeight: '400',
    textTransform: 'uppercase'

  },
  a__label: {
    paddingLeft: '8px'
  },
  topHeader: {
    display: 'flex',
    height: '24px',
    padding: '24px',
    backgroundColor: '#fefefe',
    boxShadow: '2px 3px 25px -12px rgba(0,0,0,0.75)',
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '16px'

  }
}
