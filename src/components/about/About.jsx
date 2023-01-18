import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import Me from "../../assets/profile.jpg";

const About = () => {
  return (
    <section className="about">
      <main className="container">
        <h1>About Us</h1>

        <article>
          <h4>E Store India</h4>
          <p>
            We are E Store India. The place most cheapest price of groceries on
            the entire earth.
          </p>
          <p>
            Explore the various types of groceries & many more. Click below to
            see all items.
          </p>

          <Link to="/e-store-react">
            <RiFindReplaceLine />
          </Link>
        </article>
      </main>
      <div>
        <h2>Founder</h2>
        <article>
          <div>
            <img src={Me} alt="me" />
            <h3>Pankaj Yadav</h3>
          </div>
          <p>
            I am Pankaj Yadav, the founder of E Store India. Affilited to
            Thousand Thoughts...
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
