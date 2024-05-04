import { CloudTermsProvider, type Terms } from "@cloudterms/react";
import { useEffect, useState } from "react";
import { useUser } from "./use-user";
import { Coffee } from "./coffee";

const API_BASE_URL = "http://localhost:3002";

function App() {
  const { userId } = useUser();
  const [terms, setTerms] = useState<Terms>();
  const [hasAgreed, setHasAgreed] = useState<boolean>(true);

  /*
   * Fetch terms and user agreement status from the API.
   */
  useEffect(() => {
    fetch(`${API_BASE_URL}/terms`)
      .then((res) => res.json())
      .then((data) => setTerms(data.terms));

    fetch(`${API_BASE_URL}/user/${userId}/has-agreed`)
      .then((res) => res.json())
      .then((data) => setHasAgreed(data.hasAgreed));
  }, [userId]);

  /*
   * Update the user agreement status when the user agrees.
   */
  const onAgree = () => {
    fetch(`${API_BASE_URL}/user/${userId}/agree`, { method: "POST" }).then(() =>
      setHasAgreed(true)
    );
  };

  return (
    <div>
      {/* Wrap your app with the CloudTermsProvider */}
      <CloudTermsProvider
        userId={userId}
        terms={terms}
        hasAgreed={hasAgreed}
        onAgree={onAgree}
      >
        <div className="container">
          <h1 style={{ fontSize: "54px" }}>
            <span style={{ fontWeight: "lighter" }}>Cloud</span>
            <b style={{ color: "#7C3AED" }}>Terms</b>
          </h1>
          <Coffee />
        </div>
      </CloudTermsProvider>
    </div>
  );
}

export default App;
