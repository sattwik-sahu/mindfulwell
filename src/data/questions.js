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
//   function flattenQuery() {
//     const query = [];
//   // Create an empty array
// //const queries = [];
// // Add queries to the array using push()
//  queries.push(q_DEP);
//  queries.push(q_ANX);
//  queries.push(q_STR);
//  queries.push(q_SLP);
//  const flattenedQuery = [].concat(...query);

//  const flattenedArray = flattenQuery();

//  console.log(flattenedArray);
// }
};
// Alternatively, you can directly assign the queries to the array
// const queries = ["Query 1", "Query 2", "Query 3", "Query 4"



  //const query = getDocs(colRef);
  //   query.then((snapshot) =>
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     })
  //   );

  // Return the query

