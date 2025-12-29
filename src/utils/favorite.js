import FileSaver, { saveAs } from 'file-saver';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { app } from './firebaseConfig';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function favorite(savedRecipes, currentUser) {

   console.log('I am called');
   if (!currentUser?.id) return;
   try {
      let user = doc(db, 'users', currentUser?.id);
      let favRecipeIds = (savedRecipes || []).map((recipe) => recipe.uniqueId);//for safety make an empty array to loop through if savedRecipe is not there. instead of looping through undefined
      await updateDoc(user, { favoriteRecipes: favRecipeIds });
   } catch (error) {
      console.log(error.message);
   }

}

export async function fetchUserfavorites(id) {

   const docRef = doc(db, 'users', id); //create a refernce of document we want to get
   const getSnap = await getDoc(docRef);
   return getSnap.data().favoriteRecipes || [];

}
