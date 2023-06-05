import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deletePizzaApi, getPizzasApi } from "../../api";
import ErrorMessage from "../../components/ErrorMessage"

const PizzaIndex = () => {
    const [pizzas, setPizzas] = useState([])
    const [message, setMessage] = useState('')
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        getPizzas()
    }, [])

    let getPizzas = async () => {
        let data = await getPizzasApi()
        setPizzas(data)
        setIsloading(false)
    }

    const handleDelete = async (id) => {
        let res = await deletePizzaApi(id)
        res.status === 'success' ? setMessage('Pizza deleted') : setMessage('Something went wrong')
        getPizzas()
    }

    return (
    <div className="container">
        <div className="pizzas">
            <div className="pizzas-header">
                <div>
                    <h2 className="pizzas-title">&#127829; Pizzas</h2>
                    <p className="pizzas-count">The menu includes {pizzas.length} pizza(s):</p>
                </div>
                <Link to={'/pizza/new'} className="button button--primary">New pizza <i className="fas fa-plus"></i></Link>
            </div>
            { message.length !== 0 && <ErrorMessage message={message}/ }
            <div className="pizzas-list">
                { isLoading ? <p className="text-center">Getting pizzas...</p> :
                    <ul className="ul-reset">
                        {pizzas.map((pizza, index) => (
                            <li key={index} className="pizza-item card">
                                <h3>{pizza.name}</h3>
                                <p>Price: <b>{pizza.price}</b></p>
                                <div className="actions">
                                    <Link to={`/pizza/${pizza.id}/edit`} className="button">Edit</Link>
                                    <button type="button" className="button button--danger" onClick={e => handleDelete(pizza.id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                }
            </div>
            {/* Ingredients */}
            <Link to={'/ingredients'} className="button button--secondary">See ingredients</Link>
        </div>
    </div>
    )
}

export default PizzaIndex
