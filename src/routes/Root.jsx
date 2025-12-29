import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { app } from '../utils/firebaseConfig';//import firebase configuration
import { getFirestore, collection, getDocs, } from 'firebase/firestore'
import { setRecipes } from '../features/recipeSlice';
import { useDispatch } from 'react-redux';
import Spinner from '../components/Card/Spinner';

//Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function Root() {

  let dispatch = useDispatch();
  let [loading, setLoading] = useState(false);

  // Recipes from firbase firestore

  const getData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      let recipes = querySnapshot.docs.map((doc) => ({
        uniqueId: doc.id,//the unique ID Firestore generated for this document ie one object.here Creates a new property called uniqueId in our object
        ...doc.data()//It copies all the fields from the document into the object ie includes the uniqueId key value pair with other data, so that we can use this unique id while deleting updating and all
      }));

      dispatch(setRecipes(recipes));

    } catch (error) {
      console.error(`Error occured : ${error.message}`);
      setShowError(true);
    } finally { setLoading(false) }

  }
  //Call getData() on first render
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {loading && <Spinner loading={loading} />}
    </>

  )
}

export default Root