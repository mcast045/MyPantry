import React from 'react'
import './Recipes.css'
import { Link } from 'react-router-dom'
import RecipeLikes from './RecipesLike/RecipesLike'
import { upperCaseIngredient } from '../../Helpers/Helper'

const Recipes = ({ recipes, setShowMyIngredients }) => {

    return (
        <section className='recipes border'>
            <h3 className='recipes-title'>Recipes</h3>
            <div className='underline'></div>
            <div className='recipes-container-grid'>
                {recipes && recipes.map((recipe, i) => (
                    <Link to={`/${recipe.id}`} onClick={() => setShowMyIngredients(false)} key={i} className='recipe-container relative'>
                        <div className='recipe-title'>{upperCaseIngredient(recipe.title)}</div>
                        <img src={recipe.image} alt={`${recipe.title}-img`} />
                        <RecipeLikes recipe={recipe} />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Recipes;