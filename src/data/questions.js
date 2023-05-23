import { collection, getDocs , query, where} from "firebase/firestore";
import { firestore } from "./firebase";

// Get all the questions
export const getAllQuestions = () => {
  // Get a reference to the `questions` collection
  const colRef = collection(firestore, "questions");

  // Run the query to fetch questions of particular problem
  const q_DEP = query(colRef,where("problem","==","DEP")) 
  const q_ANX = query(colRef,where("problem","==","ANX"))
  const q_SLP = query(colRef,where("problem","==","SLP"))
  const q_STR = query(colRef,where("problem","==","STR"))

  const randomElements = []
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * q_ANX.length);
    const element = q_ANX.splice(randomIndex, 1)[0];
    
    randomElements.push(element);
  }
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * q_DEP.length);
    const element = q_DEP.splice(randomIndex, 1)[0];
    randomElements.push(element);
  }
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * q_SLP.length);
    const element = q_SLP.splice(randomIndex, 1)[0];
    randomElements.push(element);
  }
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * q_STR.length);
    const element = q_STR.splice(randomIndex, 1)[0];
    randomElements.push(element);
  }
  return randomElements;

  //const query = getDocs(colRef);
  //   query.then((snapshot) =>
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     })
  //   );

  // Return the query

};