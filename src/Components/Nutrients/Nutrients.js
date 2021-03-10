import React, { useEffect, useState } from 'react'
import './Nutrients.css'
import axios from 'axios'
import Nutrient from './Nutrient/Nutrient'
import NutrientsList from '../../data/nutrients.txt'

const Nutrients = ({ currentRecipeId }) => {

    const [nutrients, setNutrients] = useState({})

    // useEffect(() => {
    //     const API_KEY = process.env.REACT_APP_Recipes
    //     const getRecipesURL = `https://api.spoonacular.com/recipes/${currentRecipeId}/nutritionWidget.json?apiKey=${API_KEY}`
    //     axios.get(getRecipesURL)
    //         .then(res => setNutrients(res.data))
    // }, [])

    useEffect(() => {
        axios.get(NutrientsList)
            .then(res => setNutrients(res.data))
    }, [])

    return (
        <section className='nutrients'>
            <div className='nutrients-nutritionFacts'>Nutrition Facts</div>
            <div className='nutrients-calories nutrients-section'><span className='nutrients-bold'>Calories:</span> {nutrients.calories}</div>
            <Nutrient nutrients={nutrients} currentRecipeId={currentRecipeId} />
        </section>
    );
}

export default Nutrients;