import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FeedbackForm />
    </>
  );
}

export default App;
