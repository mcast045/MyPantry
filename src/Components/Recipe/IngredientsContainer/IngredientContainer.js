import React from 'react'
import Nutrients from '../../Nutrients/Nutrients'
import RecipeIngredients from './RecipeIngredients'

const IngredientContainer = ({ currentRecipe }) => {
    return (
        <section className='recipe_conatiner-ingredients'>
            <img className='recipe_conatiner-img' src={currentRecipe.image} alt={`${currentRecipe.title}-img`} />
            {currentRecipe.id &&
                <div className='recipe-ingredients-container'>
                    {currentRecipe.usedIngredients.length > 0 && <RecipeIngredients ingredients={currentRecipe.usedIngredients} recipeTypeTitle={'What You Have'} />}
                    {currentRecipe.missedIngredients.length > 0 && <RecipeIngredients ingredients={currentRecipe.missedIngredients} recipeTypeTitle={'What You Need'} />}
                </div>
            }
            <Nutrients currentRecipeId={currentRecipe.id} />
        </section>
    );
}

export default IngredientContainer;