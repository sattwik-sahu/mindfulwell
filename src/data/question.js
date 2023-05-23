import { firestore } from "./firebase";

const colRef = collection(firestore , 'questions')
getDocs(colRef)
    .then((snapshot) => {
        let questions = []
        snapshot.docs.forEach((doc) => {
            questions.push({ ...doc.data(), id: doc.id })
        })
        console.log(questions)
    })