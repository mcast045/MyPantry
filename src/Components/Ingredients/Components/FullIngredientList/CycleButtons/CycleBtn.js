import React, { useEffect, useCallback, Fragment } from 'react'
import './CycleBtn.css'

const CycleBtn = ({ letter, currentIngredients, setViewableIngredients, viewableIngredients, ingredients }) => {

    //Update ingredients on screen
    const update = useCallback((id) => {
        const updatedIngredients = []
        for (let i = id; i < currentIngredients.length; i++) {
            if (i === id + 15) break
            updatedIngredients.push(currentIngredients[i])
        }
        setViewableIngredients(updatedIngredients)
    }, [setViewableIngredients, currentIngredients])
    useEffect(() => {
        update(0)
    }, [update, currentIngredients])

    const nextIngredients = () => {
        const lastIngredient = viewableIngredients[viewableIngredients.length - 1]
        const id = currentIngredients.findIndex(ingredient => ingredient.id === lastIngredient.id)
        update(id + 1)
    }
    const previousIngredients = () => {
        const id = currentIngredients.findIndex(ingredient => ingredient.id === viewableIngredients[0].id)
        update(id - 15)
    }

    return (
        <div className='ingredient-list_container-btns'>
            {viewableIngredients.length > 0 && currentIngredients.length > 0 &&
                <Fragment>
                    {viewableIngredients[0].id !== currentIngredients[0].id && <button className='border cursor btnHover prevBtnIngredient' onClick={() => previousIngredients()}>{'<<'}</button>}
                    {viewableIngredients[viewableIngredients.length - 1].id !== currentIngredients[currentIngredients.length - 1].id && <button className='border cursor btnHover nextBtnIngredient' onClick={() => nextIngredients()}>{'>>'}</button>}
                </Fragment>
            }
        </div>
    );
}

export default CycleBtn;