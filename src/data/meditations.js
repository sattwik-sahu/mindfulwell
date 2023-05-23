import { collection, getDocs , query, where} from "firebase/firestore";
import { firestore } from "./firebase";
const prob_int = [] ;
// Get all the questions
export const getAllMeditations = (prob_int) => {
  // Get a reference to the `questions` collection
  const colRef = collection(firestore, "meditations");

  // Run the query to fetch symptoms of particular problem
  const q = query(colRef,where("prob_int","array-contains-any",prob_int)) 
  //const query = getDocs(colRef);
  //const rand []
  //   query.then((snapshot) =>
  //     snapshot.docs.forEach(() => {
  //       console.log(doc.data());
  //     })
  //   );

  // Return the query
  return q;

};

// const test = () => {
//   const query1 = getAllSymptoms("ANX")
//       query1.then((snapshot) =>
//       snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//       }))
// }
// test()