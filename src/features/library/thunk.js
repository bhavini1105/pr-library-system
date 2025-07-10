import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export const fetchBooks = createAsyncThunk("library/fetchBooks", async () => {
  const querySnapshot = await getDocs(collection(db, "books"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const addBook = createAsyncThunk("library/addBook", async (book) => {
  const docRef = await addDoc(collection(db, "books"), book);
  return { id: docRef.id, ...book };
});

export const deleteBook = createAsyncThunk("library/deleteBook", async (id) => {
  await deleteDoc(doc(db, "books", id));
  return id;
});
