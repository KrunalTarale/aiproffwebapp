// import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Foot/Foot";
import "./Assisment.css";
import { Link } from 'react-router-dom';

const Assisment = () => {
  return (
    <>
      <Navbar />

      <div className="allCards">


        <div className="card">
          <div className="img"></div>
          <span>About Me</span>
          <p className="info">
            I’m Walter, a multidisciplinary designer who focuses on telling my
            clients’ stories visually, through enjoyable and meaningful
            experiences. I specialize in responsive websites and functional user
            interfaces.
          </p>
          <Link to={"/assessmentStarted/0"}><button>Start Assessment</button></Link>
        </div>
        <div className="card">
          <div className="img"></div>
          <span>About Me</span>
          <p className="info">
            I’m Walter, a multidisciplinary designer who focuses on telling my
            clients’ stories visually, through enjoyable and meaningful
            experiences. I specialize in responsive websites and functional user
            interfaces.
          </p>
          <Link to={"/assessmentStarted/1"}><button>Start Assessment</button></Link>
        </div>
        <div className="card">
          <div className="img"></div>
          <span>About Me</span>
          <p className="info">
            I’m Walter, a multidisciplinary designer who focuses on telling my
            clients’ stories visually, through enjoyable and meaningful
            experiences. I specialize in responsive websites and functional user
            interfaces.
          </p>
          <Link to={"/assessmentStarted/2"}><button>Start Assessment</button></Link>
        </div>


      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Assisment;
