import { collection, getDocs , query, where} from "firebase/firestore";
import { firestore } from "./firebase";

// Get all the questions
export const getAllSymptoms = (problem) => {
  // Get a reference to the `questions` collection
  const colRef = collection(firestore, "symptoms");

  // Run the query to fetch symptoms of particular problem
  const q = query(colRef,where("problem","==",problem)) 
  //const query = getDocs(colRef);
  //   query.then((snapshot) =>
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     })
  //   );

  // Return the query
  return q;

};

const test = () => {
  const query1 = getAllSymptoms("ANX")
      query1.then((snapshot) =>
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      }))
}
test()