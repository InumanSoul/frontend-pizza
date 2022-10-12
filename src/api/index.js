import { url } from '../config/config';

export let getPizzasApi = async () => {
  try {
    let response = await fetch(`${url.apiUrl}/rest-pizza/`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export const getPizzaApi = async (id) => {
  try {
    let response = await fetch(`${url.apiUrl}/rest-pizza/get?id=${id}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export const updatePizzaApi = async (id, pizza) => {
  try {
    let response = await fetch(`${url.apiUrl}/rest-pizza/put?id=${id}&name=${pizza.name}&price=${pizza.price}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export const getIngredientsApi = async () => {
  try {
    let response = await fetch(`${url.apiUrl}/rest-ingredient/`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export const createpizzaApi = async (pizza) => {
  try {
    let response = await fetch(`${url.apiUrl}/rest-pizza/post?name=${pizza.name}&price=${pizza.price}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export const deletePizzaApi = async (id) => {
  try {
    let response = await fetch(`${url.apiUrl}/rest-pizza/delete?id=${id}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}