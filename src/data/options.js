import { collection, getDocs , query, where} from "firebase/firestore";
import { firestore } from "./firebase";

export const getAllOptions = () => {
  
  const colRef = collection(firestore, "options");

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