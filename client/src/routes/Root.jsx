import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { setRecipes } from '../features/recipeSlice';
import { useDispatch } from 'react-redux';
import Spinner from '../components/Card/Spinner';
import { getRecipes } from '../services/recipeServices';


function Root() {

  let dispatch = useDispatch();
  let [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {

      //from mongodb

      let response = await getRecipes();
      if (response.status === 200) {
        console.log("Recipes array:", response.data.recipes);
        dispatch(setRecipes(response.data.recipes));
      }

    } catch (error) {
      console.error(`Error occured : ${error.message}`);
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