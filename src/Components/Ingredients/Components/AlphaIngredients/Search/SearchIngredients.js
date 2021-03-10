import React, { useEffect, useState } from 'react'
import './SearchIngredients.css'

const SearchIngredients = ({ setCurrentIngredients, ingredients }) => {

    //Autocomplete
    const [inputValue, setinputValue] = useState('')
    const [autocompleteError, setAutocompleteError] = useState('ingredient-letter_match')
    const onChange = e => setinputValue(e.target.value.toLowerCase())
    useEffect(() => {
        let matches = ingredients.filter(ingredient => {
            const regex = new RegExp(`^${inputValue}`)
            return ingredient.ingredient.match(regex)
        })

        //Show matches otherwise show all ingredients
        if (inputValue.length > 0 && matches.length === 0) setAutocompleteError('ingredient-letter_error')
        else if (matches.length === 0) return
        else if (inputValue.length > 0) {
            setAutocompleteError('ingredient-letter_match')
            setCurrentIngredients(matches)
        }
        else {
            setAutocompleteError('ingredient-letter_match')
            setCurrentIngredients(ingredients)
        }
    }, [setCurrentIngredients, inputValue])


    return (
        <input type='text' placeholder='Quick Search' className={`ingredient-letter_search ${autocompleteError}`} value={inputValue} onChange={e => onChange(e)} />
    );
}

export default SearchIngredients;