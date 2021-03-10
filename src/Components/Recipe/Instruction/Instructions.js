import React, { useEffect, useState } from 'react'
import './Instructions.css'
import axios from 'axios'
import Instruction from '.././../../data/instruction.txt'
import Steps from '../Steps/Steps'

const RecipeInstruction = ({ currentRecipeId }) => {
    const [instructions, setInstructions] = useState()

    // useEffect(() => {
    //     if (currentRecipeId) {
    //         const API_KEY = process.env.REACT_APP_Recipes
    //         const getRecipesURL = `https://api.spoonacular.com/recipes/${currentRecipeId}/analyzedInstructions?apiKey=${API_KEY}`
    //         axios.get(getRecipesURL)
    //             .then(res => {
    //                 if (res.data.length > 1) {
    //                     res.data.map(instruction => instruction.isHeaderShown = true)
    //                     res.data.map(instruction => instruction.areStepsShown = false)
    //                 } else {
    //                     res.data[0].isHeaderShown = true
    //                     res.data[0].areStepsShown = true
    //                 }
    //                 setInstructions(res.data)
    //             })
    //     }
    // }, [currentRecipeId])

    useEffect(() => {
        if (currentRecipeId) {
            axios.get(Instruction)
                .then(res => {
                    res.data.map(instruction => instruction.isHeaderShown = true)
                    res.data.map(instruction => instruction.areStepsShown = false)
                    setInstructions(res.data)
                })
        }
    }, [currentRecipeId])


    const enterInstruction = instructionsIdx => {
        const instructionCopy = [...instructions]
        instructionCopy.map(instruction => {
            if (instruction.name !== instructionCopy[instructionsIdx].name) instruction.isHeaderShown = false
            else instruction.areStepsShown = true
            return instruction
        })
        setInstructions(instructionCopy)
    }

    const isShowingSteps = (instruction) => {
        if (instruction.isHeaderShown) return { display: 'block' }
        else return { display: 'none' }
    }

    const displayInstructionHeaders = () => {
        const instructionCopy = [...instructions]
        instructionCopy.map(instruction => {
            instruction.isHeaderShown = true
            instruction.areStepsShown = false
            return instruction
        })
        setInstructions(instructionCopy)
    }

    return (
        <section className='instructions-container'>
            {instructions && instructions.map((instruction, i) => (
                <div key={i} className='instructions-steps' style={isShowingSteps(instruction)}>
                    {instruction.name &&
                        <div
                            onMouseEnter={() => enterInstruction(i)}
                            className='instructions-steps_title'>
                            {instruction.name}
                        </div>
                    }

                    {instruction && <Steps instructions={instructions} instruction={instruction} displayInstructionHeaders={displayInstructionHeaders} />}
                </div>
            ))}
        </section>
    );
}

export default RecipeInstruction;