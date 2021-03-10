import React, { Fragment } from 'react'
import Ingredients from '../../Components/Ingredients/Ingredients'
import Recipes from '../../Components/Recipes/Recipes'

const Landing = ({ recipes, selectedIngredients, setSelectedIngredients, setShowMyIngredients }) => {
    return (
        <Fragment>
            <main className='App-body_conatiner'>
                <Ingredients selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
                {recipes.length > 0 && <Recipes recipes={recipes} setShowMyIngredients={setShowMyIngredients} />}
            </main>
        </Fragment>
    );
}

export default Landing;