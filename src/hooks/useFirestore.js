import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore/lite";
import { useState } from "react";
import { db, auth } from "../firebase/firebase";
import { nanoid } from "nanoid";

export const useFirestore = () => {
  const [data, setData] = useState([]);  
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState({});  

  // Obtener los datos (prendas) de Firestore
  const getData = async () => {
    try {
      setLoading((prev) => ({ ...prev, getData: true }));
      const dataRef = collection(db, "prendas");  
      const q = query(dataRef, where("uid", "==", auth.currentUser.uid));  
      const querySnapshot = await getDocs(q);
      const dataDB = querySnapshot.docs.map((doc) => doc.data());  
      setData(dataDB); 
    } catch (error) {
      console.log(error);
      setError(error.message);  
    } finally {
      setLoading((prev) => ({ ...prev, getData: false }));
    }
  };

  const addData = async ({ prenda, urlReferencia }) => {
    console.log ("addData: ", prenda,urlReferencia)
    try {
      setLoading((prev) => ({ ...prev, addData: true }));
      const newDoc = {
        enabled: true,  
        nanoid: nanoid(6),  
        prenda: prenda, 
        urlReferencia: urlReferencia, 
        uid: auth.currentUser.uid, 
      };

      const docRef = doc(db, "prendas", newDoc.nanoid); 
      await setDoc(docRef, newDoc); 
      setData([...data, newDoc]);
    } catch (error) {
      console.log(error);
      setError(error.message); 
    } finally {
      setLoading((prev) => ({ ...prev, addData: false }));
    }
  };

  const deleteData = async (nanoid) => {
    try {
      setLoading((prev) => ({ ...prev, [nanoid]: true }));
      const docRef = doc(db, "prendas", nanoid); 
      await deleteDoc(docRef); 
      setData(data.filter((item) => item.nanoid !== nanoid));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, [nanoid]: false }));
    }
  };

  const updateData = async (nanoid, updatedPrenda) => {
    try {
      setLoading((prev) => ({ ...prev, updateData: true }));
      const docRef = doc(db, "prendas", nanoid);
      await updateDoc(docRef, updatedPrenda);
      setData(
        data.map((item) =>
          item.nanoid === nanoid ? { ...item, ...updatedPrenda } : item
        )
      );
    } catch (error) {
      console.log(error);
      setError(error.message); 
    } finally {
      setLoading((prev) => ({ ...prev, updateData: false }));
    }
  };


  const searchData = async (nanoid) => {
    try {
      const docRef = doc(db, "prendas", nanoid); 
      const docSnap = await getDoc(docRef); 
      return docSnap; 
    } catch (error) {
      console.log(error);
      setError(error.message); 
    }
  };

  return {
    data,
    error,
    loading,
    getData,
    addData,
    deleteData,
    updateData,
    searchData,
  };
};