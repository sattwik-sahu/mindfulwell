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
  const rand_elements= [];
         onSnapshot(q_DEP,(snapshot) => {
         snapshot.docs.forEach(() => {
        rand_elements.push({...doc.data(),id : doc.id})
      })
    })
     
  function pickRandomElements(arr, n) {
    var shuffled = arr.slice();
    var i = arr.length;
    var min = i - n ;
    var temp;
    var index;
  
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
  
    return shuffled.slice(min);
  }
  const rand=pickRandomElements(rand_elements,5);
  return rand;
};

  //const query = getDocs(colRef);
  //   query.then((snapshot) =>
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     })
  //   );

  // Return the query

