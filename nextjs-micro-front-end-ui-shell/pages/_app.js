// import App from 'next/app'
import { useEffect } from 'react';
import { Suspense } from 'react';
import { getLangFromCookie } from '../helpers/detectLanguage';
import i18next from 'i18next';
import '../i18n';

const isSSR = typeof window === 'undefined';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		i18next.changeLanguage(getLangFromCookie());
	}, [])
	if (isSSR) {
		return <></>
	}
	return (
		<Suspense fallback={() => 'Loading..'}>
			<Component {...pageProps} />
		</Suspense>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
