
import Head from 'next/head';
import Header from '../components/Header';


const LayoutPage = ({ children }) => {

  return (
    <>
      <Head>
        <title>LayoutPage</title>
      </Head>
      <div>
        <Header />
        <div className="container">
          {children}
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
            text-align: left;
            margin-top: 50px;
            padding:0 16px 16px 16px;
          }
        `}</style>
    </>
  );
}

export default LayoutPage;
