import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getIngredientsApi } from '../../api'

const IngredientIndex = () => {
  const [ingredients, setIngredients] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    getIngredients()
  }, [])

  let getIngredients = async () => {
    let data = await getIngredientsApi()
    setIngredients(data)
    setIsloading(false)
  }

  console.log(ingredients)

  return (
    <div className='container'>
      <Link to={'/'}><i className='fas fa-arrow-left'></i> Back to pizzas</Link>
      <h2>Ingredients List</h2>
      <div>
        {isLoading ? <p>Getting ingredients from kitchen...</p> :
          <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
          </ul>
        }
        </div>
    </div>
  )
}

export default IngredientIndex