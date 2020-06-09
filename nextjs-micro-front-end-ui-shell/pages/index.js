import LayoutWithMicroFrontEnd from '../components/LayoutWithMicroFrontEnd';
import { useTranslation } from "react-i18next";

const mfAppHost = "http://localhost:5001/";
const mfAppSrc = "index.js";


const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <LayoutWithMicroFrontEnd
      mfAppHost={mfAppHost}
      mfAppSrc={mfAppSrc}
      mfId="root"
    >
      <h1>{t('welcome')}</h1>
    </LayoutWithMicroFrontEnd>
  );
}

export default IndexPage;
