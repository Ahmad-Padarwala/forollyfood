import React, { useState } from 'react';
import '../CSS/Contact.css';
import axios from 'axios';

export default function ContactPage() {

  //ADD CONTACT DATA
  const [addContact, setAddContact] = useState({
    name: '',
    password: '',
    email: '',
    subject: '',
    message: ''
  })
  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setAddContact((prevContData) => ({
      ...prevContData,
      [name]: value
    }));
  }
  const saveContactData = (e) => {
    e.preventDefault();

    //NAME VALIDATION
    if (addContact.name === "") {
      document.getElementById("nameErr").innerHTML = "**Please fill the first name";
      return false;
    }
    if ((addContact.name.length < 3) && (addContact.name.length < 20)) {
      document.getElementById("nameErr").innerHTML = "**name length is must between 3 and 20";
      return false;
    }
    if (!isNaN(addContact.name)) {
      document.getElementById("nameErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("nameErr").innerHTML = "";

    //PASSWORD VALIDATION
    if (addContact.password === "") {
      document.getElementById("passErr").innerHTML = "**Please enter a Password";
      return false;
    }
    if (addContact.password.length < 6) {
      document.getElementById("passErr").innerHTML = "**Password should be atleast 6 character long";
      return false;
    }
    document.getElementById("passErr").innerHTML = "";

    //EMAIL VALIDATION
    let regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    if (addContact.email === "") {
      document.getElementById("emailErr").innerHTML = "**Please enter an e-mail address.";
      return false;
    }
    if (!regEmail.test(addContact.email)) {
      document.getElementById("emailErr").innerHTML = "**Please enter a valid e-mail address.";
      return false;
    }
    document.getElementById("emailErr").innerHTML = "";

    //SUBJECT VALIDATION
    if (addContact.subject === "") {
      document.getElementById("subjectErr").innerHTML = "**Please fill the Subject";
      return false;
    }
    if (addContact.subject.length < 3) {
      document.getElementById("subjectErr").innerHTML = "**Subject length is must greater then 3";
      return false;
    }
    if (!isNaN(addContact.subject)) {
      document.getElementById("subjectErr").innerHTML = "**do not allow number";
      return false;
    }
    document.getElementById("subjectErr").innerHTML = "";

    //MESSAGE VALIDATION
    if (addContact.message === "") {
      document.getElementById("messageErr").innerHTML = "**Please fill the Message";
      return false;
    }
    if (addContact.message.length < 3) {
      document.getElementById("messageErr").innerHTML = "**Subject length is must greater then 3";
      return false;
    }
    if (!isNaN(addContact.message)) {
      document.getElementById("messageErr").innerHTML = "**do not allow number in Message";
      return false;
    }
    document.getElementById("messageErr").innerHTML = "";
  

    axios.post('/contact', addContact)
      .then(() => {
        window.alert("Your Information is Successfully Submitted");
        const form = e.target;
        form.reset();
      })
      .catch((error) => {
        alert("Enter All Details");
        console.log('Error adding brand data in Product.js:', error);
      });
  }

  return (
    <>
      <div className="container-fluid contact-bg">
        <div className="container">
          <div className="row text-center contact-main">
            <p className='cont-head'>Have any Queries? Let us know.We will clear <span> it for you </span> at the best.</p>
            <p className='cont-para mt-5'>Forolly Food Products Pvt. Ltd. is a Leading Manufacturer in The field Of
              Toffees and Candies.  We are always work to Spread Happiness to the Customers By Proving Best Quality
              and Unforgottable Taste as Well.We always Like Your Feedback and always Ready to answer your Inquiry.
              Please Do Contact us on The Given Contact Detail or Please Fill The Form Below to Submit your Message
              to Us.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid cont-form">
        <div className="row text-white">
          <div className="col-lg-4 cont-info-main p-4">
            <p className='cont-info-head ps-4'>Contact Information</p>
            <div className='d-flex mt-5'>
              <div>
                <p className='con-loc-icon'><i className="fa-sharp fa-solid fa-location-dot"></i></p>
              </div>
              <div className='ps-4'>
                <p className='cont-loc-head'>Location</p>
                <p className='cont-loc-para'>Survey No. 646, Plot No. 3, 4, 5, Ahmedabad palanpur Highway, Village-Majadar, Ta-vadgam,
                  Dist-Banaskantha, Gujarat-385210, India.
                </p>
              </div>
            </div>

            <div className='d-flex mt-5'>
              <div>
                <p className='con-loc-icon'><i className="fa-solid fa-phone"></i></p>
              </div>
              <div className='ps-4'>
                <p className='cont-loc-head'>Contact Number</p>
                <p className='cont-loc-para'>+91 95102 70600</p>
              </div>
            </div>

            <div className='d-flex mt-5'>
              <div>
                <p className='con-loc-icon'><i className="fa-solid fa-envelope-open-text"></i></p>
              </div>
              <div className='ps-4'>
                <p className='cont-loc-head'>Email Address</p>
                <p className='cont-loc-para'>support@forollyfood.com</p>
              </div>
            </div>

            <div className='text-center mt-4'>
              <p className='follow-text'>FOLLOW US</p>
              <div className='cont-icons'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter ms-3"></i>
                <i className="fa-brands fa-linkedin-in ms-3"></i>
                <i className="fa-brands fa-instagram ms-3"></i>
                <i className="fa-brands fa-google-plus-g ms-3"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-8 text-dark p-4">
            <form method='post' onSubmit={saveContactData}>
              <div className="row">
                <div className="col-md-6 col-12">
                  <label htmlFor="exampleInputPassword1" className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="First Name" name="name" onChange={handleContactChange} />
                  <span style={{ color: "red", fontWeight: "bold" }} id="nameErr"></span>
                </div>
                <div className="col-md-6 co-12">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleContactChange} />
                  <span style={{ color: "red", fontWeight: "bold" }} id="passErr"></span>
                </div>
              </div>

              <div className='mt-3'>
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="text" className="form-control" placeholder="Email Address" name="email" onChange={handleContactChange} />
                <span style={{ color: "red", fontWeight: "bold" }} id="emailErr"></span>
              </div>

              <div className='mt-3'>
                <label htmlFor="exampleInputPassword1" className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" name="subject" onChange={handleContactChange} />
                <span style={{ color: "red", fontWeight: "bold" }} id="subjectErr"></span>
              </div>

              <div className="mt-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                <textarea name='message' className="form-control contact-textarea" id="exampleFormControlTextarea1" rows="4" placeholder='Your Message' onChange={handleContactChange}></textarea>
                <span style={{ color: "red", fontWeight: "bold" }} id="messageErr"></span>
              </div>
              <button type="submit" className="form-button mt-4">SUBMIT</button>
            </form>
          </div>
        </div>
      </div >

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.3880099113603!2d72.39168737522068!3d24.052637078465356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf3a590d21f47%3A0x9840fbef2ef6f97c!2sForolly!5e0!3m2!1sen!2sin!4v1683550783325!5m2!1sen!2sin"
          width="99.99%" height="450" allowFullScreen="" loading="lazy" title='map'
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
