import { useEffect } from "react";

function useLoadScripts() {
  useEffect(() => {
    const duetEsmSrc =
      "https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.3.0/dist/duet/duet.esm.js";
    const duetSrc =
      "https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.3.0/dist/duet/duet.js";

    const duetEsm = document.createElement("script");
    const duet = document.createElement("script");

    const getDuetEsmScript = document.querySelector(
      `script[src="${duetEsmSrc}"]`
    );
    const getDuetScript = document.querySelector(`script[src="${duetSrc}"]`);

    if (!getDuetEsmScript && !getDuetScript) {
      duetEsm.src = duetEsmSrc;
      duetEsm.async = true;
      duetEsm.type = "module";

      duet.src = duetSrc;
      duet.async = true;
      duet.noModule = true;

      document.body.appendChild(duetEsm);
      document.body.appendChild(duet);
    }

    return () => {
      document.body.removeChild(duetEsm);
      document.body.removeChild(duet);
    };
  }, []);
}

export default useLoadScripts;
