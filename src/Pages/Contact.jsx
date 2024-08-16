import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../Styles/Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xqazezep"); // Use the form ID provided by Formspree

  return (
    <div className='contact-page'>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <h2>My Information</h2>
          <p>Email: scorpioncobrastudio@gmail.com</p>
          <p>Phone: +972515400522</p>
          <p>Country: Israel</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Employer Details & Job Description</h2>

          <label htmlFor="name">
            Name:
            <input id="name" type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
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
              required
            />
            <ValidationError prefix="Duration" field="duration" errors={state.errors} />
          </label>

          <label htmlFor="employerCountry">
            Country of Employer:
            <input id="employerCountry" type="text" name="employerCountry" required />
            <ValidationError prefix="Country of Employer" field="employerCountry" errors={state.errors} />
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
