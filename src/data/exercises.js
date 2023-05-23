import { collection, getDocs , query, where} from "firebase/firestore";
import { firestore } from "./firebase";
const prob_int = [];
// Get all the questions
export const getAllExercises = (prob_int) => {
  // Get a reference to the `questions` collection
  const colRef = collection(firestore, "exercises");

  // Run the query to fetch exercises of particular problem
  const q1 = query(colRef,where("prob_int","array-contains-any",prob_int)) 
  //const query = getDocs(colRef);
  //   query.then((snapshot) =>
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     })
  //   );

  // Return the query
  return q1;

};

// const test = () => {
//   const query1 = getAllSymptoms("ANX")
//       query1.then((snapshot) =>
//       snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//       }))
// }
// test()