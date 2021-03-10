import React, { useEffect, useState } from 'react'
import './FullListOfIngredients.css'
import axios from 'axios'
import IngredientsList from '../../../../data/Ingredients_List.csv'
import CycleBtn from './CycleButtons/CycleBtn'
import { upperCaseIngredient } from '../../../../Helpers/Helper'

const FullListOfIngredients = ({ setSelectedIngredients, currentIngredients, setCurrentIngredients, selectingIngredients, ingredients, setIngredients, letter, selectedIngredients }) => {

    //Display 15 ingredients at a time
    const [viewableIngredients, setViewableIngredients] = useState([])

    //Convert IngredientsList.csv into an array of objects
    useEffect(() => {
        axios.get(IngredientsList)
            .then(res => res.data.split("\n"))
            .then(lines => {
                const result = []
                for (let i = 0; i < lines.length; i++) {
                    const obj = {}
                    const currentline = lines[i].split(";")
                    obj.ingredient = currentline[0]
                    obj.id = currentline[1]
                    //Include common ingredients onload
                    if (currentline[0] === 'water' || currentline[0] === 'salt' || currentline[0] === 'flour') {
                        obj.ownsIngredient = true
                        const commonIngredients = selectedIngredients
                        commonIngredients.push(currentline[0])
                        setSelectedIngredients(commonIngredients)
                    } else obj.ownsIngredient = false
                    result.push(obj)
                }
                setIngredients(result)
                setCurrentIngredients(result)
                setViewableIngredients(result.slice(0, 15))
            })
    }, [])

    useEffect(() => {
        const alphabeticalIngredients = []
        if (letter === '#')
            alphabeticalIngredients.push(ingredients[0])
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].ingredient[0].toLowerCase() === letter.toLowerCase()) {
                alphabeticalIngredients.push(ingredients[i])
            } else if (ingredients[i].ingredient[0].charCodeAt(0) > letter.toLowerCase().charCodeAt(letter)) {
                //Optomize search by breaking when ascii value is greater than letter ascii value
                break
            }
        }
        setCurrentIngredients(alphabeticalIngredients)
    }, [setIngredients, letter])

    return (
        <section className='ingredient-list_container relative'>
            <div className='ingredient-list_container-grid relative'>
                <span className='ingredient-letter_border-title'>Ingredients</span>
                {viewableIngredients && viewableIngredients.map((ingredient, i) => (
                    <div key={i} className={`${ingredient.ownsIngredient ? 'ingredient-container-owned' : 'ingredient-container-unowned'} cursor`} onClick={e => selectingIngredients(e)} id={ingredient.ingredient}>
                        {upperCaseIngredient(ingredient.ingredient)}
                    </div>
                ))}
            </div>
            <CycleBtn currentIngredients={currentIngredients} letter={letter} selectedIngredients={selectedIngredients} setViewableIngredients={setViewableIngredients} viewableIngredients={viewableIngredients} ingredients={ingredients} />
        </section>
    );
}

export default FullListOfIngredients;