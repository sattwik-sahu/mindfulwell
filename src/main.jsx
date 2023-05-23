import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { getAllSymptoms } from "./data/symptoms.js";
import { onSnapshot } from "firebase/firestore";
import { getAllQuestions } from "./data/questions.js";
import { getAllExercises } from "./data/exercises.js";
import { getAllOptions } from "./data/options.js";

const query = getAllOptions();
onSnapshot(query, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log({ id: doc.id, ...doc.data() });
  });
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
