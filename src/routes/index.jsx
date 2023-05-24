import * as React from "react";
import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/firebase";

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(`Detected sign in from ${user?.displayName}`);
      if (user) {
        navigate("/questions");
      }
    });
  }, []);

  return (
    <div className="Home">
      <section className="tagline">
        “Awaken your potential with MindfulWell, your mindful mental health
        partner.”
      </section>
      <section className="btn_main">
        <button
          onClick={() => {
            navigate("/auth");
          }}
        >
          <span>Get Started</span>
          <i>
            <FaArrowRight size={24} />
          </i>
        </button>
      </section>
    </div>
  );
};

export default Home;
