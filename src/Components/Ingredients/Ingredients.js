import React, { useState, Fragment } from 'react'
import './Ingredients.css'
import AlphaIngredients from './Components/AlphaIngredients/AlphaIngredients'
import FullListOfIngredients from './Components/FullIngredientList/FullListOfIngredients'

const Ingredients = ({ selectedIngredients, setSelectedIngredients }) => {

    const [ingredients, setIngredients] = useState([])
    const [letter, setLetter] = useState('')

    //Show Ingredients that being with that character user clicked
    const onLetterClick = char => {
        setLetter(char)
    }
    //Change ownsIngredient if user clicks ingredient
    const ownsIngredient = e => {
        const ingredientsId = ingredients.findIndex(ingredient => ingredient.ingredient === e.target.id)
        const ownsIngredient = [...ingredients]
        ownsIngredient[ingredientsId].ownsIngredient = !ownsIngredient[ingredientsId].ownsIngredient
        setIngredients(ownsIngredient)
    }
    //Store selected ingredients
    const selectingIngredients = e => {

        const selectedIngredientsId = selectedIngredients.findIndex(ingredient => ingredient === e.target.id)
        const hasIngredient = selectedIngredientsId !== -1

        if (hasIngredient) {
            //Remove item from selectedIngredients
            const copySelectedIngredients = [...selectedIngredients]
            copySelectedIngredients.splice(selectedIngredientsId, 1)
            setSelectedIngredients(copySelectedIngredients)

            ownsIngredient(e)
        } else if (!hasIngredient) {
            setSelectedIngredients([...selectedIngredients, e.target.id])
            ownsIngredient(e)
        }
    }

    //Retrieve ingredients that match the user selected letter
    const [currentIngredients, setCurrentIngredients] = useState([])

    return (
        <Fragment>
            <div className='ingredient-container'>
                <AlphaIngredients setCurrentIngredients={setCurrentIngredients} onLetterClick={onLetterClick} ingredients={ingredients} />
                <FullListOfIngredients setSelectedIngredients={setSelectedIngredients} currentIngredients={currentIngredients} setCurrentIngredients={setCurrentIngredients} selectingIngredients={selectingIngredients} setIngredients={setIngredients} ingredients={ingredients} letter={letter} selectedIngredients={selectedIngredients} />
            </div>
        </Fragment>
    );
}

export default Ingredients;