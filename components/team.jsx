import React from "react";

const Team = () => {
  return (
    <>
      <h1 className="heading">Our Team</h1>
      <div className="card__collection clear-fix">
        <div className="cards cards--two">
          <img
            src="https://i.pinimg.com/236x/d7/49/d4/d749d42b7adc424908768638bd56de74.jpg"
            className="img-responsive"
            alt="Cards Image"
          />
          <span className="cards--two__rect"></span>
          <span className="cards--two__tri"></span>
          <p>Lucy Grace</p>
          <ul className="cards__list">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
        <div className="cards cards--three">
          <img
            src="https://i.pinimg.com/236x/83/59/7f/83597fdbab25f1b5cfbc8c3ebcc608d4.jpg"
            className="img-responsive"
            alt=""
          />
          <span className="cards--three__rect-1">
            <span className="shadow-1"></span>
            <p>Mary Levnon</p>
          </span>
          <span className="cards--three__rect-2">
            <span className="shadow-2"></span>
          </span>
          <span className="cards--three__circle"></span>
          <ul className="cards--three__list">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
        <div className="cards cards--three">
          <img
            src="https://i.pinimg.com/236x/39/53/ec/3953ec4ed91b10fdf16387fb17a18e66.jpg"
            className="img-responsive"
            alt=""
          />
          <span className="cards--three__rect-1">
            <span className="shadow-1"></span>
            <p>Chris Levnon</p>
          </span>
          <span className="cards--three__rect-2">
            <span className="shadow-2"></span>
          </span>
          <span className="cards--three__circle"></span>
          <ul className="cards--three__list">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Team;
