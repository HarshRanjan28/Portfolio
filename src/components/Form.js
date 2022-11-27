import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
