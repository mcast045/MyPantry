import React, { useRef, useEffect } from 'react'
import './MyIngredients.css'
import { upperCaseIngredient } from '../../Helpers/Helper'
import axios from 'axios'
import dataFile from '../../data/findByIngredients.txt'

const MyIngredients = ({ recipes, selectedIngredients, setRecipes, setShowMyIngredients }) => {

    //Auto scroll to bottom of div 
    const myref = useRef()
    useEffect(() => {
        myref.current.scrollTop = myref.current.scrollHeight
    }, [selectedIngredients])

    const getRecipes = async () => {
        if (recipes.length === 0) {
            // const API_KEY = process.env.REACT_APP_Recipes
            // const getRecipesURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${selectedIngredients.map(ingredient => '+' + ingredient)}&number=2&ignorePantry=false`
            // const res = await axios.get(getRecipesURL)
            // setRecipes(res.data)

            const res = await axios.get(dataFile)
            setRecipes(res.data)
            setShowMyIngredients(false)
        }
    }

    return (
        <div className='myIngredients-container' ref={myref}>
            <h3 className='myIngredients-container_title'>My Pantry</h3>
            <div className='underline'></div>
            <div className='myIngredients-container_total'>Total Items: {selectedIngredients.length}</div>
            <div className='flex'>
                <button className='myIngredients-container_btn cursor btnHover' onClick={() => getRecipes()}>Get Recipes</button>
                <button className='myIngredients-container_btn cursor btnHover' onClick={() => setShowMyIngredients(false)}>Hide Pantry</button>
            </div>
            {selectedIngredients.length > 0 && selectedIngredients.map((selectedIngredients, i) => (
                <div key={i} className='myIngredients'>
                    {upperCaseIngredient(selectedIngredients)}
                </div>
            ))}
        </div>
    );
}

export default MyIngredients;