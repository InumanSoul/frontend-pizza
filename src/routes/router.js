import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PizzaIndex from "../pages/Pizza/PizzaIndex";
import PizzaForm from "../pages/Pizza/PizzaForm";
import IngredientForm from "../pages/Ingredients/IngredientForm";
import IngredientIndex from "../pages/Ingredients/IngredientIndex";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PizzaIndex/>}/>
      <Route path="pizza/new" element={<PizzaForm/>}/>
      <Route path="pizza/:id/edit" element={<PizzaForm/>}/>
      <Route path="ingredients" element={<IngredientIndex/>}/>
      <Route path="ingredients/new" element={<IngredientForm/>}/>
    </>
  )
)

export default router