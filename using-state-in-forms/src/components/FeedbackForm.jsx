import { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackText: "",
  });

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <>
      <fieldset>
        <h1>User Form</h1>
        <label>Name: </label>
        <input
          type="text"
          name={name}
          value={formData.name}
          onChange={handleChange}
        ></input>

        <br></br>
        <label>Email: </label>
        <input
          type="email"
          name={email}
          value={formData.email}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Feedback: </label>
        <textarea
          rows="5"
          cols="30"
          maxLength="200"
          name={feedbackText}
          value={formData.feedbackText}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Submit"></input>
      </fieldset>
      <p>Name: {formData.name}</p>
      <p>Email: {email}</p>
      <p>Feedback Text: {feedbackText}</p>
      <p>Feedback Text Length: {feedbackText.length}</p>
    </>
  );
};

export default FeedbackForm;
