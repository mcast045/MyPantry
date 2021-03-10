import React, { Fragment, useEffect, useState } from 'react'
import './Recipe.css'
import IngredientContainer from '../../Components/Recipe/IngredientsContainer/IngredientContainer'
import RecipeInstruction from '../../Components/Recipe/Instruction/Instructions'
import { Link, Redirect } from 'react-router-dom'
import { upperCaseIngredient } from '../../Helpers/Helper'

const Recipe = ({ match, recipes }) => {

    const [currentRecipe, setCurrentRecipe] = useState([])
    useEffect(() => {
        const recipe = recipes.filter(recipe => recipe.id === +match.params.id)
        setCurrentRecipe(recipe[0])
    }, [match, recipes])

    if (recipes.length === 0) return <Redirect to='/' />

    return (
        <Fragment>
            {currentRecipe.title &&
                <main className='recipe_conatiner'>
                    <div className='recipe_conatiner-title'>{upperCaseIngredient(currentRecipe.title)}</div>
                    <div className='flex'>
                        <IngredientContainer currentRecipe={currentRecipe} />
                        <RecipeInstruction currentRecipeId={currentRecipe.id} />
                    </div>
                    <Link to={'/'} className='backBtn btnHover'>Back</Link>
                </main>
            }
        </Fragment>
    );
}

export default Recipe;