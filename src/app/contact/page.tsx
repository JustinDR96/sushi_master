import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />

        <input type="submit" value="Submit" className="input" />
      </form>
    </div>
  );
}
