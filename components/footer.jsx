import React from "react";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_o7uzdyc",
      "template_c7rimxr",
      e.target,
      "H5ZV072qSD42G4Tny"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Form submitted successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to submit form. Please try again.");
      }
    );
  e.target.reset();
};

const Footer = () => {
  return (
    <footer>
      <div className="f-item-con">
        <div className="app-info">
          <span className="app-name">
            <span className="app-initial">Ke</span>jani
          </span>
          <p>
            We provide you with <strong>your Dream</strong> home{" "}
            <strong>including all budgets</strong> of Houses available.
          </p>
        </div>
        <div className="useful-links">
          <div className="footer-title">Useful Links</div>
          <ul>
            <li>Rentals</li>
            <li>On Sale</li>
            <li>About Us</li>
            <li>Become an Affiliate</li>
            <li>Advertise with Us</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="help-sec">
          <div className="footer-title">Help</div>
          <ul>
            <li>Help Me</li>
            <li>Feedback</li>
            <li>Report a Issue / Bug</li>
          </ul>
        </div>
        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>
          <form
            action="/"
            method="post"
            className="space-y-2"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="g-name"
              className="g-inp"
              id="g-name"
              placeholder="Name"
              style={{ backgroundColor: "white", color: "#174149" }}
            />
            <input
              type="email"
              name="g-email"
              className="g-inp"
              id="g-email"
              placeholder="Email"
              style={{ backgroundColor: "white", color: "#174149" }}
            />
            <textarea
              type="text"
              name="g-msg"
              className="g-inp h-40 resize-none"
              id="g-msg"
              placeholder="Message..."
              style={{ backgroundColor: "white", color: "#174149" }}
            ></textarea>
            <button type="submit" className="f-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="cr-con">
        Copyright &copy; 2024 | Made by Script.Inc <br /> Grace Nalley{" "}
      </div>
    </footer>
  );
};

export default Footer;
