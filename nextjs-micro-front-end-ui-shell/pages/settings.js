import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import ImgGreyTriangle from '../components/imgs/ImgGreyTriangle';

import setLangCookie from '../helpers/setLanguageCookie';


const SettingsPage = () => {
	const { t } = useTranslation();
	const handleLanguageChange = (lang) => {
		i18next.changeLanguage(lang);
		setLangCookie(lang);
	}

	return (
		<Layout>
			<h1><ImgGreyTriangle /> {t('menu.settings')}</h1>
			<h2>{t('settings.choose_language')}</h2>
			<div style={styles.buttonContainer}>
				<div style={styles.btn} onClick={() => handleLanguageChange('en')}>English</div>
				<div style={styles.btn} onClick={() => handleLanguageChange('de')}>German</div>
			</div>
		</Layout>
	);
}

export default SettingsPage;


const styles = {
	buttonContainer: { width: '240px' },
	btn: {
		width: '200px',
		padding: '8px',
		border: '2px solid #aa00aa',
		background: '#fefefe',
		cursor: 'pointer',
		textAlign: 'center',
		margin: '8px'
	}
}