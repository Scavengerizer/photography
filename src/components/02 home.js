import React from "react";
import img6 from "../assets/images/6.png";

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='home_contents row'>
          <div className='home_text col h-center'>
            <div className='home_title col'>
              <span>Simple</span>
              <span>and</span>
              <span>Unique</span>
            </div>
            <div className='home_hireme'>
              <a href='#' className='stylish'>
                Hire Us
              </a>
            </div>
          </div>
          <div className='home_pics'>
            <img src={img6} alt='' />
          </div>
        </div>
        <div className='home_message'>
          <p>
            We make photography look<br></br>
            effortless and stunning
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
