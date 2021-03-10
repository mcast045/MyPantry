import React, { Fragment, useEffect, useState } from 'react'
import './RecipeIngredients.css'
import { upperCaseIngredient } from '../../../Helpers/Helper'

const RecipeIngredients = ({ ingredients, recipeTypeTitle }) => {

    const [uniqueIngredients, setUniqueIngredients] = useState([])
    useEffect(() => {
        const ingredientSet = new Set()
        ingredients.map(ingredient => ingredientSet.add(ingredient.name))
        setUniqueIngredients([...ingredientSet])
    }, [ingredients])

    return (
        <Fragment>
            {uniqueIngredients.length > 0 &&
                <div className='ingredients-container'>
                    <div className='ingredients-title'>{recipeTypeTitle}</div>
                    {uniqueIngredients.map((ingredient, i) => (
                        <div key={i} className='ingredients'>{upperCaseIngredient(ingredient)}</div>
                    ))}
                </div>}
        </Fragment>
    );
}

export default RecipeIngredients;