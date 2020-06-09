
import Head from 'next/head';
import Header from '../components/Header';
import MicroFrontEndAppDiv from '../components/MicroFrontEndAppDiv';
import useInitMF from '../helpers/useInitMF';


const LayoutPage = ({ mfAppHost, mfAppSrc, mfId, children }) => {
  useInitMF(mfAppHost, mfAppSrc);

  return (
    <>
      <Head>
        <link rel="preload" href={mfAppHost + mfAppSrc}
          as="script" />
        <link rel="preconnect" href={mfAppHost} />
        <link rel="dns-prefetch" href={mfAppHost} />
      </Head>
      <div>
        <Header />
        <div className="container">
          {children}
          <MicroFrontEndAppDiv id={mfId} />
        </div>
      </div>
      <style jsx global>{`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            margin: 0;
            padding: 0;
          }
          body,
          h1, h2, h3, h4, h5, h6,
          div, span, p{
            font-family: 'Helvetica', sans-serif !important;
          }
          hr {
            width: 100%;
          }
          
          .container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            margin-top: 50px;
          }
        `}</style>
    </>
  );
}

export default LayoutPage;
