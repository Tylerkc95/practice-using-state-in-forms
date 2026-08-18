import { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event
    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update only the field that matches the input's name
    }));
  };

  return (
    <>
      <fieldset>
        <h1>User Form</h1>
        <div className="label-text-pair">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </div>

        <br></br>
        <div className="label-text-pair">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>

        <br></br>
        <div className="label-text-pair">
          <label>Feedback: </label>
          <textarea
            rows="5"
            cols="30"
            maxlength="200"
            name="feedbackText"
            value={formData.feedbackText}
            onChange={handleChange}
          ></textarea>
        </div>

        <br></br>
        <input type="submit" value="Submit"></input>
      </fieldset>
      <fieldset>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback Text: {formData.feedbackText}</p>
        <p>Feedback Text Length: {formData.feedbackText.length}</p>
      </fieldset>
    </>
  );
};

export default FeedbackForm;
