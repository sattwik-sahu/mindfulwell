import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

// Get all the questions
export const getAllQuestions = () => {
  // Get a reference to the `questions` collection
  const colRef = collection(firestore, "questions");
  // Run the query to fetch all `questions`
  const query = getDocs(colRef);
  //   query.then((snapshot) =>
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     })
  //   );

  // Return the query
  return query;
};
