import React from 'react';
import './AlphaIngredients.css'
import SearchIngredients from './Search/SearchIngredients'

const AlphaIngredients = ({ setCurrentIngredients, onLetterClick, ingredients }) => {

    const alphabet = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']

    return (
        <section className='w-25 border ingredient-letter_border relative'>
            <SearchIngredients setCurrentIngredients={setCurrentIngredients} ingredients={ingredients} />
            <span className='ingredient-letter_border-title'>Search Ingredients</span>
            <div className='ingredient-letter_container'>
                {alphabet.map((letter, i) => (
                    <div key={i} className='ingredient-letter cursor border btnHover' onClick={() => onLetterClick(letter)}>
                        {letter}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AlphaIngredients;