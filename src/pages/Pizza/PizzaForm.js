import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createpizzaApi, getPizzaApi, updatePizzaApi } from "../../api";
import ErrorMessage from "../../components/ErrorMessage"

const PizzaForm = () => {
  const { id } = useParams();
  // const [ingredientsList, setIngredientsList] = useState([]);
  const [pizzaItem, setPizzaItem] = useState({ name: '', price: '' })
  // const [pizzaIngredients, setPizzaIngredients] = useState({})
  const [message, setMessage] = useState('');
  const title = typeof id !== 'undefined' ? 'Edit this pizza' : 'Create a new pizza'
  const actionText = typeof id !== 'undefined' ? 'Update' : 'Create pizza'

  const getData = async () => {
    let data = await getPizzaApi(id)
    setPizzaItem(data)
  }

  useEffect(() => {
    if(typeof id !== 'undefined'){
      getData()
    }
  }, [id])

  const updatePizza = (update) => {
    setPizzaItem(pizzaItem => ({
      ...pizzaItem,
      ...update,
    }))
  }
  
  // const addIngredient = (update) => {
  //   console.log(update);
  // }

  const createPizza = async (event) => {
    event.preventDefault()
    if(typeof id === 'undefined') {
      let res = await createpizzaApi(pizzaItem)
      res.status === 'success' ? setMessage('Your pizza was created') : setMessage('You can\'t create that')   
    } else {
      let res = await updatePizzaApi(id, pizzaItem)
      res.status === 'success' ? setMessage('Pizza updated') : setMessage('You can\'t touch this')   
    }
  }

  return (
    <div className="container">
      <div className="pizza-form">
        <Link to={'/'}><i className="fas fa-arrow-left"></i> Go back</Link>
        <h2 className="text-center">{title}</h2>
        { message.length !== 0 && <ErrorMessage message={message}/> }
        <div className="card">
          <form onSubmit={createPizza}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                name="name" 
                type="text" 
                placeholder='Awesome Pizza'
                className="form-control" 
                value={pizzaItem.name} 
                onChange={e => updatePizza({name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input 
                name="price" 
                type="number" 
                placeholder='0' 
                className="form-control" 
                value={pizzaItem.price} 
                onChange={e => updatePizza({price: e.target.value})}
                required
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              {ingredientsList.map((item, index) => {
                return (
                  <label key={index}>
                    <input type="checkbox" id={item.name} value={item.id} onChange={e => addIngredient(item.name) }/>{item.name} - {item.cost}
                  </label>
                )
              })}
            </div> */}
            {/* <Link to={'/ingredients'} className="button">New ingredients</Link> */}

            <button type="submit" className="button button--primary">{actionText}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PizzaForm