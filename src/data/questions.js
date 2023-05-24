import { collection, getDocs , query, where,onSnapshot} from "firebase/firestore";
import { firestore } from "./firebase";

// Get all the questions
export const getAllQuestions = () => {
  // Get a reference to the `questions` collection
  const colRef = collection(firestore, "questions");

  // Run the query to fetch questions of particular problem
  const q_DEP = query(colRef,where("problem","==","DEP")) ;
  const q_ANX = query(colRef,where("problem","==","ANX"));
  const q_SLP = query(colRef,where("problem","==","SLP"));
  const q_STR = query(colRef,where("problem","==","STR"));
return q_ANX;
};


