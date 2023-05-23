import * as React from "react";
import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <section className="tagline">
        “Awaken your potential with MindfulWell, your mindful mental health
        partner.”
      </section>
      <section className="get_started">
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
