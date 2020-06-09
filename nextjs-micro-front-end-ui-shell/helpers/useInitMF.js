import { useEffect } from 'react';

export default function useInitMF(mfAppHost, mfAppSrc) {
  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement("script");
      script.src = mfAppHost + mfAppSrc;
      script.async = true;
      script.id = "app1_script_1";
      document.body.appendChild(script);
    }, 120);

    return (() => {
      const elem = document.querySelector("#app1_script_1");
      elem.parentNode.removeChild(elem);
    });
  }, []);
  return null;
}