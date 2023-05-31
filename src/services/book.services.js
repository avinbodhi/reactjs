import { db } from "../firebase-config";
import { collection ,
    getDocs, 
    getDoc, 
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    docs 
}
     from "firebase/firestore";


const BookCollectionRef = collection(db,"books");

class BookDataService{
    addBooks = (newBook)=>{
        return addDoc(BookCollectionRef,newBook);
    };

    updateBooks = (id, updatedBook)=>{
        const bookDoc = doc(db,"books",id);
        return updateDoc(bookDoc,updatedBook)


    };

    deleteBook = (id)=>{
        const bookDoc = doc(db,"books",id);
        return deleteDoc(bookDoc);


    };

    getAllBooks=()=>{
        return getDocs(BookCollectionRef);
    }

    getBook = (id)=>{
        const bookDoc =  doc(db,"books",id);
        return getDoc(bookDoc);
    }
}

export default new BookDataService();

