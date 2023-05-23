import { useEffect, useState } from "react";

import "./App.css";
// import { getAllQuestions } from "./data/question";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./data/firebase";
import { getAllQuestions } from "./data/question";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // const colRef = collection(firestore, "questions");
    // const query = getDocs(colRef);
    // query.then((snapshot) => {
    // setQuestions([]);
    getAllQuestions().then((snapshot) => {
      setQuestions(
        snapshot.docs.map((doc)  => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      This is the <code>App</code> component
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <b>{question.problem}</b> {question.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
