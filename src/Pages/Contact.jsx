import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../Styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_FORM_ID); // Use the form ID provided by Formspree from .env

  return (
    <div className='contact-page'>
    <div className="contact-container">
      <div className="contact-info-container">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>Email: scorpioncobrastudio@gmail.com</p>
          <p>Phone: +972515400522</p>
          <p>Country: Israel</p>
        </div>
        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.youtube.com/@scorpioncobrastudio" target="_blank" rel="noopener noreferrer" className="youtube-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <hr className='custom-line' />
      <form onSubmit={handleSubmit}>
        <h2>Employer Details & Job Description</h2>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>

        <label htmlFor="employerCountry">
          Country of Employer:
          <input id="employerCountry" type="text" name="employerCountry" required />
          <ValidationError prefix="Country of Employer" field="employerCountry" errors={state.errors} />
        </label>

        <label htmlFor="employerPhone">
          Employer Phone:
          <input id="employerPhone" type="number" name="employerPhone" placeholder="optional"  />
          <ValidationError prefix="Phone of Employer" field="employerPhone" errors={state.errors} />
        </label>
        <p>if international dialing code is different than employer country, please add that to phone or details sections</p>

        <label htmlFor="employerEmail">
          Employer Email:
          <input id="employerEmail" type="email" name="employerEmail" required />
          <ValidationError prefix="Employer Email" field="employerEmail" errors={state.errors} />
        </label>

        <label htmlFor="role">
          Role:
          <select id="role" name="role" required>
            <option value="">Select a role</option>
            <option value="gameWriter">Game Writer</option>
            <option value="narrativeDesigner">Narrative Designer</option>
            <option value="gameDesigner">Game Designer</option>
            <option value="levelDesigner">Level Designer</option>
            <option value="screenWriter">Screen Writer</option>
          </select>
          <ValidationError prefix="Role" field="role" errors={state.errors} />
        </label>

        <label htmlFor="jobType">
          Job Type:
          <select id="jobType" name="jobType" required>
            <option value="">Select job type</option>
            <option value="remote">Remote</option>
            <option value="onSite">On Site</option>
          </select>
          <ValidationError prefix="Job Type" field="jobType" errors={state.errors} />
        </label>

        <label htmlFor="employmentType">
          Type of Employment:
          <select id="employmentType" name="employmentType" required>
            <option value="">Select employment type</option>
            <option value="fullTime">Full Time</option>
            <option value="contract">Contract</option>
          </select>
          <ValidationError prefix="Type of Employment" field="employmentType" errors={state.errors} />
        </label>

        <label htmlFor="duration">
          Duration:
          <input
            id="duration"
            type="text"
            name="duration"
            placeholder="e.g 1 year (contract only)"
          />
          <ValidationError prefix="Duration" field="duration" errors={state.errors} />
        </label>

        <label htmlFor="extraDetails">
          Extra Details:
          <textarea id="extraDetails" name="extraDetails"></textarea>
          <ValidationError prefix="Extra Details" field="extraDetails" errors={state.errors} />
        </label>

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>

        {state.succeeded && <p className="success-message">Thanks for contacting me! I will get back to you soon.</p>}
      </form>
    </div>
  </div>
  );
}

export default Contact;