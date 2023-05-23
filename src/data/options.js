import { collection, getDocs , query, where} from "firebase/firestore";
import { firestore } from "./firebase";

// Get all the questions
export const getAllOptions = () => {
  // Get a reference to the `questions` collection
  const colRef = collection(firestore, "options");

  // Run the query to fetch symptoms of particular problem

  const query = getDocs(colRef);
    query.then((snapshot) =>
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      })
    );

  // Return the query
return query;

};

// const test = () => {
//   const query1 = getAllSymptoms("ANX")
//       query1.then((snapshot) =>
//       snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//       }))
// }
// test()