import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { getAllSymptoms } from "./data/symptoms.js";
import { onSnapshot } from "firebase/firestore";

const query = getAllSymptoms("DEP");
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
