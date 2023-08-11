import React, { useState } from "react";
import "../CSS/Inquiry.css";
import axios from "axios";

export default function Inquiry() {
  const [inquiryData, setInquiryData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    number: "",
    address: "",
    country: "",
    state: "",
    city: "",
    inquiryType: "",
    message: "",
  });
  const handleInquiryChange = (event) => {
    const { name, value } = event.target;
    setInquiryData((prevInqData) => ({
      ...prevInqData,
      [name]: value,
    }));
  };
  const saveInquiryData = (e) => {
    e.preventDefault();

    // NAME VALIDATION
    if (inquiryData.name === "") {
      document.getElementById("nameErr").innerHTML =
        "**Please fill the first name";
      return false;
    }
    if (inquiryData.name.length < 3 && inquiryData.name.length < 20) {
      document.getElementById("nameErr").innerHTML =
        "**name length is must between 3 and 20";
      return false;
    }
    if (!isNaN(inquiryData.name)) {
      document.getElementById("nameErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("nameErr").innerHTML = "";

    //ROLE VALIDATION
    if (inquiryData.role === "") {
      document.getElementById("roleErr").innerHTML = "**Please Slect Your Role";
      return false;
    }
    document.getElementById("roleErr").innerHTML = "";

    //COOMPANY VALIDATION
    if (inquiryData.company === "") {
      document.getElementById("companyErr").innerHTML =
        "**Please fill the Company name";
      return false;
    }
    if (inquiryData.company.length < 3) {
      document.getElementById("companyErr").innerHTML =
        "**name length is Greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.company)) {
      document.getElementById("companyErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("companyErr").innerHTML = "";

    //EMAIL VALIDATION
    let regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    if (inquiryData.email === "") {
      document.getElementById("emailErr").innerHTML =
        "**Please enter an e-mail address.";
      return false;
    }
    if (!regEmail.test(inquiryData.email)) {
      document.getElementById("emailErr").innerHTML =
        "**Please enter a valid e-mail address.";
      return false;
    }
    document.getElementById("emailErr").innerHTML = "";

    // MOBILE NUMBER VALIDATION
    if (inquiryData.number === "") {
      document.getElementById("numberErr").innerHTML =
        "**Please fill the mobile no";
      return false;
    }
    if (isNaN(inquiryData.number)) {
      document.getElementById("numberErr").innerHTML =
        "**must write digits only";
      return false;
    }
    if (inquiryData.number.length !== 10) {
      document.getElementById("numberErr").innerHTML =
        "**must write 10 digits only";
      return false;
    }
    document.getElementById("numberErr").innerHTML = "";

    // ADDRESS VALIDATION
    if (inquiryData.address === "") {
      document.getElementById("addressErr").innerHTML =
        "**Please fill the address";
      return false;
    }
    if (inquiryData.address.length < 3) {
      document.getElementById("addressErr").innerHTML =
        "**address length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.address)) {
      document.getElementById("addressErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("addressErr").innerHTML = "";

    // COUNTRY VALIDATION
    if (inquiryData.country === "") {
      document.getElementById("countryErr").innerHTML =
        "**Please fill the country";
      return false;
    }
    if (inquiryData.country.length < 3) {
      document.getElementById("countryErr").innerHTML =
        "**country length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.country)) {
      document.getElementById("countryErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("countryErr").innerHTML = "";

    // STATE VALIDATION
    if (inquiryData.state === "") {
      document.getElementById("stateErr").innerHTML = "**Please fill the state";
      return false;
    }
    if (inquiryData.state.length < 3) {
      document.getElementById("stateErr").innerHTML =
        "**state length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.state)) {
      document.getElementById("stateErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("stateErr").innerHTML = "";

    // CITY VALIDATION
    if (inquiryData.city === "") {
      document.getElementById("cityErr").innerHTML = "**Please fill the city";
      return false;
    }
    if (inquiryData.city.length < 3) {
      document.getElementById("cityErr").innerHTML =
        "**city length is greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.city)) {
      document.getElementById("cityErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("cityErr").innerHTML = "";

    //INQUIRY TYPE VALIDATION
    if (inquiryData.inquiryType === "") {
      document.getElementById("inquiryTypeErr").innerHTML =
        "**Please Slect Your inquiryType";
      return false;
    }
    document.getElementById("inquiryTypeErr").innerHTML = "";

    //MESSAGE VALIDATION
    if (inquiryData.message === "") {
      document.getElementById("messageErr").innerHTML =
        "**Please fill the Message";
      return false;
    }
    if (inquiryData.message.length < 3) {
      document.getElementById("messageErr").innerHTML =
        "**Message length is must greater then 3";
      return false;
    }
    if (!isNaN(inquiryData.message)) {
      document.getElementById("messageErr").innerHTML =
        "**do not allow number in Message";
      return false;
    }
    document.getElementById("messageErr").innerHTML = "";

    axios
      .post("/inquiry", inquiryData)
      .then(() => {
        window.alert("Your Information is Successfully Submitted");
        const form = e.target;
        form.reset();
      })
      .catch((error) => {
        alert("Enter All Details");
        console.log("Error adding brand data in Product.js:", error);
      });
  };
  return (
    <>
      <div className="container-fluid inq-bg">
        <div className="container">
          <div className="row">
            <p className="inq-head">Welocome Dealer</p>
            <p className="inq-para">
              The mission of the ‘Forolly’ is to give youth candy recollections,
              for example, a way that it celebrates God and His arrangement for
              our lives. Our objective for each candy arrange is that it results
              in a “charmed client” who will tell their companions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row form-main">
          <form method="post" onSubmit={saveInquiryData}>
            <div className="form-outer">
              <span
                style={{ color: "red", fontWeight: "bold" }}
                id="nameErr"
              ></span>
              <input
                type="text"
                className="form-control mb-4"
                name="name"
                placeholder="Enter Name"
                onChange={handleInquiryChange}
              />
              <div className="row mb-4">
                <div className="col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
                  <select
                    defaultValue="1"
                    name="role"
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleInquiryChange}
                  >
                    <option value="">Who are you?</option>
                    <option value="Dealer/Distributor">
                      Dealer/Distributor
                    </option>
                    <option value="Customer">Customer</option>
                  </select>
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="roleErr"
                  ></span>
                </div>
                <div className="col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    name="company"
                    onChange={handleInquiryChange}
                  />
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="companyErr"
                  ></span>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleInquiryChange}
                  />
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="emailErr"
                  ></span>
                </div>
                <div className="col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="number"
                    onChange={handleInquiryChange}
                  />
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="numberErr"
                  ></span>
                </div>
              </div>
              <span
                style={{ color: "red", fontWeight: "bold" }}
                id="addressErr"
              ></span>
              <input
                type="text"
                className="form-control mb-4"
                placeholder="Enter Address"
                name="address"
                onChange={handleInquiryChange}
              />
              <div className="row mb-4">
                <div className="col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    onChange={handleInquiryChange}
                  />
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="countryErr"
                  ></span>
                </div>
                <div className="col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    name="state"
                    onChange={handleInquiryChange}
                  />
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="stateErr"
                  ></span>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                    onChange={handleInquiryChange}
                  />
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="cityErr"
                  ></span>
                </div>
                <div className="col-md-6 col-12">
                  <select
                    defaultValue="1"
                    name="inquiryType"
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleInquiryChange}
                  >
                    <option value="">Inquiry Tpye</option>
                    <option value="Customer Queries">Customer Queries</option>
                    <option value="Distributor Queries">
                      Distributor Queries
                    </option>
                  </select>
                  <span
                    style={{ color: "red", fontWeight: "bold" }}
                    id="inquiryTypeErr"
                  ></span>
                </div>
              </div>
              <span
                style={{ color: "red", fontWeight: "bold" }}
                id="messageErr"
              ></span>
              <input
                type="text"
                className="form-control mb-4"
                name="message"
                placeholder="Message"
                onChange={handleInquiryChange}
              />
              <button type="submit" className="form-button">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
